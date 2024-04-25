import React from 'react';

export default function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 mt-4'>
      <form action='' className='flex flex-col max-w-[600px] w-full text-black mt-4'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>
            Contact
          </p>
          <p className='py-4 text-gray-100'>
            Submit form below or shoot me email (bsstha21@gmail.com)
          </p>
        </div>
        <input
          type='text'
          className='my-4 bg-[#ccd6f6] text-black placeholder-black p-3'
          placeholder='Name'
        />
        <input
          type='text'
          className='my-4 bg-[#ccd6f6] text-black placeholder-black p-3'
          placeholder='Email'
        />
        <textarea
          name='message'
          placeholder='message'
          cols='30'
          rows='10'
          className='bg-[#ccd6f6] text-black placeholder-black'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-500 px-3 py-3 my-8 mx-auto flex items-center'>
          Let's collaborate
        </button>
      </form>
    </div>
  );
}
