import React from 'react'
import heroimg from "../assets/hero-img.png"
import aboutimg from "../assets/about-img.png"
const Hero = () => {
    return (
        <div>
            {/* bootstrap */}
                <div className="container" >
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                            <div className="mt-5">
                                <h1 >Welcome to AfterSchool</h1>
                                <p>"Your guide to life skills for a successful and fulfilling future. Learn practical skills like personal finance, time management, communication, healthy living, and sustainable practices, all in one place."
                                </p>
                                <button className='hero-btn' data-aos="fade-up" data-aos-duration="1500">Learn More</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
                            <div className="">
                                <img src={heroimg} alt='hero' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

            <div className=' mt-5 afters-tag'>
                <h1 className='text-center' data-aos="flip-left" data-aos-duration="2000">What is AfterSchool?</h1>
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                        <div className="mt-5">
                            <h1>Get to know us</h1>
                            <p>Take a moment to share some details about your interests and goals. This will help us introduce you to AfterSchool, your friendly AI companion who's eager to help you navigate the complexities of life beyond the classroom. AfterSchool has been trained on a diverse range of topics, and it's always ready for a chat about anything from budgeting to building a better lifestyle.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
                        <div className="">
                            <img src={aboutimg} alt='hero' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero