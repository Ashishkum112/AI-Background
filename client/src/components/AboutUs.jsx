import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto p-6 text-center space-y-6 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-blue-600 ">About BgRemoval.ai</h1>
      <p className="text-xl text-gray-700">
        Welcome to <span className="text-blue-500 font-semibold">BgRemoval.ai</span>, a cutting-edge AI-powered solution for seamless background removal. Our mission is to empower creators, professionals, and businesses by providing a fast, accurate, and easy-to-use tool that makes image processing hassle-free.
      </p>
      <p className="text-md text-gray-600">
        Our team is dedicated to revolutionizing digital content creation with tools that leverage AI technology. From photographers to e-commerce professionals, we understand the importance of high-quality visuals, and we’re here to make that process simpler and more accessible than ever.
      </p>
      {/* <img src="/path/to/your/about-us-image.jpg" alt="About Us" className="mx-auto rounded-md shadow-lg w-full sm:w-3/4" /> */}
      <p className="text-md text-gray-600">
        With BgRemoval.ai, we prioritize data security, efficiency, and top-notch customer support. We are committed to continuously enhancing our services to exceed your expectations. Thank you for choosing us as your trusted partner in image editing.
      </p>
    </div>
  );
};

export default AboutUs;

