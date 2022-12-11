import React from 'react';
import img1 from '../../../assets/rent1.png'; 
import img2 from '../../../assets/rent2.png'; 
import img3 from '../../../assets/rent3.png'; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project2 = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="carousel-wrapper my-10 w-11/12 md:w-12/12 mx-auto p-5 shadow-2xl rounded-lg">
            <Carousel autoPlay>
                <div>
                    <img className='rounded-xl' src={img1} />
                </div>
                <div>
                    <img className='rounded-xl' src={img2} />
                </div>
                <div>
                    <img className='rounded-xl' src={img3} />
                </div>
            </Carousel>
        </div>
        <div className='w-11/12 md:w-12/12 my-10 mx-auto'>
            <h1 className='text-center' style={{fontSize:"2.5rem",fontWeight:"bold",color:"#5C7F10"}}>Projects Details</h1>
            <h2 className='text-3xl font-bold my-5 p-5 text-gray-700'>RENTALCO</h2>
            <div className='text-2xl my-5 pl-5 text-gray-700'>
                <p><span className='text-3xl font-extrabold'>.</span> A website for online rental car services</p>
            <p><span className='text-3xl font-extrabold'>.</span> From here buyers can rent cars at the best rates.</p>
            <p><span className='text-3xl font-extrabold'>.</span> They can sign up via Google or Facebook and add their
experiences in the comment section.</p>
            <p><span className='text-3xl font-extrabold'>.</span> People can see car pictures on full screen by clicking on a picture.</p>
            </div>
            <div className='p-5 text-center'>
                <button className='btn btn-primary mr-2'><a href="https://taxseco-a4123.web.app/service/636b3dc0ffbe0bb1916792ff">Live</a></button>
                <button className='btn btn-primary ml-2'><a href="https://github.com/Mehedi556/taxseco_client">Github</a></button>
            </div>
            
        </div>
            </div>
            
        </div>
    );
};

export default Project2;