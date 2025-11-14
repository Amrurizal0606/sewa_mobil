"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import BackBorderWhite from "@/assets/images/icons/back-border-white.svg";
import Flash from "@/assets/images/icons/flash.svg";
import Star from "@/assets/images/icons/star.svg";
import huayra from "@/assets/images/thumbnails/huayra-side.png";
import timer from "@/assets/images/icons/timer.svg";
import calendar from "@/assets/images/icons/calendar.svg";
import security from "@/assets/images/icons/security-user-black.svg";
import sms from "@/assets/images/icons/sms.svg";
import call from "@/assets/images/icons/call.svg";
import arrow from "@/assets/images/icons/arrow-right.svg";
import arrowCircle from "@/assets/images/icons/arrow-circle-down.svg";
import store from "@/assets/images/thumbnails/store-1.png";
import build from "@/assets/images/icons/building-4.svg";
import store2 from "@/assets/images/thumbnails/store-2.png";
import tick from "@/assets/images/icons/tick-circle.svg";
import store3 from "@/assets/images/thumbnails/store-3.png";
import shield from "@/assets/images/icons/shield-tick.svg";

export default function BookingPage() {
  const router = useRouter();
  const [step, setStep] = useState<number>(2);

  const renderStep = () => {
    if (step === 1) {
      return (
        <div
          id="main-content"
          className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
        >
          <div className="absolute backdrop w-full h-[200px] bg-alpina-blue"></div>
          <div
            id="Top-Bar"
            className="flex items-center justify-between px-4 mt-[60px] z-10"
          >
            <Image
              src={BackBorderWhite}
              className="flex shrink-0 w-10 cursor-pointer"
              alt="icon"
              onClick={() => {
                router.push("/browse/1");
              }}
            />

            <div className="w-fit text-center text-white">
              <p className="text-sm leading-[21px] ">Ready to</p>
              <p className="font-bold text-xl leading-[30px]">Booking Car</p>
            </div>
            <div className="dummy-btn w-10"></div>
          </div>
          <div id="header" className="px-4 z-10 mt-[30px]">
            <div className="flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
              <div className="flex w-[130px] h-[100px] shrink-0 overflow-hidden">
                <Image
                  src={huayra}
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[14px] w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Huayra White</h3>
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    Rp 22.000.000
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">
                      450kmh
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px] justify-end">
                    <p className="font-semibold text-sm leading-[21px]">4/5</p>
                    <Image src={Star} className="w-5 h-5" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            action="delivery.html"
            className="flex flex-col gap-5 px-4 mt-5"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-bold">Start Your Adventure</h2>
              <div className="flex flex-col gap-4">
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={timer}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full">
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Duration
                    </p>
                    <p className="font-semibold">10 Days Ahead</p>
                  </div>
                </label>
                <label
                  className="relative group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300"
                  //   onClick="document.getElementById('date').showPicker()"
                >
                  <Image
                    src={calendar}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="peer appearance-none outline-none bg-transparent font-semibold invalid:absolute invalid:-z-10 [&::-webkit-calendar-picker-indicator]:!opacity-0"
                      required
                    />
                    <p className="text-alpina-light-grey peer-valid:text-xs peer-valid:leading-[18px]">
                      Choose booking date
                    </p>
                  </div>
                </label>
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={security}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="text"
                      name="fullName"
                      className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                      placeholder="Full Name"
                    />
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Full Name
                    </p>
                  </div>
                </label>
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={sms}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="email"
                      name="email"
                      className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                      placeholder="Email Address"
                    />
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Email Address
                    </p>
                  </div>
                </label>
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={call}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="tel"
                      name="phone"
                      className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                      placeholder="Phone Number"
                    />
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Phone Number
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
            >
              <span className="font-bold text-white">Continue Booking</span>
              <Image src={arrow} className="w-6 h-6" alt="icon" />
            </button>
          </form>
        </div>
      );
    } else if (step === 2) {
      return (
        <div
          id="main-content"
          className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
        >
          <div className="absolute backdrop w-full h-[400px] bg-alpina-blue"></div>

          <div
            id="Top-Bar"
            className="flex items-center justify-between px-4 mt-[60px] z-10"
          >
            <a href="booking.html">
              <Image
                src={BackBorderWhite}
                className="flex shrink-0 w-10"
                alt="icon"
              />
            </a>
            <div className="w-fit text-center text-white">
              <p className="text-sm leading-[21px] ">Almost Done</p>
              <p className="font-bold text-xl leading-[30px]">
                Delivery Option
              </p>
            </div>
            <div className="dummy-btn w-10"></div>
          </div>
          <div id="header" className="px-4 z-10 mt-[30px]">
            <div className="flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
              <div className="flex w-[130px] h-[100px] shrink-0 overflow-hidden">
                <Image
                  src={huayra}
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[14px] w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Huayra White</h3>
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    Rp 22.000.000
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">
                      450kmh
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px] justify-end">
                    <p className="font-semibold text-sm leading-[21px]">4/5</p>
                    <Image src={Star} className="w-5 h-5" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="Booking-Details" className="px-4 mt-5 z-10">
            <div className="group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white has-[:checked]:!h-[64px] overflow-hidden transition-all duration-300">
              <label className="flex items-center justify-between">
                <p className="font-bold">Booking Details</p>
                <Image
                  src={arrowCircle}
                  className="w-6 h-6 group-has-[:checked]:-rotate-180 transition-all duration-300"
                  alt="icon"
                />
                <input
                  type="checkbox"
                  name="dropdown"
                  id="dropdown"
                  className="hidden"
                />
              </label>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={timer} className="w-6 h-6" alt="icon" />
                  <p>Duration</p>
                </div>
                <p className="font-semibold">10 Days Ahead</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={calendar} className="w-6 h-6" alt="icon" />
                  <p>Rented At</p>
                </div>
                <p className="font-semibold">July 10, 2024</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={security} className="w-6 h-6" alt="icon" />
                  <p>Full Name</p>
                </div>
                <p className="font-semibold">Angga Shayna</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={sms} className="w-6 h-6" alt="icon" />
                  <p>Email Address</p>
                </div>
                <p className="font-semibold">toko@angga.com</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={call} className="w-6 h-6" alt="icon" />
                  <p>Phone Number</p>
                </div>
                <p className="font-semibold">628123123123</p>
              </div>
            </div>
          </section>

          <form action="payment.html" className="flex flex-col gap-4 mt-5 z-10">
            <div className="flex flex-col py-5 px-4 gap-4 bg-[#F9FAFB]">
              <p className="font-bold">Delivery Option</p>
              <div className="tab-link-btns flex items-center gap-4">
                <label
                  className="tablink relative w-full rounded-full p-[10px_14px] font-semibold bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue"
                  id="defaultOpen"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex shrink-0">
                      <Image src={build} alt="icon" />
                    </div>
                    <p>Pickup Store</p>
                  </div>
                  <input
                    type="radio"
                    name="delivery-type"
                    id="Pickup"
                    className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                    required
                  />
                </label>
                <label className="tablink relative w-full rounded-full p-[10px_14px] font-semibold bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex shrink-0">
                      <img src="assets/images/icons/car.svg" alt="icon" />
                    </div>
                    <p>Home Delivery</p>
                  </div>
                </label>
              </div>
              <div className="tabs-contents">
                <div
                  id="pickup-tab"
                  // className="tabcontent flex flex-col gap-4 hidden"
                >
                  <label className="relative group w-full rounded-[20px] p-[10px_14px] bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue has-[:checked]:ring-1 has-[:checked]:ring-alpina-blue">
                    <div className="flex items-center gap-[14px]">
                      <div className="w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-[#1D68B4]">
                        <Image
                          src={store}
                          className="w-full h-full object-cover"
                          alt="icon"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <p className="font-bold">Xtrade Centre</p>
                        <p className="text-sm leading-[21px]">
                          Perumahan sinar bumi hayang nomor 19938
                        </p>
                      </div>
                      <div className="w-6 h-6 flex shrink-0">
                        <Image
                          src={tick}
                          className="w-6 h-6 hidden group-has-[:checked]:flex"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="store"
                      id=""
                      className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                    />
                  </label>
                  <label className="relative group w-full rounded-[20px] p-[10px_14px] bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue has-[:checked]:ring-1 has-[:checked]:ring-alpina-blue">
                    <div className="flex items-center gap-[14px]">
                      <div className="w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-[#1D68B4]">
                        <Image
                          src={store2}
                          className="w-full h-full object-cover"
                          alt="icon"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <p className="font-bold">Angga Fast!</p>
                        <p className="text-sm leading-[21px]">
                          Jalan pecinta mobiles mewah sejak lahir no 96
                        </p>
                      </div>
                      <div className="w-6 h-6 flex shrink-0">
                        <Image
                          src={tick}
                          className="w-6 h-6 hidden group-has-[:checked]:flex"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="store"
                      id=""
                      className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                    />
                  </label>
                  <label className="relative group w-full rounded-[20px] p-[10px_14px] bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue has-[:checked]:ring-1 has-[:checked]:ring-alpina-blue">
                    <div className="flex items-center gap-[14px]">
                      <div className="w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-[#1D68B4]">
                        <Image
                          src={store3}
                          className="w-full h-full object-cover"
                          alt="icon"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <p className="font-bold">Xtrade Centre</p>
                        <p className="text-sm leading-[21px]">
                          Perumahan sinar bumi hayang nomor 19938
                        </p>
                      </div>
                      <div className="w-6 h-6 flex shrink-0">
                        <Image
                          src={tick}
                          className="w-6 h-6 hidden group-has-[:checked]:flex"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="store"
                      id=""
                      className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 px-4 mb-[30px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={shield}
                  className="w-8 h-8 flex shrink-0"
                  alt="icon"
                />
                <p className="font-semibold leading-[26px]">
                  Kami melindungi privasi anda dengan baik bantuan Angga Pro.
                </p>
              </div>
              <button
                type="submit"
                className="flex items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
              >
                <span className="font-bold text-white">Continue Booking</span>
                <Image src={arrow} className="w-6 h-6" alt="icon" />
              </button>
            </div>
          </form>
        </div>
      );
    }
  };
  return renderStep();
}
