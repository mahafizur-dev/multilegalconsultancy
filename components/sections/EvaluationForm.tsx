import React from "react";
import { BookOpen } from "lucide-react";
import { Button } from "../ui/Button";

export const EvaluationForm = () => (
  <section className="flex flex-col lg:flex-row w-full">
    {/* Form Side */}
    <div className="bg-[#f8f9fa] p-10 lg:p-20 lg:w-1/2 flex justify-end order-2 lg:order-1 border-t border-gray-200">
      <div className="max-w-md w-full text-[#222429]">
        <h2 className="text-3xl font-bold uppercase mb-4 flex items-center">
          <BookOpen className="mr-3 text-[#c39b65]" /> Contact Us
        </h2>
        <p className="text-gray-500 mb-8 text-sm">
          Contact us if you think we can assist you with your legal or taxation
          matters.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
            />
          </div>
          <textarea
            placeholder="How can we assist you?"
            rows={4}
            className="bg-white border border-gray-300 p-3 w-full focus:border-[#c39b65] outline-none rounded-sm"
          ></textarea>
          <Button type="button" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </div>
    {/* Image Side */}
    <div
      className="lg:w-1/2 h-80 lg:h-auto bg-cover bg-center order-1 lg:order-2"
      style={{ backgroundImage: "url('/image_47ffdd.jpg')" }}
    >
      <div className="w-full h-full bg-[#c39b65]/20 mix-blend-multiply"></div>
    </div>
  </section>
);
