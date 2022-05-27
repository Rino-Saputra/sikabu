import React, {useState} from 'react'
import AnchorText from '../../atoms/footerAnchorText'
import TextFooterHead from '../../atoms/textFooterHead'
import TempModal from '../../template/modal/tempModal/TempModal'
import './style.css'

export default function FooterLink() {

  const[show, setShow]=useState(false);

  return (
    <div className='mb-4'>
      <TextFooterHead text='LINK' />
      <ul className='footer-link' onClick={()=>setShow(!show)}>
          <AnchorText text='Map' />
          <AnchorText text='Terms of services' />
          <AnchorText text='Privacy Policy' />
      </ul>
      <TempModal 
        handleClose={()=>setShow(!show)} 
        show={show}
      />
    </div>
  )
}
