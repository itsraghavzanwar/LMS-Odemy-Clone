import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-8 px-10 md:px-0'>
      <h2 className='text-3xl font-medium text-grey-800'>Testimonials</h2>
      <p className='md:text-base text-grey-500 mt-2'>Hear from our learners as they shared their journey of transformation, success and how our <br />platform had made
      a differences in their life.</p>
      <div className='flex mt-5 gap-10 p-10'>
        {dummyTestimonial.map((testimonial,index)=>(
          <div key={index} className='text-sm  text-left border border-gray-500/30 pb-6   rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black overflow-hidden'>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-300'>
              <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/100'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_,i)=> (
                  <img className='h-5' key={i} src={i<Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt="star" />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read more</a>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
