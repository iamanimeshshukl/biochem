import React, { useState } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false); // For mobile menu toggle

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu); // Toggle the menu on click
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu); // Toggle mobile menu visibility
  };

  return (
    <div className="relative bg-blue-800 z-50">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex grow items-start">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <a href="/home" className="text-base font-semibold text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-base font-semibold text-white">
                About Us
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown('abstracts')}
                className="flex items-center text-base font-semibold text-white"
              >
                Abstracts
                <span
                  className={`ml-2 transform ${dropdown === 'abstracts' ? 'rotate-90' : ''} transition-transform text-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M3 4l3 3 3-3" />
                  </svg>
                </span>
              </button>
              {dropdown === 'abstracts' && (
                <ul className="absolute left-0 mt-2 w-48 bg-blue-700 text-white rounded-md shadow-lg transition-opacity duration-200">
                  {[
                  { label: 'General', href: '/abstracts' },
                  {
                    label: 'Themes',
                    href: 'https://drive.google.com/file/d/1b43u6fjTBSs9tq27UddLKRH9IssKkcdH/preview',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  {
                    label: 'Guidelines',
                    href: 'https://drive.google.com/file/d/1DYAA29_JL3WkdS_z6C2ScpxqheFTgWsY/preview',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  {
                    label: 'Abstract Template',
                    href: 'https://drive.google.com/file/d/1yoOSgmE6C8BbMTugDZOGd0yp9KxCOgHD/preview',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  {
                    label: 'Poster Template',
                    href: 'https://drive.google.com/file/d/1QKDXXnD7naDVoSl9pRBdwDu98TZE6Und/preview',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  {
                    label: 'PPT Template',
                    href: 'https://drive.google.com/file/d/1IraSUm3aP-8BDuCrMhgvusGtQ3vgM7aX/preview',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },

                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={`hover:bg-blue-600 ${idx > 0 ? 'border-t border-blue-600' : ''}`}
                    >
                      <a href={item.href} className="block px-4 py-2">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Scientific Programs Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('programs')}
                className="flex items-center text-base font-semibold text-white"
              >
                Scientific Programs
                <span
                  className={`ml-2 transform ${dropdown === 'programs' ? 'rotate-90' : ''} transition-transform text-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M3 4l3 3 3-3" />
                  </svg>
                </span>
              </button>
              {dropdown === 'programs' && (
                <ul className="absolute left-0 mt-2 w-48 bg-blue-700 text-white rounded-md shadow-lg transition-opacity duration-200">
                  {[
                    { label: 'Programs', href: '/scientific-programs' },
                    { label: 'Speakers', href: '/scientific-programs/speakers' },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={`hover:bg-blue-600 ${idx > 0 ? 'border-t border-blue-600' : ''}`}
                    >
                      <a href={item.href} className="block px-4 py-2">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Abstracts Dropdown */}
           

            {/* Registration Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('registration')}
                className="flex items-center text-base font-semibold text-white"
              >
                    Registration/Sponsorship
                <span
                  className={`ml-2 transform ${dropdown === 'registration' ? 'rotate-90' : ''} transition-transform text-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M3 4l3 3 3-3" />
                  </svg>
                </span>
              </button>
              {dropdown === 'registration' && (
                <ul className="absolute left-0 mt-2 w-48 bg-blue-700 text-white rounded-md shadow-lg transition-opacity duration-200">
                  {[
                    { label: 'Register', href: '/registration' },
                    { label: 'Sponsorship', href: '/registration-sponsorship' },
                    {
                      label: 'Fee Payment',
                      href: 'https://drive.google.com/file/d/1nK-3m8jbaTCKNtsCQ2I6s6kAhQW8HhAs/preview',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={`hover:bg-blue-600 ${idx > 0 ? 'border-t border-blue-600' : ''}`}
                    >
                      <a
                        href={item.href}
                        target={item.target || '_self'}
                        rel={item.rel || ''}
                        className="block px-4 py-2"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li>
              <a href="/discover" className="text-base font-semibold text-white">
                Discover Nearby
              </a>
            </li>
            <li>
              <a href="/biometacon" className="text-base font-semibold text-white">
                Bio-Metacon Team
              </a>
            </li>
            <li>
              <a href="/contacts" className="text-base font-semibold text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-[55vh] bg-custom-blue z-50 flex flex-col space-y-4 pt-16 px-4">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="/home" className="text-base font-semibold text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-base font-semibold text-white">
                About Us
              </a>
            </li>
 {/* Mobile Abstracts Dropdown */}
 <li className="relative">
              <button
                onClick={() => toggleDropdown('abstracts')}
                className="flex items-center text-base font-semibold text-white"
              >
                Abstracts
                <span
                  className={`ml-2 transform ${dropdown === 'abstracts' ? 'rotate-90' : ''} transition-transform text-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M3 4l3 3 3-3" />
                  </svg>
                </span>
              </button>
              {dropdown === 'abstracts' && (
                <ul className="mt-2 w-full bg-blue-700 text-white rounded-md shadow-lg">
                  {[
                     { label: 'General', href: '/abstracts' },
                     {
                       label: 'Themes',
                       href: 'https://drive.google.com/file/d/1b43u6fjTBSs9tq27UddLKRH9IssKkcdH/preview',
                       target: '_blank',
                       rel: 'noopener noreferrer',
                     },
                     {
                       label: 'Guidelines',
                       href: 'https://drive.google.com/file/d/1DYAA29_JL3WkdS_z6C2ScpxqheFTgWsY/preview',
                       target: '_blank',
                       rel: 'noopener noreferrer',
                     },
                     {
                       label: 'Abstract Template',
                       href: 'https://drive.google.com/file/d/1yoOSgmE6C8BbMTugDZOGd0yp9KxCOgHD/preview',
                       target: '_blank',
                       rel: 'noopener noreferrer',
                     },
                     {
                       label: 'Poster Template',
                       href: 'https://drive.google.com/file/d/1QKDXXnD7naDVoSl9pRBdwDu98TZE6Und/preview',
                       target: '_blank',
                       rel: 'noopener noreferrer',
                     },
                     {
                       label: 'PPT Template',
                       href: 'https://drive.google.com/file/d/1IraSUm3aP-8BDuCrMhgvusGtQ3vgM7aX/preview',
                       target: '_blank',
                       rel: 'noopener noreferrer',
                     },
                  ].map((item, idx) => (
                    <li key={idx} className="hover:bg-blue-600">
                      <a href={item.href} className="block px-4 py-2">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Mobile Scientific Programs Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('programs')}
                className="flex items-center text-base font-semibold text-white"
              >
                Scientific Programs
                <span
                  className={`ml-2 transform ${dropdown === 'programs' ? 'rotate-90' : ''} transition-transform text-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M3 4l3 3 3-3" />
                  </svg>
                </span>
              </button>
              {dropdown === 'programs' && (
                <ul className="mt-2 w-full bg-blue-700 text-white rounded-md shadow-lg">
                  {[
                    { label: 'Programs', href: '/scientific-programs' },
                    { label: 'Speakers', href: '/scientific-programs/speakers' },
                  ].map((item, idx) => (
                    <li key={idx} className="hover:bg-blue-600">
                      <a href={item.href} className="block px-4 py-2">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown('registration')}
                className="flex items-center text-base font-semibold text-white"
              >
                Registration/Sponsorship
                <span
                  className={`ml-2 transform ${dropdown === 'registration' ? 'rotate-90' : ''} transition-transform text-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M3 4l3 3 3-3" />
                  </svg>
                </span>
              </button>
              {dropdown === 'registration' && (
                <ul className="absolute left-0 mt-2 w-48 bg-blue-700 text-white rounded-md shadow-lg transition-opacity duration-200">
                  {[
                    { label: 'Register', href: '/registration' },
                    { label: 'Sponsorship', href: '/registration-sponsorship' },
                    {
                      label: 'Fee Payment',
                      href: 'https://drive.google.com/file/d/1nK-3m8jbaTCKNtsCQ2I6s6kAhQW8HhAs/preview',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={`hover:bg-blue-600 ${idx > 0 ? 'border-t border-blue-600' : ''}`}
                    >
                      <a
                        href={item.href}
                        target={item.target || '_self'}
                        rel={item.rel || ''}
                        className="block px-4 py-2"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
           

            {/* Other Links */}
            <li>
              <a href="/discover" className="text-base font-semibold text-white">
                Discover Kanpur
              </a>
            </li>
            <li>
              <a href="/ibs-team" className="text-base font-semibold text-white">
                Bio-Metacon Team
              </a>
            </li>
            <li>
              <a href="/contacts" className="text-base font-semibold text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
