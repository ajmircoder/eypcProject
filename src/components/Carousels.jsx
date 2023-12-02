import React from 'react'
import "../carousels.css";

export default function Carousels() {
    return (
        <div>
            <main>
                <div className="carousel-container text-white">
                    <ul className="carousel my-carousel">
                        <input className="carousel__activator" type="radio" id="A" name="activator" defaultChecked="checked" />
                        <input className="carousel__activator" type="radio" id="B" name="activator" /><input className="carousel__activator" type="radio" id="C" name="activator" />
                        <input className="carousel__activator" type="radio" id="D" name="activator" /><input className="carousel__activator" type="radio" id="E" name="activator" />
                        <div className="carousel__controls">
                            <a href="https://www.seedtoscale.com/" target='_blank'>
                                <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1).webp" alt="" /></a>
                            <label className="carousel__control carousel__control--backward" htmlFor="E" /><label className="carousel__control carousel__control--forward" htmlFor="B" />
                        </div>

                        <div className="carousel__controls">
                            <a href="https://polygon.technology/" target='_blank'>
                                <img className='w-full' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon.webp" alt="" />
                            </a>
                            <label className="carousel__control carousel__control--backward" htmlFor="A" /><label className="carousel__control carousel__control--forward" htmlFor="C" />
                        </div>

                        <div className="carousel__controls">
                            <a href="https://jupiter.money/" target='_blank'>
                                <img className='w-full' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter.webp" alt="" />
                            </a>

                            <label className="carousel__control carousel__control--backward" htmlFor="B" /><label className="carousel__control carousel__control--forward" htmlFor="D" />
                        </div>
                        <div className="carousel__controls">
                            <a href=" https://www.novabenefits.com/" target='_blank'>

                                <img className='w-full' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212.webp" alt="" />
                                <label className="carousel__control carousel__control--backward" htmlFor="C" /><label className="carousel__control carousel__control--forward" htmlFor="E" />
                            </a>

                        </div>
                        <div className="carousel__controls">
                            <a href="https://www.letsventure.com/" target='_blank'>
                                <img className='w-full' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041c4e6f21544db8a4dfc2_Let%27s%20Venture.png" alt="" />
                            </a>
                            <label className="carousel__control carousel__control--backward" htmlFor="D" /><label className="carousel__control carousel__control--forward" htmlFor="A" />
                        </div>
                    
                        <li className="carousel__slide">
                            <h1 className='carousel__controls_h1 md:text-3xl xl:text-5xl '>SeedToScale by Accel</h1>
                            <p className='carousel-container_h3 xl:text-xl '>Branding, UI/UX, SEO, Webflow</p>
                        </li>
                        <li className="carousel__slide">
                            <h1 className='carousel__controls_h1 md:text-3xl xl:text-5xl '>Polygon Labs</h1>
                            <p className='carousel-container_h3 xl:text-xl '>UI/UX, 3D, Webflow, Interactions</p>
                        </li>
                        <li className="carousel__slide">
                            <h1 className='carousel__controls_h md:text-3xl1 xl:text-5xl '>Jupiter</h1>
                            <p className='carousel-container_h3 xl:text-xl '>Webflow, Automations, Viral Loops</p>
                        </li>
                        <li className="carousel__slide">
                            <h1 className='carousel__controls_h1 md:text-3xl xl:text-5xl '>Nova benefits</h1>
                            <p className='carousel-container_h3 xl:text-xl '>UI/UX, 3D, Webflow, Interactions</p>
                        </li>
                        <li className="carousel__slide">
                            <h1 className='carousel__controls_h1 md:text-3xl xl:text-5xl '>Lets Venture & Scalix</h1>
                            <p className='carousel-container_h3 xl:text-xl '>Branding, UI/UX, SEO, Webflow, Bubble.io</p>
                        </li>
                    </ul>
                </div>

            </main>
        </div>
    )
}
