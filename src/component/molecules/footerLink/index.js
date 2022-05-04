import React from 'react'
import AnchorText from '../../atoms/footerAnchorText'
import TextFooterHead from '../../atoms/textFooterHead'
import './style.css'

export default function FooterLink() {
  return (
    <div className='mb-4'>
      <TextFooterHead text='Link' />
      <ul className='footer-link'>
          <AnchorText text='Map' />
          <AnchorText text='Terms of services' />
          <AnchorText text='Privacy Policy' />
      </ul>
    </div>
  )
}
