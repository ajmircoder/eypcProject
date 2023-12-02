import React from 'react'

export default function Service() {
    return (
        <div>
            <header className='grid grid-cols-1 mt-10 mb-5'>
                <h1 className='text-center text-2xl md:text-5xl inline-block'>
                    <hr className=' bg-red-700 hidden lg:inline-block md:w-1/5 xl:w-1/4 mb-4' /> /FEATURED WORK/ <hr className='hidden bg-red-700 lg:inline-block md:w-1/5 xl:w-1/4 mb-4' /></h1>
            </header>

            <main className=' lg:grid grid-cols-[50%_1fr]'>
                <div className='hidden lg:flex justify-center items-center'>
                    <img className='butterfly' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b792e8d4bc082efaec4b5d_butterfly-p-500.webp" alt="" />
                </div>
                <div className=''>
                    <h1 className=' md:text-center md:text-xl mb-5 md:my-20'>Engage your customers on the platforms they Love. <br /> Website or Apps - we have you covered.</h1>
                    <div className='pr-20 pl-5 parent
                     border-t-red-700 border-t-[1px] py-7 rounded-t-2xl md:hover:bg-[#b91647ff] md:hover:text-white'>
                        <h1 className='mb-3 text-xl'>UI / UX Design</h1>
                        <p className='hidden-child  '>Exceptional user experience is vital for designing great products. Be it for a website, app. We create seamless digital products for our customers.</p>
                    </div>
                    <div className='pr-20 pl-5 parent
                     border-t-red-700 border-t-[1px] py-7 rounded-t-2xl md:hover:bg-[#b91647ff] md:hover:text-white'>
                        <div>
                            <h1 className='mb-3 text-xl'>Creative Design / Development</h1>
                            <p className='hidden-child'>We work at intersection of art, design & technology. Our goal is to deliver amazing experiences that make people talk, & build strategic value for brands, tech, entertainment, arts & culture.</p>
                        </div>
                    </div>
                    <div className='pr-20 pl-5 parent
                     border-t-red-700 border-t-[1px] py-7 rounded-t-2xl md:hover:bg-[#b91647ff] md:hover:text-white'>
                        <div>
                            <h1 className='mb-3 text-xl'>Webflow & Wordpress Development</h1>
                            <p className='hidden-child'>A website can't just be a catalog. We understand needs of fast pace marketing/GTM teams. 75+ organisations have trusted us for creating high quality websites for them</p>
                        </div>
                    </div>
                    <div className='pr-20 pl-5 parent
                     border-t-red-700 border-t-[1px] py-7 rounded-t-2xl md:hover:bg-[#b91647ff] md:hover:text-white'>
                        <div>
                            <h1 className='mb-3 text-xl'>No-Code/SaaS development</h1>
                            <p className='hidden-child'>We leverage the power of no-code/low-code tools like Bubble.io, FlutterFlow & Webflow to build your apps 10X faster than traditional coders.</p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
