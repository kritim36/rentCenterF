import React from 'react'

const Section = () => {
  return (
    <div>
       <section className="bg-white m-4 pt-16">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold text-blue-900 dark:text-blue  pb-9">Share your gadgets, earn extra cash</h2>
                <p className="mb-4 text-gray-900">Simply earn some extra cash by joining the community. We will provide you the bookings and competitive payments.</p>
                <p className='text-gray-900'>We ensure that you get safe customer. Your job is to make their journey wonderful. We will take care of your payment.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-8 ">
                <img className="w-full rounded-lg" src="https://api.sajilorental.com/images/vehicleTypes/fba169a9-812f-4b65-841a-16c048cf3e1b_BYD.webp" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://p.rmjo.in/productSquare/vq19ytjj-500x500.jpg" alt="office content 2" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Section
