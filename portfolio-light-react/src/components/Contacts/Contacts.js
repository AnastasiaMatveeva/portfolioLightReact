import React, {useState, useRef} from 'react';
import './Contacts.scss';
import emailIcon from "../../images/email.png";
import phone from "../../images/phone.png";
import adress from "../../images/adress.png";
// import emailjs from '@emailjs/browser';
import Form from "../Form/Form";


// const SERVICE_ID = "service_f67rd53";
// const TEMPLATE_ID = "template_njpad2b";
// const PUBLICK_KEY = "_Jz2boyM2l4OxZmR1";

const Contacts = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [text, setText] = useState("");

    // const [activeModal, setActiveModal] = useState(false);
    // let isSucces = true;

    // const form = useRef();

    // const handleSubmit = (e) => {

    //     e.preventDefault();

    //     emailjs.sendForm(`${SERVICE_ID}` , `${TEMPLATE_ID}`, form.current, `${PUBLICK_KEY}`)
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //         isSucces = false;
    //     });

        
    // }
  return (
    <section className='contacts' id="Contacts">
        <div className="contacts-content container">
             <Form/>
            <div className="contacts-details">
                <div className="contacts-details__item adress">
                    <figure>
                        <img src={adress} alt="" />
                    </figure>
                    <div className='contacts-details__item-desc'>
                        <h2>Adress</h2>
                        <p>Poland, Wroclaw, Opolska street, 93b</p>
                    </div>  
                </div>
                <div className="contacts-details__item phone">
                    <figure>
                        <img src={phone} alt="" />
                    </figure>
                    <div className='contacts-details__item-desc'>
                        <h2>Phone</h2>
                        <p>+38(097)145-54-25</p>
                    </div>    
                </div>
                <div className="contacts-details__item">
                    <figure>
                        <img src={emailIcon} alt="" />
                    </figure>
                    <div className='contacts-details__item-desc'>
                        <h2>Email</h2>
                        <p>anastasiiamatviiva@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
     
    </section>

    
  )
}

export default Contacts