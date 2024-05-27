import React, { useEffect, useState } from 'react'
import Didyouknow from './Didyouknow'
import { Chatbot } from './shared-components/Chatbot'
import stars from "../assets/stars.png"
import diduknow from "../assets/did-you-know.gif"

const ChatPage = () => {


    return (
        <div className='mt-5 pt-5'>
            <Chatbot />
            <div className='text-center'>

            </div>
            {/* Bootstrap div */}
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-8">
                        <div className='d-flex flex-wrap justify-content-center align-content-center'>
                <h3 className='text-success mt-3' data-aos="zoom" data-aos-duration="1000" >Submitted Successfully </h3>  
                <img src={stars} alt="stars" className='stars' data-aos="zoom" data-aos-duration="1000"/>
                        </div>
                        <div class="p-3 diduknow">
                            <div className='' data-aos="fade-up" data-aos-duration="1000">
                                <img src={diduknow} alt="Did you know" className='diduknowAnimation' />
                                <Didyouknow />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>

        </div>
    )
}
export default ChatPage