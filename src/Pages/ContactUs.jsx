import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCall } from "react-icons/pi";
import { TbMessage } from "react-icons/tb";
import { LiaFaxSolid } from "react-icons/lia";
import { Button } from "../Components/ui/button";
import { BsSend } from "react-icons/bs";
import Navbar from "../Components/Navbar";
function ContactUs() {
  return (
    <div>
      <Navbar/>
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-background rounded-lg py-10 mt-10 border border-border">
        <div className="grid lg:grid-cols-3 items-center">
          <div className="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
            <div class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border  border-border bg-foreground shadow-lg">
              <SlLocationPin size={32} className="text-primary" />
              <h4 class="text-background text-base font-bold mt-4">
                Visit office
              </h4>
              <p class="text-sm text-gray-600 mt-2">
                Sabalan Main Street, Tehran, Iran
              </p>
            </div>
            <div class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border  border-border bg-foreground shadow-lg">
              <PiPhoneCall size={32} className="text-primary" />
              <h4 class="text-background text-base font-bold mt-4">Call us</h4>
              <p class="text-sm text-gray-600 mt-2">+989121234567</p>
            </div>
            <div class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center border  border-border bg-foreground shadow-lg">
              <TbMessage size={32} className="text-primary" />
              <h4 class="text-background text-base font-bold mt-4">Chat to us</h4>
              <p class="text-sm text-gray-600 mt-2">info@example.com</p>
            </div>
            <div class="flex flex-col  items-center justify-center rounded-lg w-full h-44 p-4 text-center border  border-border bg-foreground shadow-lg">
              <LiaFaxSolid size={32} className="text-primary" />
              <h4 class="text-background text-base font-bold mt-4">Fax</h4>
              <p class="text-sm text-gray-600 mt-2">+1-548-2588</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-foreground rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8 shadow-lg">
            <h2 className="text-3xl text-background text-center font-bold mb-6">
              Contact us
            </h2>
            <form>
              <div className="max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Phone No."
                  className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"
                ></textarea>
                <Button
                  type="button"
                  className=" w-full relative bg-primary hover:bg--primary/80 font-semibold rounded-lg text-sm px-6 py-3 !mt-6"
                >
                  <BsSend size={24} />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
