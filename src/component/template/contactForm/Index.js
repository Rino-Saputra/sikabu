import React from 'react'
import InputText from '../../atoms/input';
import ButtonText from '../../atoms/button/ButtonText';
import './style.css'

export default function ContactForm() {
  return (
    <form className='form-contact'>
        <div className="mb-3">
            <InputText type='text' name='name' placeholder='Username' />
        </div>
        <div className="mb-3">
            <InputText type='text' name='subject' placeholder='Subject' />
        </div>
        <div className="mb-3">
            <textarea 
                name='description' 
                className="form-control" 
                style={{borderRadius: 28, padding: '10px 15px'}} 
                rows="8"
                placeholder='Pesan anda'>
            </textarea>
        </div>
        <ButtonText type='submit' text='Kirim' /> 
    </form>
  )
}
