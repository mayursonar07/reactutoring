import React from 'react'

const ContactUs = () => {
  return (
    <section id='' style={{background:'black', paddingTop: '30px', paddingBottom:'30px'}}>
      <div style={{display: 'flex', justifyContent:'space-around', color:'red', padding:'10px'}}>
        <div style={{width: '100%', padding:'10px'}}>
          Description
        </div>
        <div style={{width: '100%', padding:'10px'}}>
          <div style={{background: 'white', padding: '40px', borderRadius:'10px'}}>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              
                <input required placeholder='Enter First Name' type="text" id="fname" name="fname" maxlength="20" />
                <input placeholder='Enter Last Name'type="text" id="lname" name="lname" maxlength="20"/>
                <input placeholder='Email'type="email" id="email" name="email" width="100%"/>
                <input placeholder='Topics List: JS, React, etc.'type="text" id="topics" name="topics" width="100%"/>
                <input placeholder='WhatsApp number'type="number" id="email" name="email" width="100%"/>
                <button>Submit</button>
              
            </form>


          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs