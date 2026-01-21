import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { X } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { MegaMenu } from "./NavMenu";
import clsx from "clsx";

export default function Navbar() {
  const [alertVisible, setAlertVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navbarRef}
      className={clsx(
        "sticky top-0 z-20 w-full transition-all duration-300",
        isScrolled ? "shadow-md" : "shadow-none"
      )}
    >
      {alertVisible && (
        <div className="bg-custom-blue text-white py-2 px-6 w-full transition-all duration-300">
          <div className="container mx-auto flex flex-row justify-between items-center">
            <div className="text-sm flex flex-col md:flex-row items-center gap-1">
              <div className="flex flex-row items-center gap-1">
                <DynamicIcon name="newspaper" size={16} />
                <span className="font-semibold text-md">Exciting News!</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-1">
                <span>
                  ParaMed and Closing the Gap are joining forces to serve you
                  better.{" "}
                </span>
                <a href="/" className="underline">
                  Learn more
                </a>
              </div>
            </div>
            <Button
              onClick={() => setAlertVisible(false)}
              className="text-white bg-transparent px-2 h-max hover:bg-white hover:text-black"
              aria-label="Close alert bar"
            >
              <X size={12} />
            </Button>
          </div>
        </div>
      )}

      {/* ⚪ Main Navbar */}
      <div
        className={clsx(
          "bg-white border-b border-gray-200 w-full px-6 transition-all duration-300",
          isScrolled ? "shadow-sm" : "shadow-none"
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            {/* Logo + Mega Menu */}
            <div className="flex flex-row gap-4 items-center">
              <div className="shrink-0">
                <a href="/" className="block">
                  <img
                    src="/paramed_logo.png"
                    alt="Paramed"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
              <MegaMenu />
            </div>

            {/* Right-side Buttons */}
            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-center space-x-4">
                <a href="#">
                  <Button className="hidden md:flex p-6 rounded-full bg-custom-blue hover:bg-transparent hover:text-custom-blue hover:ring-1 hover:ring-custom-blue cursor-pointer">
                    <DynamicIcon name="map-pin" size={16} /> Find an office
                  </Button>
                </a>
                <a href="#">
                  <Button className="hidden sm:flex p-6 rounded-full bg-custom-purple hover:bg-transparent hover:text-custom-purple hover:ring-1 hover:ring-custom-purple text-xs cursor-pointer">
                    Start Your Assessment{" "}
                    <DynamicIcon name="chevron-right" size={16} />
                  </Button>
                </a>
              </div>

              {/* Language Selector */}
              <div className="hidden md:flex items-center">
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
              </div>

              <SidebarTrigger />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
