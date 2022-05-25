import React from 'react'
import FooterContact from '../../molecules/footerContact'
import SvgIcon from '../../atoms/iconSVG'

export default function ContactInformation() {
  return (
    <ul style={{ listStyle: 'none', padding: 0}}>
        <div className="d-flex">
            <SvgIcon name='map' iconColor='#a3a39e'/>
            <div className='ms-2 text-secondary lh-1'>
                <p className='fs-6'>Kelok Sikabu, Koto Tuo</p>
                <p className='fs-6'>Kabupaten Agam, Sumatera Barat 26161</p>
            </div>
        </div>
        <div className='mb-4'>
            <FooterContact iconName='telephone' text='+62 12 8890 1667' iconColor='#a3a39e'/>
        </div>
        <div className='mb-4'>
            <FooterContact iconName='email' text='sikabutabekmandi@gmail.com' iconColor='#a3a39e'/>
        </div>
        <div className='mb-4'>
            <FooterContact iconName='whatapp' text='+62 82 9983 3477' iconColor='#a3a39e'/>
        </div>
    </ul>
  )
}
