const {input, version} = require("node-pdftocairo");
const loaderUtils = require("loader-utils");
const {PDFDocument} = require("pdf-lib");
const crypto = require("crypto");
const findCacheDir = require("find-cache-dir");
const {promises: fs, constants, createWriteStream} = require("fs");
const path = require("path");
const JSZip = require("jszip");
const stream = require("stream");
const util = require("util");
const pjson = require("./package.json");

const finished = util.promisify(stream.finished);

const thunk = findCacheDir({name: "pdf-loader", thunk: true});

const sha = (x) => crypto.createHash("sha256").update(x).digest("hex");

const fileExists = async (file) => {
	try {
		await fs.access(file, constants.F_OK);
		return true;
	}catch(e) {
		return false;
	}
};

const ASSET_PATH = process.env.ASSET_PATH || "/";

const getVersionHash = (() => {
	let prom = undefined;

	return () => prom = (prom || (async () => sha(sha(await version()) + sha(pjson.version)))());
})();

const getCacheDir = (() => {
	const cacheDir = thunk();

	let prom = undefined;
	return () => prom = (prom || (async () => {
		await fs.mkdir(cacheDir, {recursive: true});

		return cacheDir;
	})());
})();

module.exports = function (source) {
	const callback = this.async();
	(async () => {
		const cacheFile = path.join(await getCacheDir(), sha(await getVersionHash() + sha(source)));

		const images = await (async () => {
			if (await fileExists(cacheFile)) {
				const file = await fs.readFile(cacheFile);

				const zip = await JSZip.loadAsync(file);
				const files = await Promise.all(
					Object.values(zip.files)
						.sort(({name: name1}, {name: name2}) => new Intl.Collator(undefined, {numeric: true}).compare(name1, name2))
						.map((file) => file.async("nodebuffer"))
				);
				return files;
			}else {
				const res = await input(source, {format: "png"}).output();

				const zip = new JSZip();
				res.forEach((file, i) => {
					zip.file(String(i), file);
				});
				await finished(
					zip.generateNodeStream({streamFiles: true})
						.pipe(createWriteStream(cacheFile))
				);
				return res;
			}
		})();

		const imageNames = images.map((file, i) => {
			return loaderUtils.interpolateName(this, `[name]-page${i}-[contenthash].png`, {content: file});
		});

		images.forEach((file, i) => {
			this.emitFile(imageNames[i], file);
		});

		const pdfDoc = await PDFDocument.load(source);
		
		const results = imageNames.map((imageName, i) => {
			return {
				image: `${ASSET_PATH}${imageName}`,
				size: pdfDoc.getPages()[i].getSize(),
			};
		});

		return `export default ${JSON.stringify(results)}`;
	})().then((res) => callback(undefined, res), (err) => callback(err));
};

module.exports.raw = true;
