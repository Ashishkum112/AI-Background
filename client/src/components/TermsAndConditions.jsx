import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto p-6 text-center space-y-6 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Terms and Conditions</h1>
      <p className="text-lg text-gray-700">
        By accessing BgRemoval.ai, you agree to abide by our terms and conditions.
      </p>
      <p className="text-md text-gray-600">
        Our services are provided as-is and may be subject to updates. Unauthorized use of our platform is strictly prohibited, and we reserve the right to modify or discontinue services.
      </p>
      <p className="text-md text-gray-600">
        If you have any questions about these terms, please contact us for further clarification.
      </p>
    </div>
  );
};

export default TermsAndConditions;
