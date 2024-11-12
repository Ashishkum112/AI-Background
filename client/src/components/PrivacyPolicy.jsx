import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto p-6 text-center space-y-6 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Privacy Policy</h1>
      <p className="text-lg text-gray-700">
        Your privacy is important to us at BgRemoval.ai. We are committed to protecting your data.
      </p>
      <p className="text-md text-gray-600">
        We collect minimal information required for account setup, usage statistics, and customer support. Your data is securely stored and is not shared with third parties without consent.
      </p>
      <p className="text-md text-gray-600">
        By using our service, you consent to our privacy practices outlined in this policy. We regularly review and update our privacy protocols.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
