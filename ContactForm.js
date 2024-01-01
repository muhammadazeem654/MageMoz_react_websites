

// import '././AboutBanner.css';

import './Contactform.css';

import React, {useState} from "react";

let ContactForm = () => {
    const [txt, setTxt] = useState('');
 
  const onInputChange = e => {
    const { value } = e.target;
    console.log('Input value: ', value);
 
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  }
    return(
          
            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mvonzpkv" method="POST" className="contact-inputs">
                        <input className="form-control"  value={txt} name="username" placeholder="Name" 
                       onChange={onInputChange} autoComplete="off"  required/>
                        <input type="email" className="form-control" name="Email" placeholder="Email" autoComplete="off"  required/>
                        
                        <textarea className='form-control' name="meassage" cols="30" placeholder='your project detail'
                        rows="6"
                        autoComplete="off"
                        required></textarea>

 
                       <button className="cbf btn submit-btn col-4"  type="submit">Get in Touch</button>
                    </form>

                </div>
            </div>
            
    
    );
}

export default ContactForm;