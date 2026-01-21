import React from "react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Button } from "../ui/button";

interface Feature {
  id: number;
  icon: IconName;
  title: string;
}

const features: Feature[] = [
  { id: 1, icon: "umbrella", title: "Licensed & insured" },
  { id: 2, icon: "clock", title: "24 hour availability" },
  { id: 3, icon: "clipboard", title: "Perfect matching" },
  {
    id: 4,
    icon: "calendar",
    title: "Next day support available",
  },
];

const HomeCareAssessment: React.FC = () => {
  return (
    <section className="bg-custom-purple py-16 text-white space-y-12">
      <div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-start ">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 leading-snug">
              Let&apos;s start your free In-Home
              <br />
              Care Assessment today
            </h2>
            <p className="text-gray-200 mb-10">
              ParaMed helps families with dignified care from familiar faces.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-6 justify-items-center lg:justify-items-start mb-12">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center lg:text-left"
                >
                  <DynamicIcon
                    name={feature.icon}
                    className="text-white mb-3"
                  />
                  <span className="text-sm font-medium w-30 text-center">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/home-care-assessment-1.jpg"
              alt="Home Care"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Button className="inline-flex items-center justify-center bg-white text-custom-purple hover:text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-transparent hover:border cursor-pointer transition">
            <span>Start Your Assessment</span>
            <DynamicIcon name="chevron-right" className="ml-2 text-lg" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HomeCareAssessment;
