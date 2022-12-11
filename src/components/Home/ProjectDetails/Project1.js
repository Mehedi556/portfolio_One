import React from 'react';
import img1 from '../../../assets/truck1.png'; 
import img2 from '../../../assets/truck2.png'; 
import img3 from '../../../assets/truck3.png'; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project1 = () => {
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
            <h2 className='text-3xl font-bold my-5 p-5 text-gray-700'>TRUCKS MART</h2>
            <div className='text-2xl my-5 pl-5 text-gray-700'>
                <p><span className='text-3xl font-extrabold'>.</span> This is a website for selling and buying second-hand trucks.</p>
            <p><span className='text-3xl font-extrabold'>.</span> People can create a Seller account and a Buyer account. Sellers
                can add products and they have advertising options.</p>
            <p><span className='text-3xl font-extrabold'>.</span> Buyers can buy products by stripe.</p>
            <p><span className='text-3xl font-extrabold'>.</span> There is a Dashboard route, which changes according to admin,
                seller, and buyer.</p>
            </div>
            <div className='p-5 text-center'>
                <button className='btn btn-primary mr-2'><a href="https://salesmart-ad1a8.web.app/">Live</a></button>
                <button className='btn btn-primary ml-2'><a href="https://github.com/Mehedi556/trucks_mart_client">Github</a></button>
            </div>
            
        </div>
            </div>
            
        </div>
    );
};

export default Project1;