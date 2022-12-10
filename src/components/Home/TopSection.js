import React from 'react';

const TopSection = () => {
    return (
        <div className='p-10 my-16'>
            <p className='text-xl font-bold text-gray-700 pl-1'>Hi, my name is</p>
            <h1 style={{fontSize:"3.5rem",fontWeight:"bold",color:"#5C7F10"}}>Abdus Salam Mehedi.</h1>
            <h1 style={{fontSize:"3.5rem",fontWeight:"bold",color:"#5C7F10"}}>I build things for the web.</h1>
            <br />
            <p className='text-2xl font-bold text-gray-700'>I’m a web developer. <br /> (and occasionally designing) exceptional digital experiences. <br /> Currently, I’m focused on building accessible,<br /> human-centered products at Upstatement.</p>
            <br />
            <br />
            <a href="Abdus-Salam-Mehedi-Resume.pdf" download="Abdus-Salam-Mehedi-Resume.pdf" ><button style={{backgroundColor:"#5C7F41"}} className='btn mb-16 text-white border border-1 border-lime-800'>Check out my resume!</button></a>
            
        </div>
    );
};

export default TopSection;