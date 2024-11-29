import React from 'react';
import { ButtonsCard } from '../components/ui/CTAButton';
import { FeaturesSection } from '../components/ui/FeaturesSectionDemo';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white-100'>
      {/* Hero Section */}
<div className='flex flex-col items-center justify-center min-h-screen bg-white-100 text-red-300 text-center px-6 mb-4'> 
  {/* Added mb-4 to reduce bottom margin */}
  <h1 className='font-poppins font-medium text-5xl mb-4'>
    Your Next Home, Simplified
  </h1>
  <p className='text-lg text-gray-700 mb-6'>
    Find affordable, student-friendly rentals near your campus. Hassle-free. Safe. Comfortable.
  </p>
  <ButtonsCard
    onClick={() => {
      // Define the action when the card is clicked
      console.log("Button clicked!");
    }}
    className="px-8 py-3 bg-[#333333] text-white font-poppins text-lg rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:bg-[#000000] hover:scale-105 hover:shadow-md focus:outline-none"
  >
    Book Now
  </ButtonsCard>
</div>

{/* Features Section */}
<div className='mt-0'>
  {/* You can adjust the margin-top of FeaturesSection if needed */}
  <FeaturesSection />
</div>


      {/* Testimonials Section */}
      <div className='text-center mb-12 px-6'>
        <h2 className='font-playfair text-3xl italic mb-4'>"The best housing service for students! Easy to use and reliable."</h2>
        <p className='font-poppins font-medium text-lg'>In Pune</p>
      </div>

      
{/* How It Works Section */}
<div className='bg-white-100 py-16'>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-12'>
    <div className='p-6 bg-white text-center rounded-lg shadow-md hover:shadow-xl transition duration-300'>
      <h3 className='font-poppins text-2xl text-[#333333] mb-4'>Step 1: Sign Up</h3>
      <p className='font-poppins text-lg text-gray-700'>Create an account to get started and access exclusive listings.</p>
    </div>
    <div className='p-6 bg-white text-center rounded-lg shadow-md hover:shadow-xl transition duration-300'>
      <h3 className='font-poppins text-2xl text-[#333333] mb-4'>Step 2: Browse Listings</h3>
      <p className='font-poppins text-lg text-gray-700'>Explore a variety of student-friendly rental options near your campus.</p>
    </div>
    <div className='p-6 bg-white text-center rounded-lg shadow-md hover:shadow-xl transition duration-300'>
      <h3 className='font-poppins text-2xl text-[#333333] mb-4'>Step 3: Book Your Home</h3>
      <p className='font-poppins text-lg text-gray-700'>Select the best option and secure your new home with a few simple clicks.</p>
    </div>
  </div>
</div>


      {/* Why Choose Us? Section */}
      <div className='text-center mb-12 px-6'>
        <h2 className='font-playfair font-bold text-3xl mb-4'>Why Choose Us?</h2>
        <ul className='list-disc list-inside text-left max-w-xl mx-auto font-poppins'>
          <li>Affordable and budget-friendly listings</li>
          <li>All properties are verified for quality</li>
          <li>Easy-to-use platform with seamless booking</li>
          <li>24/7 customer support</li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className='text-center mb-12 px-6'>
        <h2 className='font-montserrat font-extrabold text-4xl mb-4'>Ready to Move In?</h2>
        <p className='text-lg mb-6'>Start your journey with us today.</p>
        <button className='font-open-sans bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full'>
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
