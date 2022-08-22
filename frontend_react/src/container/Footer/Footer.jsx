import React, {useState} from 'react'

import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'

function Footer() {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isformSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, SetLoading] = useState(false)

  //destrcuture
  const { name, email, message} = formData

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    SetLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    // upload data to sanity
    client.create(contact)
      .then(() => {
        SetLoading(false);
        setIsFormSubmitted(true)

      })
  }


  return (
    <>
      <h2 className='head-text'>
        Take a coffee & chat with me!
      </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:alvaro@ormeno.org" className='p-text'>
            alvaro@ormeno.org
          </a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (305) 710-0235" className='p-text'>
          +1 305-710-0235
          </a>
        </div>
      </div>


      {!isformSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input 
            className='p-text' 
            type="text" 
            placeholder='Your Name'
            name='name'
            value={name}
            onChange={handleChangeInput} />
        </div>

        <div className='app__flex'>
          <input 
            className='p-text' 
            type="email" 
            placeholder='Your email'
            name='email'
            value={email}
            onChange={handleChangeInput} />
        </div>

        <div>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>
          {loading ? 'sending' : 'Send Message'}
        </button>
      </div>
      :
      <div>
        <h3 className='head-text'>Thanks You for getting in touch</h3>
      </div> }

    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')