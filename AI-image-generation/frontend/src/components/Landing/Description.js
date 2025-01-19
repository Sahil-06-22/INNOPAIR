import React from 'react'
import { assets } from '../../assets/assets'

export default function Description() {
  return (
    <div className='flex flex-col items-center
    justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold
        mb-2'>Generate Stunning Visuals Using AI</h1>
        <p className='text-gray-500 mb-8'></p>
    <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1}/>
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>YOU IMAGINE. WE CREATE.</h2>
                        <p 
            className='text-gray-600 mb-4'
            style={{ fontFamily: "'Inter', sans-serif" }}
            >Welcome to Imagino, your gateway to transforming text into stunning visuals.
            Unleash your creativity and watch your words come to life with our powerful 
            AI-driven text-to-image generator. Simply type in any description, from a 
            fantastical scene in a faraway land to a photorealistic image of an everyday 
            object, and Imagino will generate unique and captivating images based on 
            your input. Whether you're a designer seeking inspiration, a writer looking to
            visualize your stories, or simply someone who enjoys exploring the 
            intersection of language and art, Imagino provides an intuitive and accessible
            platform for creating compelling visual content.
            </p>
            <p className='text-gray-600'>
                Simply type in a text prompt, and our cutting edge
                AI will generate high-quality  images in seconds. From
                product visuals to character designs and portraits, even
                concepts that dont yet exist can be visualized effortlessly.
                Powered by advanced AI technology, the creative possibilities
                are limitless!
            </p>
        </div>
    </div>

    </div>
  )
}
