import React, { useState } from 'react'
import Button from './Button';

export default function Profiles() {
    const [count, setCount] = useState(0)

    const employ = [
        {
            name: "Leon Stern",
            work: "Director of Digital, Polygon",
            about: "Honestly, I never worked with a better partner before. There is always someone available to help, you always deliver on time with great quality. For the last 12 months we have been working on very complex products & the experience working with EPYC Team has been excellent.",
            img: "//assets-global.website-files.com/6493e2c640a47641d704896f/64b841c3f09f7f2c97243bbd_leon.webp"
        },
        {
            name: "ASIS PANDA",
            work: "Director of Design, Nova Benefits",
            about: "We were not looking for an agency, we were looking for a team who would have as much skin in the game as us. EPYC delivered through and through without leaving a single stone unturned. With their help, we have launched and it has gone on to organically be featured in many respected and admired website design curations and awards.",
            img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64b84254473886534c78bcc2_asis-panda-director-of-design-nova-benefits.webp"
        },
        {
            name: "PAROMITA GUPTA",
            work: "Head of Marketing & Communications, 3one4 Capital",
            about: "EPYC is arguably one of the most professional & dedicated no-code design studios, going above & beyond, working with you to ensure excellent results.They provide the perfect combination of collaborative & professional support. The team is creative, attentive to detail, & very responsive to the needs of their clients.",
            img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64b842a4488ee426e175b84f_636169075ea25ffb8f71f6fd_Paro.webp"
        }
    ]
    if (count == employ.length) {
        setCount(0);
    }

    return (
        <div className='bg-[#252525ff] text-[#f1d9afff]'>
            <header className='flex items-center justify-center py-10 px-4' >
                <hr className=' w-full bg-red-700 hidden lg:inline-block' />
                <h1 className=' mx-1 text-center text-2xl md:text-5xl'>/OUR</h1>
                <h1 className=' mx-1 text-center text-2xl md:text-5xl'>HAPPY</h1>
                <h1 className=' mx-1 text-center text-2xl md:text-5xl'>CUSTOMERS</h1>
                <hr className='hidden w-full bg-red-700 lg:inline-block' />
            </header>
            {count < employ.length ? <main className='text-center py-10 md:py-20 lg:text-left lg:grid grid-cols-2'>
                <div>
                    <img src={employ[count].img} className="h-80 border border-[#f1d9afff] p-4 xl:px-5 object-fill mx-auto lg:w-[50%] xl:w-[40%] lg:mx-auto  rounded-full lg:rounded-lg my-2 " alt="" />
                    <button className=' mx-auto block my-5 px-5 py-2 bg-[#f1d9afff] active:bg-[#928268] text-white rounded-xl ' onClick={() => setCount(count + 1)}>&rarr;</button>
                </div>
                <div className='place-self-center lg:pr-4'>
                    <h1 className='py-5 text-3xl md:text-4xl lg:text-5xl'>{employ[count].name}</h1>
                    <h1 className='py-3 text-2xl md:text-3xl'>{employ[count].work}</h1>
                    <hr className=" h-0.5 my-8 lg:text-2xl bg-[#f1d9afff] border-0 " />
                    <h1 className='my-2'>{employ[count].about}</h1>
                </div>
            </main> : <img src={employ[0].img} alt="" />}
            <footer className='py-10'>
                <h1 className='text-center text-xl md:text-3xl mb-4 lg:mb-5'>/START YOUR PROJECT/</h1>
                <h1 className='text-center text-3xl md:text-6xl mb-5 lg:mb-10'>ITS TIME, WE CREATE</h1>
                <hr className=" h-0.5 my-8 lg:text-2xl bg-[#f1d9afff] border-0" />
                <a href="https://epyc.in/contact"><Button text="BOOK A CALL" background="bg-[#f1d9afff]"/></a>
            </footer>
        </div>
    )
}
