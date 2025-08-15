"use client";

import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Image from "next/image";
import { Button } from "@/src/shared/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Onboarding() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      image: "/girl1.png",
      title: "Algorithm",
      text: "Users going through a vetting process to ensure you never match with bots.",
    },
    {
      image: "/girl2.png",
      title: "Matches",
      text: "We match you with people that have a large array of similar interests.",
    },
    {
      image: "/girl3.png",
      title: "Premium",
      text: "Sign up today and enjoy the first month of premium benefits on us.",
    },
  ];

  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToShow: 1,
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 flex flex-col items-center">
      <div className="slider-container max-w-screen sm:max-w-2xl ">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center">
              <div
                className={`h-[360px] w-[235px] overflow-hidden flex relative items-center justify-center rounded-2xl text-white text-2xl`}
              >
                <Image src={slide.image} fill alt="slide image" />
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-16 text-center ">
          <div className="text-2xl font-bold text-red">
            {slides[currentSlide]?.title}
          </div>
          <div className="font-normal text-sm mt-2.5 max-w-[295p] px-10">
            {slides[currentSlide]?.text}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-7.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                ${currentSlide === index ? "bg-red " : "bg-dots"}`}
            />
          ))}
        </div>

        <div className=" flex justify-center mt-10.5">
          <Button
            onClick={() => router.push("/auth/signup")}
            className="w-full max-w-[295px]"
          >
            Create an account
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          Already have an account?&nbsp;
          <Link href={"/auth/signup"} className="cursor-pointer text-red">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
