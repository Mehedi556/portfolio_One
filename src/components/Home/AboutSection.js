import React from 'react';
import edit from '../../assets/edit.jpg'

const AboutSection = () => {
    return (
        <div className='flex justify-around flex-col-reverse md:flex-row my-16 mx-auto'>
            <div className='w-full md:w-5/12 mx-auto'>
                <p className='text-2xl font-bold text-gray-700'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

                I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
            </div>
            <div className="avatar w-10/12 my-10 md:my-0 mx-auto md:w-4/12 h-full">
                <div className="rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={edit} />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;