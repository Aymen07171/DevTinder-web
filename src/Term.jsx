import React from 'react';

const Term = () => {
return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 min-h-screen">
    <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">DevTinder Terms of Service</h1>
        <p className="text-gray-300 text-sm">Last updated: August 3, 2025</p>
    </div>

    <div className="prose prose-lg max-w-none">
        <div className="mb-8">
        <p className="text-gray-200 leading-relaxed">
            Please read these Terms of Service ("Terms") carefully before using DevTinder. By accessing or using 
            our services, you agree to be bound by these Terms.
        </p>
        </div>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-200">
            By creating an account or using DevTinder, you accept and agree to these Terms and our Privacy Policy.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility</h2>
        <p className="text-gray-200">
            You must be at least 18 years old and able to form a binding contract to use DevTinder.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">3. Account Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
            <li>You are responsible for maintaining the confidentiality of your password</li>
            <li>You agree to provide accurate and complete information</li>
            <li>You must promptly update your account information</li>
        </ul>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">4. User Conduct</h2>
        <p className="text-gray-200 mb-4">You agree not to:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
            <li>Post false or misleading information</li>
            <li>Harass, threaten, or violate the rights of others</li>
            <li>Use our platform for illegal or unauthorized purposes</li>
        </ul>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
        <p className="text-gray-200">
            All content, trademarks, and logos on DevTinder are the property of DevTinder or its licensees. 
            You may not use our intellectual property without permission.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">6. Termination</h2>
        <p className="text-gray-200">
            We may suspend or terminate your account for violations of these Terms or for any other reason at our discretion.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimers</h2>
        <p className="text-gray-200">
            Our services are provided "as is." We disclaim all warranties to the fullest extent permitted by law.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
        <p className="text-gray-200">
            To the maximum extent permitted by law, DevTinder and its affiliates will not be liable for any indirect, 
            special, incidental, or consequential damages.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law</h2>
        <p className="text-gray-200">
            These Terms are governed by the laws of [Your Jurisdiction], without respect to its conflict of laws principles.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
        <p className="text-gray-200">
            We may modify these Terms at any time. We will notify you by posting the updated Terms on the site.
        </p>
        </section>

        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
        <p className="text-gray-200">
            Contact us at{' '}
            <a 
            href="mailto:support@devtinder.com" 
            className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
            >
            support@devtinder.com
            </a>{' '}
            with any questions.
        </p>
        </section>
    </div>
    </div>
);
};

export default Term;