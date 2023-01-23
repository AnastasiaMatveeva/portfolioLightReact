# PDF to image loader for WebPack

This loader gets a PDF file, converts it to images, and emit those files. It also returns the dimensions for each page.

## Prerequisites

It calls the ```pdftocairo``` command which must be installed prior to using this plugin. It is included in [Poppler](https://poppler.freedesktop.org/).

## Installation

```
npm install pdf-loader
```

## Usage

Load the PDF using ```import```:

```
import pdf from "pdf-loader!./my.pdf";
```

The ```pdf``` variable holds the paths to the images and the dimensions:

```
[
  {image: "/my-page0-hash.png", size: {width: 595, height: 842}},
  {image: "/my-page1-hash.png", size: {width: 595, height: 842}},
  ...
]
```

If you use React, you can insert the pages directly to the DOM:

```
<img src={pdf[0].image}/>
```
