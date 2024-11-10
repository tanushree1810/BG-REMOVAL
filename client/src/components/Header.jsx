import React from 'react';
import { assets } from '../assets/assets';
import './headerStyles.css'


const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* Left Side */}
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Magic Cut: </span><br className='max-md:hidden' />
          Instantly Remove Backgrounds<br className='max-md:hidden' />
          with a Single Click.
        </h1>

        <p className='my-6 text-[15px] text-gray-500'>
          Transform your photos with Magic Cut<br /> Instantly remove backgrounds in one click—fast, easy, and free!
        </p>

        <div>
          <input 
            type="file"
            id="upload1"
            hidden 
          />

          <label 
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'
            htmlFor='upload1'>
            <img width={20} src={assets.upload_btn_icon} alt="Upload Icon" />
            <p className='text-white text-sm'>Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right Side - Enhanced Visual */}
      <div className='w-full max-w-md relative overflow-hidden'>
        <img 
          src={assets.header_img} 
          alt="Header Visual" 
          className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 animate-fade-in' 
        />
        
      </div>
    </div>
  )
}

export default Header;
