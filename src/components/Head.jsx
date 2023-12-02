import React from 'react'
import Button from './Button'

export default function Head() {
    return (
        <div>
            <header className='grid grid-cols-2 sm:grid-cols-[35%_30%_35%] mb-2 md:mb-10 py-3'>
                <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64998075979306f7e73bf787_epyc-logo.svg" loading="lazy" width="52" height="16" alt="" />
                <div className='hidden sm:block text-md'>
                    <marquee behavior="scroll" scrollamount="3">
                        <span className='mx-1 border border-slate-900 rounded-full p-0.5'>&Psi;</span> Webflow Professional Partners
                        <span className='mx-1 border border-slate-900 rounded-full p-0.5'>&Psi;</span> Bubble Bronze Agency
                        <span className='mx-1 border border-slate-900 rounded-full p-0.5'>&Psi;</span> Webflow Professional Partners
                        <span className='mx-1 border border-slate-900 rounded-full p-0.5'>&Psi;</span> Bubble Bronze Agency
                    </marquee>
                </div>
                <a href="" className="flex justify-end">TEAM@EPYC.IN</a>
            </header>
            <main className='px-5 py-10 md:px-10 md:py-20'>
                <h1 className='text-center text-2xl md:text-4xl lg:text-7xl mb-2 md:mb-4'>We Design & Build </h1>
                <h1 className='text-center text-2xl md:text-4xl lg:text-7xl mb-10 md:mb-12 after:hidden lg:after:inline-block'>kickass websites & apps
                {/* <img className='butterfly inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b792e8d4bc082efaec4b5d_butterfly-p-500.webp" alt="" /> */}
                </h1>
                <div className=' sm:flex justify-center mb-10 md:mb-14'>
                <Button text="OUT WORK" background="bg-[#115652ff]"/>
                <Button text="BOOK A CALL" background='bg-[#b91647ff]'/>
                </div>
                <div className='mb-20 p-2'>
                    <p className=' text-center text-xl'>Designed & developed 75+ websites & apps <br /> 10x faster using Webflow, Bubble, & FlutterFlow.</p>
                </div>
            </main>
            <footer className='md:p-20'>
            <marquee behavior="scroll" scrollamount="5" className="border border-red-700 rounded-full px-2 py-4">
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160dba0fc13623e4bf91_nova-benefits-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160d5c8901d87e37bc1f_stoa-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f418c4f86ad4f417194b0c_letsventure-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160dab86dd89fd3e116b_snaptrude-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160db31af272726c578b_xoxoday-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160dba0fc13623e4bf4f_polygon-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160db777afc8f2a60d6f_jupiter-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160d8a3d2877d15fbd07_healthkart-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160c4ab67502c7240b24_amazon-logo.svg" 
                loading="lazy" alt="" />
                <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160cf762b61424fe8b78_accel-logo.svg"
                 loading="lazy" alt="" />
                 <img className='inline-block' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/650ad9adee42c69db17d58f2_Frame%2030.svg" 
                 loading="lazy" alt=""  />
                  </marquee>
    
                
            </footer>
        </div>
    )
}
