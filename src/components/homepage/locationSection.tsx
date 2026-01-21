import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // adjust import path based on your shadcn setup
import { Button } from "@/components/ui/button";
import locationImg from "@/assets/locationImg.jpg";

interface CityGroup {
  province: string;
  cities: string[];
}

const cityGroups: CityGroup[] = [
  {
    province: "Alberta",
    cities: ["Calgary", "Edmonton"],
  },
  {
    province: "Nova Scotia",
    cities: ["Halifax"],
  },
  {
    province: "Ontario",
    cities: [
      "Bancroft",
      "Barrie",
      "Belleville",
      "Brantford",
      "Burlington",
      "Cambridge",
      "Cornwall",
      "Dryden",
      "Etobicoke",
      "Fort Frances",
      "Guelph",
      "Halton",
      "Hamilton",
      "Kenora",
      "Kitchener",
      "Lindsay",
      "London",
      "Madoc",
      "Mississauga",
      "Muskoka",
      "Napanee",
      "Niagara",
      "North Bay",
      "Oakville",
      "Orillia",
      "Oshawa",
      "Ottawa",
      "Owen Sound",
      "Red Lake",
      "Renfrew",
      "Sault Ste. Marie",
      "Simcoe",
      "Sioux Lookout",
      "Stratford",
      "Sudbury",
      "Thunder Bay",
      "Toronto",
      "Toronto Central",
      "Trenton",
      "Waterloo",
      "Windsor",
      "Woodbridge",
      "Gravenhurst",
    ],
  },
];

const LocationSearch: React.FC = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const selectedCities =
    cityGroups.find((g) => g.province === province)?.cities || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (province && city) {
    //   window.open(
    //     `https://www.paramed.com/our-locations/?location_province=${province}&location_city=${city}`,
    //     "_blank"
    //   );
    // } else {
    //   alert("Please select both province and city.");
    // }
    console.log(province, city);
  };

  return (
    <section
      className="relative bg-cover bg-center text-white py-40"
      style={{ backgroundImage: `url(${locationImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-2">
          Trusted Home Care Support is Nearby
        </h3>
        <p className="text-lg text-gray-200 mb-10">Find your local office</p>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md rounded-lg p-6 flex flex-col md:flex-row gap-4 justify-center items-center shadow-lg"
        >
          {/* Province Select */}
          <div className="flex flex-col text-left w-full md:w-1/3">
            <label className="mb-1 text-sm font-medium text-white">
              Province
            </label>
            <Select onValueChange={setProvince}>
              <SelectTrigger className="bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-purple-600">
                <SelectValue placeholder="-- Select Province --" />
              </SelectTrigger>
              <SelectContent>
                {cityGroups.map((group) => (
                  <SelectItem key={group.province} value={group.province}>
                    {group.province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* City Select */}
          <div className="flex flex-col text-left w-full md:w-1/3">
            <label className="mb-1 text-sm font-medium text-white">City</label>
            <Select onValueChange={setCity} disabled={!province} value={city}>
              <SelectTrigger className="bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-purple-600 disabled:bg-gray-100">
                <SelectValue
                  placeholder={
                    province ? "-- Select City --" : "Select Province first"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {selectedCities.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-2 md:mt-6 bg-custom-purple hover:bg-custom-purple text-white font-semibold px-6 py-3 rounded-full shadow transition cursor-pointer"
          >
            Find an Office
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LocationSearch;
