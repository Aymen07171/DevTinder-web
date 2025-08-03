import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0 w-full">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd
        </p>
        <p>
          <a href="/policy" className="link link-hover">Privacy Policy</a>
        </p>
        <p>
          <a href="/terms" className="link link-hover">Terms of Service</a>
        </p>
      </aside>

    </footer>
  )
}

export default Footer