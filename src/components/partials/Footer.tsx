import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DynamicIcon } from "lucide-react/dynamic";
import { CTACards } from "./Footer-cta";

const companyInfo = [
  {
    title: "About ParaMed",
    link: "#",
  },
  {
    title: "Workplace Health and Wellness",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
  {
    title: "Patient Bill of Rights",
    link: "#",
  },
];

const servicesInfo = [
  {
    title: "Home Health Care Services",
    link: "#",
  },
  {
    title: "Help at home",
    link: "#",
  },
  {
    title: "Nursing at home",
    link: "#",
  },
  {
    title: "Respite care & caregiver relief",
    link: "#",
  },
  {
    title: "Live-in care",
    link: "#",
  },
  {
    title: "Specialized care",
    link: "#",
  },
  {
    title: "Caregiver packages",
    link: "#",
  },
];

export default function ParaMedFooter() {
  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-12">
      <div className="container mx-auto w-full">
        {/* top grid: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Home Health Care Services
            </h3>
            <div className="space-y-2 text-base font-semibold flex flex-col">
              {servicesInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="purple-underline underline-offset-4 text-custom-blue/90 hover:text-custom-purple hover:font-bold "
                >
                  {info.title}
                </a>
              ))}
            </div>

            <div className="mt-6 text-3xl font-extrabold">
              <p className="text-custom-blue/90">
                Helping people
                <br />
                live better <span className="text-custom-purple">at home</span>
              </p>
            </div>
          </div>

          {/* Column 2 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <div className="space-y-2 text-base font-semibold flex flex-col">
              {companyInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="purple-underline underline-offset-4 text-custom-blue/90 hover:text-custom-purple hover:font-bold "
                >
                  {info.title}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - CTAs (cards) */}
          <CTACards />

          {/* Column 4 - Contact, Social, Search */}
          <div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <a href="#" className="text-sm font-medium ">
                <Button
                  variant={"outline"}
                  className="bg-custom-purple hover:bg-transparent hover:border-custom-purple hover:text-custom-purple text-white cursor-pointer p-4 rounded-full"
                >
                  <span className="flex flex-row items-center gap-2">
                    Make a Payment <DynamicIcon name="arrow-right" size={16} />
                  </span>
                </Button>
              </a>
            </div>

            <nav className="mt-4" aria-label="Social links">
              <ul className="flex gap-3">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="ParaMed on Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <DynamicIcon
                      name="facebook"
                      className="w-5 h-5 hover:text-custom-purple"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="ParaMed on Twitter"
                  >
                    <span className="sr-only">Twitter</span>
                    <DynamicIcon
                      name="twitter"
                      className="w-5 h-5 hover:text-custom-purple"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="ParaMed on LinkedIn"
                  >
                    <span className="sr-only">LinkedIn</span>

                    <DynamicIcon
                      name="linkedin"
                      className="w-5 h-5 hover:text-custom-purple"
                    />
                  </a>
                </li>
              </ul>
            </nav>

            <form action="#" method="get" className="mt-6" role="search">
              <div className="flex gap-2">
                <Input id="footer-search" name="search" placeholder="Search" />
                <Button
                  type="submit"
                  variant={"outline"}
                  className="bg-custom-purple hover:bg-transparent hover:border-custom-purple hover:text-custom-purple text-white cursor-pointer p-4 rounded-full"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* logo bar */}
        <div className="mt-10 border-t border-slate-100 pt-8">
          <div className="flex max-md:flex-col flex-wrap items-center gap-6 justify-between">
            <div className="flex items-center gap-6 flex-wrap">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="block w-28 h-10"
              >
                <img
                  src="/images/Logo-Extendicare.png"
                  alt="Extendicare"
                  className="max-h-10 object-contain"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="block w-28 h-10"
              >
                <img
                  src="/images/Logo-Extendicare-Assist.png"
                  alt="Extendicare Assist"
                  className="max-h-10 object-contain"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="block w-28 h-10"
              >
                <img
                  src="/images/Logo-SGP.png"
                  alt="SGP"
                  className="max-h-10 object-contain"
                />
              </a>

              <div className="h-8 w-px bg-slate-200" aria-hidden />

              <a href="#" className="block w-40 h-10">
                <img
                  src="/images/womenLead_2025_Winner_logo.jpg"
                  alt="Award"
                  className="max-h-10 object-contain"
                />
              </a>
            </div>

            <div className="text-sm text-slate-500 flex flex-col lg:flex-row items-center max-md:justify-center gap-2 max-md:mt-8">
              <span>ParaMed © 2025 . Developed by The Web Jobs.</span>
              <div className="flex flex-row items-center space-x-2 lg:space-x-2">
                <a
                  href="#"
                  className="hover:underline text-custom-blue underline hover:text-custom-purple"
                >
                  Privacy.
                </a>
                <a
                  href="#"
                  className="hover:underline text-custom-blue underline hover:text-custom-purple"
                >
                  Terms and Conditions
                </a>
                <a
                  href="#"
                  className="hover:underline text-custom-blue underline hover:text-custom-purple"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
