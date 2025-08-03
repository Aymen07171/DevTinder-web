import React from 'react'

const Policyservice = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  bg-gray-800">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white-900 mb-4">DevTinder Privacy Policy</h1>
        <p className="text-white-600 text-sm">Last updated: August 3, 2025</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="mb-8">
          <p className="text-white-700 leading-relaxed">
            Welcome to DevTinder! We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our 
            website or use our services.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">1. Information We Collect</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Personal Information:</h3>
              <p className="text-white-700">Name, email address, username, profile picture, resume/CV uploads.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Usage Data:</h3>
              <p className="text-white-700">IP address, browser type, pages visited, time spent on pages, click-throughs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Device Data:</h3>
              <p className="text-white-700">Device type, operating system, unique device identifiers.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Cookies and Tracking:</h3>
              <p className="text-white-700">Information stored in cookies and similar technologies. See our Cookies Policy for details.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">2. How We Use Your Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Service Provision:</h3>
              <p className="text-white-700">To create and manage your account, facilitate matches, and recommend job opportunities.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Communication:</h3>
              <p className="text-white-700">To send you updates, newsletters, security alerts.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Analytics & Improvement:</h3>
              <p className="text-white-700">To monitor usage trends, optimize our platform, and personalize content.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Legal Compliance:</h3>
              <p className="text-white-700">To comply with applicable laws and protect our rights.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">3. Sharing and Disclosure</h2>
          
          <p className="text-white-700 mb-4">We do not sell your personal data. We may share information with:</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Service Providers:</h3>
              <p className="text-white-700">Third-party vendors who perform services on our behalf (e.g., hosting, email delivery).</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Legal Authorities:</h3>
              <p className="text-white-700">If required by law or to respond to lawful requests.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white-800 mb-2">Business Transfers:</h3>
              <p className="text-white-700">In connection with a merger, acquisition, or asset sale.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">4. Data Security</h2>
          <p className="text-white-700">
            We implement industry-standard security measures, including encryption in transit (HTTPS) and at rest. 
            However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">5. Your Rights</h2>
          
          <p className="text-white-700 mb-4">Depending on your jurisdiction, you may have the right to:</p>
          
          <ul className="list-disc list-inside space-y-2 text-white-700 ml-4">
            <li>Access, correct, or delete your personal data</li>
            <li>Object to or restrict processing</li>
            <li>Receive a copy of your data in a portable format</li>
          </ul>
          
          <p className="text-white-700 mt-4">
            To exercise these rights, contact us at{' '}
            <a href="mailto:privacy@devtinder.com" className="text-blue-600 hover:text-blue-800 underline">
              privacy@devtinder.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">6. Data Retention</h2>
          <p className="text-white-700">
            We retain personal data only as long as necessary to fulfill the purposes listed above or as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">7. International Transfers</h2>
          <p className="text-white-700">
            Your data may be transferred to and processed in countries outside your own. We ensure adequate 
            safeguards where required.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white-900 mb-4">8. Contact Us</h2>
          <p className="text-white-700">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@devtinder.com" className="text-blue-600 hover:text-blue-800 underline">
              privacy@devtinder.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};


export default Policyservice
