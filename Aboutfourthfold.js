import './AboutBanner.css';

import React, {useState} from 'react';

let Aboutfourthfold = () => {
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
                <div className= "row justify-content-center align-items-center text-center page-title-heading mt-5 pt-5">
                <div className='col-md-6'>
                    <h2>Interested in Working Together?</h2>
                </div>
                </div>
                <div className="contact-form">
                    <form action="https://formspree.io/f/mvonzpkv" method="POST" className="contact-inputs">
                        <input className="form-control"  value={txt} name="username" placeholder="Name" 
                       onChange={onInputChange} autoComplete="off"  required/>
                        <input type="email" className="form-control" name="Email" placeholder="Email" autoComplete="off"  required/>
                        
                        <textarea className='form-control' name="meassage" cols="30" placeholder='your project detail'
                        rows="6"
                        autoComplete="off"
                        required></textarea>


                       <button className="btn submit-btn col-4"  type="submit">Contact Us</button>
                    </form>

                </div>
            </div>
            
    
    );
}

export default Aboutfourthfold;