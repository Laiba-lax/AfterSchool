import React, { useRef, useState } from 'react'
import ChatPage from './ChatPage';
import Hero from './Hero';
import { Form, Button, Col } from 'react-bootstrap';


export const Question = ({ onInputChange }) => {
    const [name, setName] = useState('');
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const handleButtonClick = () => {
        setIsComponentVisible(!isComponentVisible);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, e.g., send data to backend or perform validation
        console.log('Name:', name);

        // Reset the form after submission if needed
        setName('');

    };

    if (isComponentVisible === false) {
        return (
            <>
                <Hero />
                <div className="container mt-5">
                    <div className='text-center'>
                        <h2 data-aos="fade-up" data-aos-duration="1000">To get started!</h2>
                        <p data-aos="fade-up" data-aos-duration="1000">  Tell us a little bit about yourself</p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label className='my-2'>Gender</Form.Label>
                            <div>
                                <Form.Check

                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    value="male"


                                />
                                <Form.Check

                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    value="female"


                                />
                                <Form.Check

                                    type="radio"
                                    label="Other"
                                    name="gender"
                                    value="other"


                                />
                            </div>

                        </Form.Group>
                        <Form.Group >
                            <Form.Label className='my-2'>Enter your Location</Form.Label>
                            <Form.Control className='my-2'
                                type="text"
                                placeholder="Your Country"
                            />
                            <Form.Control className='my-2'
                                type="text"
                                placeholder="Your Region"
                            />
                            <Form.Control className='my-2'
                                type="text"
                                placeholder="Your City"
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className='my-2'>What is your highest Education Level?</Form.Label>
                            <div>
                                <Form.Check

                                    type="radio"
                                    label="High school diploma or equivalent"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Some college/Associate degree"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Bachelor's degree"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Graduate degree"



                                />
                            </div>

                        </Form.Group>
                        <Form.Group >
                            <Form.Label className='my-2'>What is your current employment status?</Form.Label>
                            <div>
                                <Form.Check

                                    type="radio"
                                    label="Employed full-time"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Employed part-time"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Self-employed"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Student"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Homemaker"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Retired"



                                />
                                <Form.Control className='my-2'
                                    type="text"
                                    placeholder="Others Please Specify"
                                />
                            </div>

                        </Form.Group>
                        <Form.Group >
                            <Form.Label className='my-2'>Out of the following, what are some of the problems you currently struggle
                                with or struggled with at some point in your life (choose all that apply)</Form.Label>
                            <div>
                                <Form.Check

                                    type="checkbox"
                                    label="Taxes"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Mental Health"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Physical health"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Making friends"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Maintaining relationships"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Understanding how the world works"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Personal finance"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Performing good at work"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Difficulty concentrating"



                                />
                                <Form.Check

                                    type="checkbox"
                                    label="Time management"



                                />

                                <Form.Control className='my-2'
                                    type="text"
                                    placeholder="Others Please Specify"
                                />
                            </div>

                        </Form.Group>
                        <Form.Group >
                            <Form.Label className='my-2'> If you could change one thing in your life almost immediately, what would you prefer it to be  (choose one):</Form.Label>
                            <div>
                                <Form.Check

                                    type="radio"
                                    label="Being better at communicating"



                                />
                                <Form.Check

                                    type="radio"
                                    label=" Being smarter at what you do"



                                />
                                <Form.Check

                                    type="radio"
                                    label=" Being more physically fit"



                                />
                                <Form.Check

                                    type="radio"
                                    label="Being more efficient"





                                />
                                
                                <Form.Control className='my-2'
                                    type="text"
                                    placeholder="Others Please Specify"
                                />
                            </div>

                        </Form.Group>
                        <button type='submit' className='hero-btn mb-5' onClick={handleButtonClick}>
                            Submit
                        </button>
                    </Form>



                    <div>

                        {isComponentVisible && <ChatPage />}
                    </div>
                </div>

            </>
        )
    }
    else {
        return (
            <ChatPage />
        );
    }

}
