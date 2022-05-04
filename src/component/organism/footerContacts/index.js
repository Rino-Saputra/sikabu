import React from 'react'
import FooterContact from '../../molecules/footerContact'
import TextFooterHead from '../../atoms/textFooterHead'

export default function FooterContactsList() {
  return (
    <div className='mb-2'>
        <TextFooterHead text='GET IN TOUCH' />
        <ul style={{ listStyle: 'none', padding: 0}}>
            <FooterContact iconName='telephone' text='+62 123 456 789' />
            <FooterContact iconName='email' text='sikabu@gmail.com' />
            <FooterContact iconName='whatapp' text='123 456 789 111' />
        </ul>
    </div>
  )
}
