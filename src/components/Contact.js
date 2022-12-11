import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfm4xmn', 'template_vravu9q', form.current, 'dgULmXWqSNz4NowOL')
      .then((result) => {
          toast.success('Message sent');
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
       <div className='w-10/12 mx-auto h-screen text-center'>

        <h1 className='items-center my-9' style={{fontSize:"3.5rem",fontWeight:"bold",color:"#5C7F10"}}>Get In Touch</h1>
        <p className='text-3xl font-bold mb-9 text-gray-700'>My inbox is always available. If you have a <br /> question  or simply want to say hello, <br /> I'll do my best to respond.!</p>


         <form ref={form} onSubmit={sendEmail} className="">
    



<div className="card w-full md:w-8/12 mx-auto mt-10 shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="user_name" className='input input-bordered'/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="user_email" className='input input-bordered'/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="message" className="textarea textarea-bordered"/>
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="Send" className='btn'/>
        </div>
      </div>
</div>



    </form>
       </div>
    );
};

export default Contact;