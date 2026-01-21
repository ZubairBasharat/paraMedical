import { Button } from "@/components/ui/button";

export default function FancyIntro() {
  return (
    <section className="w-full bg-custom-light-blue py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/fancy-intro.jpg"
            alt="ParaMed caregiving"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Canada&apos;s leading home health care services provider for more
            than 50 years.
          </h2>

          <p className="mb-4 leading-relaxed text-sm md:text-base">
            Since 1974,{" "}
            <span className="font-semibold">ParaMed Home Health Care</span> has
            been helping people live better at home, offering a full range of
            home health care services including personal care, homemaking,
            nursing, occupational therapy, physiotherapy, and many more care
            services. <span className="font-semibold">ParaMed</span> team
            members provide personalized care plans that are tailored to each
            individual and consider a client&apos;s specific needs.
          </p>

          <p className="mb-8 leading-relaxed text-sm md:text-base">
            Our ability to successfully match caregivers with clients has
            allowed us to grow into the largest home care team in Canada. With
            more than{" "}
            <span className="font-semibold">12,000 staff members</span> and over{" "}
            <span className="font-semibold">120,000 clients</span>, we ensure
            your family members receive a familiar face and dignified care.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#">
              <Button className="bg-custom-blue hover:bg-custom-blue/95 text-white rounded-full px-6 py-2 text-sm font-semibold cursor-pointer">
                Watch video
              </Button>
            </a>

            <a
              href="#"
              className="text-custom-blue hover:text-custom-blue/95 font-semibold text-sm"
            >
              <span className="cursor-pointer hover:underline underline-offset-4 transition-colors">
                Learn more about us
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
