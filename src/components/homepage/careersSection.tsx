import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface TwoImageCTAProps {
  heading?: string;
  subheading?: string;
  description?: string[];
  images?: string[];
  primaryBtn?: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
}

const CareersSection: React.FC<TwoImageCTAProps> = ({
  heading = "Careers at ParaMed",
  subheading = "Learn, grow and lead with Canada's largest innovative home care company.",
  description = [
    "ParaMed will help you reach your full potential with paid training and skills upgrade opportunities to take your career to the next level.",
    "We support team members as they grow meaningful careers in home health care. At ParaMed, our skilled team members are helping people live better at home by providing high-quality, compassionate care.",
    "By choosing a career with ParaMed, you're joining a passionate team of professionals dedicated to making a difference in our client's lives.",
  ],
  images = ["/images/cta_thumbnail_1.jpg", "/images/cta_thumbnail_2.jpg"],
  primaryBtn = {
    label: "Watch video",
    href: "#",
  },
  secondaryBtn = {
    label: "Work with ParaMed",
    href: "#",
  },
}) => {
  return (
    <section className="relative w-full bg-custom-light-blue py-16 two-image-cta-wrapper">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-blue">
          {heading}
        </h2>
        <p className="text-gray-600 mt-2 text-lg">{subheading}</p>
      </div>

      {/* Image Row */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt=""
            className="w-72 h-52 object-cover rounded-lg shadow-lg pointer-events-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: idx * 0.3 }}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <div className="space-y-4 text-gray-700 text-base md:text-lg">
          {description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8 justify-center md:justify-start">
          <a href={primaryBtn.href}>
            <Button className="bg-custom-purple hover:bg-transparent text-white hover:text-custom-purple hover:border border-custom-purple px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition">
              {primaryBtn.label}
            </Button>
          </a>
          <a
            href={secondaryBtn.href}
            className="text-black font-semibold hover:underline underline-offset-4   text-sm"
          >
            {secondaryBtn.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
