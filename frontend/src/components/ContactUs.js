import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = () => {

  const [captchaToken, setCaptchaToken] = useState('');

  const handleCaptchaChange = (token) => {
    // Called when the user completes the CAPTCHA and provides the token
    setCaptchaToken(token);
  };

  const[formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    topics: '',
    contact: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (captchaToken) {
      const { fname, lname, email, topics, contact } = formData;
      
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fname, lname, email, topics, contact }),
        });
        
        const data = await response.json();
        console.log(data.message);
        // Handle the response from the backend
      } catch (error) {
        console.log(error);
        // Handle the error
      }
    }
  };

  return (
    <section id='' style={{background:'black', paddingTop: '30px', paddingBottom:'30px'}}>
      <div style={{display: 'flex', justifyContent:'space-around', color:'red', padding:'10px'}}>
       
        <div style={{justifyContent:'center',width: '100%', padding:'5px', display: 'flex'}}>
          <div style={{ width: '350px', background: 'white', padding: '40px', borderRadius:'10px'}}>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
              
                <input required onChange={handleInputChange} placeholder='Enter First Name' type="text" id="fname" name="fname" maxlength="20" />
                <input required onChange={handleInputChange} placeholder='Enter Last Name'type="text" id="lname" name="lname" maxlength="20"/>
                <input required onChange={handleInputChange} placeholder='Email'type="email" id="email" name="email" width="100%"/>
                <input  onChange={handleInputChange} placeholder='Topics List: JS, React, etc.'type="text" id="topics" name="topics" width="100%"/>
                <input  onChange={handleInputChange} placeholder='WhatsApp number'type="number" id="contact" name="contact" width="100%"/>
                <div>
                  <ReCAPTCHA
                    sitekey="6LfwWCsnAAAAAGJT_bWPPU3I1D-sq_UEfQKVX4wk" // Replace with your reCAPTCHA Site Key
                    onChange={handleCaptchaChange}
                  />
                </div>
                <button type='submit'>Submit</button>
              
            </form>


          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs