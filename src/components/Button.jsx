import React from 'react'

export default function Button({text, background}) {
  return (
    <div className='m-4'>
        <button className={`${background} hoverClass mx-auto text-white px-8 py-4 hover:pl-9 hover:pr-7 md:px-14  md:py-6 rounded-full block md:hover:pr-12 md:hover:pl-16 `}>{text} &#x2192;</button>
    </div>
  )
}
