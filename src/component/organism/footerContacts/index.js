import React from 'react'
import FooterContact from '../../molecules/footerContact'
import TextFooterHead from '../../atoms/textFooterHead'

export default function FooterContactsList() {
  return (
    <div className='mb-2'>
        <TextFooterHead text='HUBUNGI KAMI' />
        <ul style={{ listStyle: 'none', padding: 0}}>

          <a href='tel:081288901667' style={{textDecoration: 'none'}} >
            <FooterContact 
              iconName='telephone' 
              text='+62 12 8890 1667' 
              iconColor='#f96900' 
            />
          </a>
          <a href="mailto:sikabutabekmandi@gmail.com?subject&body" style={{textDecoration: 'none'}} >
            <FooterContact 
              iconName='email' 
              text='sikabutabekmandi@gmail.com' 
              iconColor='#f96900'
            />
          </a>
          <a href="https:/wa.me/628299833477" style={{textDecoration: 'none'}} >
            <FooterContact 
              iconName='whatapp' 
              text='+62 82 9983 3477' 
              iconColor='#f96900'
            />
          </a>

        </ul>
    </div>
  )
}
