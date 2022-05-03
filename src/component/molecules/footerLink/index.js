import React from 'react'
import AnchorText from '../../atoms/footerAnchorText'
import TextFooterHead from '../../atoms/textFooterHead'
import './style.css'

export default function FooterLink() {
  return (
    <div>
      <TextFooterHead text='Link' />
      <ul className='footer-link'>
          <AnchorText text='Map' />
      </ul>
    </div>
  )
}
