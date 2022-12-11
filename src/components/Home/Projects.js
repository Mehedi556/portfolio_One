import React from 'react';
import data from '../../../src/data.json'
import img1 from '../../assets/truck.jpg'
import img2 from '../../assets/tech.jpg'
import img3 from '../../assets/rent.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    console.log(data)
    return (
        <div>

                <div className='pt-16'>
                <h1 className='' style={{fontSize:"3.5rem",fontWeight:"bold",color:"#5C7F10"}}>My Projects</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                    
                    <div className="p-4 border border-lime-800 card bg-base-100 shadow-2xl">
                        <figure><img className='h-[250px] rounded-xl' src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">TRUCKS MART</h2>
                            <p>A website for buying used trucks from expensive brands.</p>
                            <div className="card-actions justify-end">
                            <Link to="/project1"><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border border-lime-800 card bg-base-100 shadow-2xl">
                        <figure><img className='h-[250px] rounded-xl' src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">RENTALCO</h2>
                            <p>A website for online rental car services</p>
                            <div className="card-actions justify-end">
                            <Link to="/project2"><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border border-lime-800 card bg-base-100 shadow-2xl">
                        <figure><img className='h-[250px] rounded-xl' src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">TECH TOOR</h2>
                            <p>It's a learning platform-based website.</p>
                            <div className="card-actions justify-end">
                            <Link to="/project3"><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>
                
            
                </div>
            
        </div>
    );
};

export default Projects;