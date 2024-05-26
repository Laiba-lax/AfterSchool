import React, { useEffect, useState } from 'react'
import Didyouknow from './Didyouknow'
import { Chatbot } from './shared-components/Chatbot'


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
                <h3 className='text-success'>Submitted Successfully</h3>
                        <div class="p-3 diduknow">
                            <div className='mt-5'>
                                <h3>
                                    Did you Know?
                                </h3>
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