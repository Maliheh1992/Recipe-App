import React from "react";
import { FaDiscord, FaDribbble, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
       
        <div>
          <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">
            Quick links
          </h2>
          <ul className="text-gray-400  font-medium">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Brand Center
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
  
        <div>
          <h2 className="mb-6 text-sm font-semibold text-foreground uppercase ">
            Help center
          </h2>
          <ul className="text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Discord Server
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
  
        <div>
          <h2 className="mb-6 text-sm font-semibold text-foreground uppercase ">
            Legal
          </h2>
          <ul className="text-gray-400  font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              License Agreement
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
  
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Copyright Information
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Cookies Policy
              </a>
            </li>
          </ul>
        </div>
       
      </div>
  
  
      <div className="px-4 py-6 bg-background md:flex md:items-center md:justify-between border rounded-lg">
        <span className="text-sm text-gray-400 sm:text-center">
          © 2023 <span>Rama Food</span>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a
            href="#"
            className="text-gray-400 hover:text-foreground hover:scale-110"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-foreground hover:scale-110"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-foreground hover:scale-110"
          >
            <FaTwitter size={18} />
          </a>
  
          <a
            href="#"
            className="text-gray-400 hover:text-foreground hover:scale-110"
          >
            <FaYoutube size={18} />
          </a>
  
          <a
            href="#"
            className="text-gray-400 hover:text-foreground hover:scale-110"
          >
            <FaDiscord size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-foreground hover:scale-110"
          >
            <FaDribbble size={18} />
          </a>
        </div>
      </div>
      
    </div>
  </footer>
  );
}

export default Footer;
