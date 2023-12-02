import React from 'react';
import Carousels from './Carousels';
import Button from './Button';

export default function FeaturedWork() {
    return (
        <div>
            <header className='grid grid-cols-1 mt-10 mb-8'>
                <h1 className='text-center text-2xl md:text-5xl inline-block'>
                    <hr className=' bg-red-700 hidden lg:inline-block md:w-1/5 xl:w-1/4 mb-4' /> /FEATURED WORK/ <hr className='hidden bg-red-700 lg:inline-block md:w-1/5 xl:w-1/4 mb-4' /></h1>
            </header>
            <main>
                    <div className='md:hidden'>
                        <a href="https://www.seedtoscale.com/" target='_blank'>
                            <div className="">
                                <img className=' rounded-md' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1).webp" alt="" />
                                <h1 className=' pt-4'>SeedToScale by Accel</h1>
                                <p className='  py-2'>Branding, UI/UX, SEO, Webflow</p>
                                <hr className=' bg-red-700 my-4' />
                            </div>
                        </a>
                        <a href="https://polygon.technology/" target='_blank'>
                            <div className="">
                                <img className=' rounded-md' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-1600.webp" alt="" />
                                <h1 className='pt-4 '>Polygon Labs</h1>
                                <p className='py-2'>UI/UX, 3D, Webflow, Interactions</p>
                                <hr className=' bg-red-700 my-4' />
                            </div>
                        </a>
                        <a href="https://jupiter.money/" target='_blank'>

                            <div className="">
                                <img className=' rounded-md' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-1600.webp" alt="" />
                                <h1 className='pt-4'>Jupiter</h1>
                                <p className='py-2'>Webflow, Automations, Viral Loops</p>
                                <hr className=' bg-red-700 my-4' />
                            </div>
                        </a>
                        <a href=" https://www.novabenefits.com/" target='_blank'>
                            <div className="">
                                <img className=' rounded-md' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-1600.webp" alt="" />
                                <h1 className='pt-4'>Nova benefits</h1>
                                <p className='py-2'>UI/UX, 3D, Webflow, Interactions</p>
                                <hr className=' bg-red-700 my-4' />
                            </div>
                        </a>
                        <a href="https://www.letsventure.com/" target='_blank'>
                            <div className="">
                                <img className=' rounded-md' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041c4e6f21544db8a4dfc2_Let%27s%20Venture-p-1600.png" alt="" />
                                <h1 className='pt-4'>Lets Venture & Scalix</h1>
                                <p className='py-2 '>Branding, UI/UX, SEO, Webflow, Bubble.io</p>
                                <hr className=' bg-red-700 my-4' />
                            </div>
                        </a>
                    </div>
                    <div className=' hidden md:block'>
                        <Carousels />
                    </div>
            </main>
            <footer className=' md:mb-20'>
            <Button text="SEE ALL PROJETCS" background='bg-[#b91647ff]'/>
            </footer>
        </div>
    )
}
