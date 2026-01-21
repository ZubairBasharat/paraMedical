import * as React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { DynamicIcon } from "lucide-react/dynamic";
import { useIsLaptop } from "@/hooks/use-laptop";

interface ServiceData {
  key: string;
  name: string;
  description: string;
  link: string;
  image: string;
  ctaText: string;
  children: { title: string; url: string }[];
}

const services: ServiceData[] = [
  {
    key: "help-at-home",
    name: "Help at home",
    description: "ParaMed helps people live better at home.",
    link: "#",
    image: "/images/navbar-cta-1.jpg",
    ctaText: "Book your complimentary in-home care assessment.",
    children: [
      { title: "Alzheimer's dementia home care", url: "#" },
      { title: "Palliative care", url: "#" },
      { title: "Personal Home Care", url: "#" },
      { title: "Senior companion", url: "#" },
    ],
  },
  {
    key: "nursing-at-home",
    name: "Nursing at home",
    description: "Friendly care from familiar faces.",
    link: "#",
    image: "/images/navbar-cta-2.jpg",
    ctaText: "Learn more about Nursing at Home.",
    children: [
      { title: "Care at home post-hospitalization", url: "#" },
      { title: "Chronic disease management", url: "#" },
      { title: "Post hospitalization IV care", url: "#" },
      { title: "Post hospitalization wound care", url: "#" },
      { title: "Senior wellness checks", url: "#" },
    ],
  },
  {
    key: "respite-care-and-caregiver-relief",
    name: "Respite Care & Caregiver Relief",
    description:
      "Caregiver relief is just as important as the care for your family, let ParaMed give you a break.",
    link: "#",
    image: "/images/navbar-cta-3.jpg",
    ctaText: "Book your complimentary in-home care assessment.",
    children: [
      { title: "Alzheimer's dementia home care", url: "#" },
      { title: "Palliative care", url: "#" },
      { title: "Personal Home Care", url: "#" },
      { title: "Senior companion", url: "#" },
    ],
  },
  {
    key: "live-in-care",
    name: "Live-in Care",
    description: "Whenever and wherever you need us.",
    link: "#",
    image: "/images/navbar-cta-4.jpg",
    ctaText: "Learn more about Live-in Nursing.",
    children: [{ title: "Live-in care.", url: "#" }],
  },
  {
    key: "specialized-care",
    name: "Specialized Care",
    description:
      "ParaMed knows nurturing someone's character is as important as their care.",
    link: "#",
    image: "/images/navbar-cta-5.jpg",
    ctaText: "Learn more about Specialized Care.",
    children: [
      { title: "Alzheimer’s and dementia home care", url: "#" },
      { title: "Dietitian", url: "#" },
      { title: "Foot Care", url: "#" },
      { title: "Occupational Therapy", url: "#" },
      { title: "Pediatric Home Health Care", url: "#" },
      { title: "Physiotherapy", url: "#" },
      { title: "Social Work", url: "#" },
    ],
  },
  {
    key: "caregiver-packages",
    name: "Caregiver Packages",
    description: "Offering care solutions for your family.",
    link: "#",
    image: "/images/navbar-cta-6.jpg",
    ctaText: "Learn more about Caregiver Packages.",
    children: [
      { title: "Caregiver Freedom", url: "#" },
      { title: "Memory Care", url: "#" },
      { title: "Out & About", url: "#" },
      { title: "Rise N' Shine", url: "#" },
    ],
  },
];

export function MegaMenu() {
  const [open, setOpen] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState("help-at-home");
  const activeService = services.find((s) => s.key === activeKey);

  const isLaptopOrAbove = !useIsLaptop();
  if (!isLaptopOrAbove) return null;

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className=" items-center gap-1 font-semibold text-custom-blue hover:text-custom-purple"
        >
          Home health care services
          <DynamicIcon name={open ? "chevron-up" : "chevron-down"} size={16} />
        </Button>
      </DrawerTrigger>

      {/* DrawerContent customized to appear below navbar */}
      <DrawerContent className="w-full border-t border-gray-200 shadow-lg bg-white transition-all duration-500">
        <div className="container mx-auto py-8 px-6 grid grid-cols-3 divide-x divide-gray-200">
          {/* ==== Left column: parent list ==== */}
          <div className="p-6 bg-gray-50">
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.key}>
                  <Button
                    variant="ghost"
                    onMouseEnter={() => setActiveKey(svc.key)}
                    className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md transition ${
                      activeKey === svc.key
                        ? "bg-white font-semibold text-black pb-1 border-b-2 border-custom-purple shadow-sm cursor-pointer"
                        : "hover:bg-white text-custom-blue/90"
                    }`}
                  >
                    {svc.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== Middle column: CTA ==== */}
          <div className="p-6">
            {activeService && (
              <div>
                <div className="h-18">
                  <h3 className="text-2xl font-semibold leading-tight mb-2">
                    Live Better.
                    <br />
                    At Home.
                  </h3>
                </div>
                <div className="h-16 items-center">
                  <p className="text-gray-600 text-sm mb-4">
                    {activeService.description}
                  </p>
                </div>
                <a href={activeService.link} className="block group">
                  <div className="flex items-center rounded-md overflow-hidden hover:shadow-lg transition">
                    <img
                      src={activeService.image}
                      alt={activeService.name}
                      className="w-34 h-34 object-cover"
                    />
                    <div className="ml-4 text-sm font-medium text-blue-700 group-hover:text-blue-800">
                      {activeService.ctaText}
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* ==== Right column: children ==== */}
          <div className="p-6">
            {activeService && (
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  {activeService.name} Services:
                </h2>
                <ul className="space-y-2">
                  {activeService.children.map((child) => (
                    <li key={child.title}>
                      <a
                        href={child.url}
                        className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
                      >
                        <DynamicIcon
                          name="chevron-right"
                          size={16}
                          className="text-custom-purple mr-2"
                        />
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
