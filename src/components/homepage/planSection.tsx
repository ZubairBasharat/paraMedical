import { DynamicIcon } from "lucide-react/dynamic";
import { Button } from "../ui/button";

interface CarePlanCTAProps {
  logoSrc?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CarePlan({
  logoSrc = "/images/new_paramed_logo_white.png",
  text = "Let's Start your Care Plan Today for a Better Tomorrow",
  buttonLabel = "Start My Care Plan",
  buttonHref = "#",
}: CarePlanCTAProps) {
  return (
    <section className="relative bg-custom-purple text-white py-12">
      <div className="relative container mx-auto flex flex-col md:flex-row md:justify-between items-center justify-center text-center gap-4">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logoSrc}
            alt="ParaMed Logo"
            className="w-28 md:w-48 object-contain"
          />
        </div>

        {/* Content */}
        <p className="text-base md:text-lg font-medium max-w-2xl">{text}</p>

        {/* Button */}
        <a href={buttonHref} title={buttonLabel}>
          <Button className="inline-flex items-center gap-2 bg-white hover:bg-transparent text-custom-purple hover:text-white hover:border font-semibold px-6 py-3 rounded-full shadow transition cursor-pointer">
            <span>{buttonLabel}</span>
            <DynamicIcon name="chevron-right" className="ml-2 text-lg" />
          </Button>
        </a>
      </div>
    </section>
  );
}
