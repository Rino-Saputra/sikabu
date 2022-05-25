import React from 'react'
import FooterContact from '../../molecules/footerContact'
import TextFooterHead from '../../atoms/textFooterHead'

export default function FooterContactsList() {
  return (
    <div className='mb-2'>
        <TextFooterHead text='CONTACT US' />
        <ul style={{ listStyle: 'none', padding: 0}}>
            <FooterContact iconName='telephone' text='+62 12 8890 1667' iconColor='#f96900' />
            <FooterContact iconName='email' text='sikabutabekmandi@gmail.com' iconColor='#f96900'/>
            <FooterContact iconName='whatapp' text='+62 82 9983 3477' iconColor='#f96900'/>
        </ul>
    </div>
  )
}
