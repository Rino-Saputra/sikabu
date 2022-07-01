import React, {useState} from 'react'
import AnchorText from '../../atoms/footerAnchorText'
import TextFooterHead from '../../atoms/textFooterHead'
import TempModal from '../../template/modal/tempModal/TempModal'
import './style.css'

export default function FooterLink(props) {

  return (
    <div className='mb-4'>
      <TextFooterHead text='LINK' />
      <ul className='footer-link'>
          <AnchorText text='Map' activeLink={(link)=>props.parentNode(link)}/>
          <AnchorText text='Terms of services' activeLink={(link)=>props.parentNode(link)}/>
          <AnchorText text='Privacy Policy' activeLink={(link)=>props.parentNode(link)}/>
      </ul>
    </div>
  )
}
