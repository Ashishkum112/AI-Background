import React from 'react';

const CancelPolicy = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto p-6 text-center space-y-6 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Cancellation and Refund Policy</h1>
      <p className="text-lg text-gray-700">
        At BgRemoval.ai, we strive to ensure customer satisfaction. Our cancellation and refund policy is simple and transparent.
      </p>
      <p className="text-md text-gray-600">
        Refunds are available within 7 days of purchase, provided the service was not utilized. For any cancellations or refund requests, please reach out to our support team.
      </p>
      <p className="text-md text-gray-600">
        Refunds are processed within 5-10 business days. If you have questions or concerns, we are here to assist you.
      </p>
    </div>
  );
};

export default CancelPolicy;
