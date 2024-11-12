import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40 '>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
            Steps to Remove Background <br /> Images in Seconds
        </h1>
        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.upload_icon} alt="Upload Icon" />
                <div>
                    <p className='text-xl font-medium'>Upload Image</p>
                    <p className='text-sm text-neutral-500'>
                        Choose the image you want to edit. <br /> Just upload, and let us start.
                    </p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.remove_bg_icon} alt="Remove Background Icon" />
                <div>
                    <p className='text-xl font-medium'>Remove Background</p>
                    <p className='text-sm text-neutral-500'>
                        Our AI instantly removes it. <br /> Get a clean, precise result.
                    </p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.download_icon} alt="Download Icon" />
                <div>
                    <p className='text-xl font-medium'>Download Image</p>
                    <p className='text-sm text-neutral-500'>
                        Download your edited image. <br /> Ready to use anywhere.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Steps
