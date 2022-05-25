import React from 'react'
import AnchorText from '../../atoms/footerAnchorText'
import SvgIcon from '../../atoms/iconSVG'

export default function FooterContact( { iconName, text, iconColor } ) {
  return (
    <li>
      <div className='d-flex align-items-center my-3'>
        <SvgIcon name={iconName} iconColor={iconColor}/>
        <div className='ms-2'>
          <AnchorText text={text} />
        </div>
      </div>
    </li>
  )
}
