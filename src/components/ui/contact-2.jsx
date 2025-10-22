import React from "react";

import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = {label: "shadcnblocks.com", url: "https://shadcnblocks.com"},
}) => {
  return (
    <section className="relative min-h-screen flex items-center py-28 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-12 lg:flex-row lg:gap-24">
          <div className="mx-auto flex w-full max-w-md lg:max-w-xl flex-col justify-between gap-10 lg:gap-12">
            <div className="text-center lg:text-left">
              <h1 className="mb-3 text-6xl font-semibold lg:mb-2 lg:text-7xl">
                <span className="text-[#BD9f67]">{title}</span>
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed">
                {description}
              </p>
            </div>
            <div className="mx-auto w-full lg:w-auto lg:mx-0">
              <h3 className="mb-6 text-center text-3xl font-semibold lg:text-left text-[#BD9f67]">
                Contact Details
              </h3>
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-[#BD9f67]/20 shadow-2xl">
                <ul className="space-y-5">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#BD9f67]/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#BD9f67]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-300 text-lg">{phone}</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#BD9f67]/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#BD9f67]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-[#BD9f67] hover:text-[#BD9f67]/80 transition-colors duration-300 text-lg"
                    >
                      {email}
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#BD9f67]/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#BD9f67]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                        />
                      </svg>
                    </div>
                    <a
                      href={web.url}
                      target="_blank"
                      className="text-[#BD9f67] hover:text-[#BD9f67]/80 transition-colors duration-300 text-lg"
                    >
                      {web.label}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-xl flex-col gap-10 rounded-3xl border border-[#BD9f67]/20 bg-slate-800/40 backdrop-blur-xl p-16 shadow-2xl shadow-[#BD9f67]/10">
            <div className="flex gap-5">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="firstname" className="text-slate-300 text-base">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  className="h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#BD9f67] focus:ring-[#BD9f67]/20"
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="lastname" className="text-slate-300 text-base">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  className="h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#BD9f67] focus:ring-[#BD9f67]/20"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email" className="text-slate-300 text-base">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#BD9f67] focus:ring-[#BD9f67]/20"
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="interest" className="text-slate-300 text-base">
                Field of Interest
              </Label>
              <select
                name="interest"
                id="interest"
                className="flex h-12 w-full rounded-md border border-slate-600 bg-slate-700/50 px-3 py-2 text-base text-white placeholder:text-slate-400 focus:border-[#BD9f67] focus:ring-2 focus:ring-[#BD9f67]/20 focus:outline-none"
              >
                <option value="Technical Team" className="bg-slate-700">
                  Technical Team
                </option>
                <option value="Management Team" className="bg-slate-700">
                  Management Team
                </option>
                <option value="Design Team" className="bg-slate-700">
                  Design Team
                </option>
                <option value="Event Management Team" className="bg-slate-700">
                  Event Management Team
                </option>
                <option value="Content Writing Team" className="bg-slate-700">
                  Content Writing Team
                </option>
                <option value="Social Media Team" className="bg-slate-700">
                  Social Media Team
                </option>
                <option value="Public Relations Team" className="bg-slate-700">
                  Public Relations Team
                </option>
                <option value="Sponsorship Team" className="bg-slate-700">
                  Sponsorship Team
                </option>
                <option value="Marketing Team" className="bg-slate-700">
                  Marketing Team
                </option>
                <option value="Finance Team" className="bg-slate-700">
                  Finance Team
                </option>
              </select>
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="message" className="text-slate-300 text-base">
                Why you want to join us?
              </Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="min-h-48 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#BD9f67] focus:ring-[#BD9f67]/20"
              />
            </div>
            <Button className="w-full bg-[#BD9f67] hover:bg-[#BD9f67]/90 text-slate-900 font-semibold py-4 text-base rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#BD9f67]/20 cursor-pointer">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
