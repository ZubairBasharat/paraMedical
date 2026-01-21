import { lazy } from "react";
import LazyLoadOnView from "./components/common/LazyLoadOnView";
const HeroBanner = lazy(() => import("./components/homepage/heroBanner"));
import FancyIntro from "./components/homepage/fancyIntro";
import QuoteSection from "./components/homepage/quoteSection";
import NewsSection from "./components/homepage/newsSection";
import HomeCareAssessment from "./components/homepage/careSection";
import LocationSearch from "./components/homepage/locationSection";
import CareersSection from "./components/homepage/careersSection";
import CarePlan from "./components/homepage/planSection";

export default function App() {
  return (
    <>
      <div className="container mx-auto bg-white space-y-6">
        <HeroBanner />
        <FancyIntro />
        <QuoteSection />
        <NewsSection />
        <HomeCareAssessment />
        <LazyLoadOnView>
          <LocationSearch />
        </LazyLoadOnView>
        <LazyLoadOnView>
          <CareersSection />
        </LazyLoadOnView>
      </div>
      <CarePlan />
    </>
  );
}
