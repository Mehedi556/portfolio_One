import React from 'react';
import edit from '../../assets/edit.jpg'

const AboutSection = () => {
    return (
        <div className='flex justify-around flex-col-reverse md:flex-row my-16 mx-auto'>
            <div className='w-full md:w-5/12 mx-auto'>
                <p className='text-2xl font-bold text-gray-700'>Hello! This is Abdus Salam Mehedi. I build websites using a combination of my enthusiasm and the necessary content. I’ve not been a computer science student but my desire to learn computer programming led me here.</p>
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