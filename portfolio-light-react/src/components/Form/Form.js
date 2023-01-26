import React, {useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import './Form.scss';

const SERVICE_ID = "service_f67rd53";
const TEMPLATE_ID = "template_njpad2b";
const PUBLICK_KEY = "_Jz2boyM2l4OxZmR1";
import Modal from "../Modal/Modal";


const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    let isSucces = true;
    const [activeModal, setActiveModal] = useState(false);


    const form = useRef();

    const onSubmit = () => {

        ///email-js
        emailjs.sendForm(`${SERVICE_ID}` , `${TEMPLATE_ID}`, form.current, `${PUBLICK_KEY}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            isSucces = false;
        });
    }
        ///eact-hook-form

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    });

  return (
    <>
     <form className="contacts-form" onSubmit={handleSubmit(onSubmit)} ref={form}>

                    <input
                        {...register("to_name", {
                            required: "Please enter your name"
                        })}
                        type="text" 
                        className='contacts-form__name'
                        placeholder='Name'
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        />
                        <div className='error_text'>
                            {errors?.to_name && <p>{errors?.to_name?.message || "Error!"}</p> }
                        </div>
                    <input 
                     {...register("from_name", {
                        required: "Please enter your email",
                        pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                        })}
                        type="email"
                        className='contacts-form__email' 
                        placeholder='Email'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}/>
                     <div className='error_text'>
                            {errors?.from_name && <p>{errors?.from_name?.message || "Error!"}</p> }
                        </div>
                    <textarea 
                       {...register("message", {
                        required: "Please enter your message",
                        })}
                        type="text" 
                        className='contacts-form__message'
                        placeholder='Message'
                        value={text}
                        onChange={e=>setText(e.target.value)}/>
                    <div className='error_text'>
                        {errors?.message && <p>{errors?.message?.message || "Error!"}</p> }
                     </div>    
                    <button className="contacts-form__btn" onClick={()=>setActiveModal(true)} disabled={!isValid}>Send Message</button>
                </form>
                <Modal active={activeModal} setActive={setActiveModal}>
                     <p>{isSucces ? `Thank you! Your massage was successfuly delivered!`: `Ups...something went wrong...((()`}</p>
                </Modal>
    </>
      

                
  )
}

export default Form;