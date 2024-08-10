"use client";
import React from "react";
import CustomSearch from "@/components/LandingPage/CustomSearch";

const Search = () => {
  const options = [
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "french", label: "French" },
  ];
  const handleInputChange = () => {
    //do nothing for now.
  };

  const handleChange = () => {
    console.log("changed");
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h3 className="text-center font-semibold text-3xl w-[600px]">Search among our interactive lessons across all topics</h3>
      <CustomSearch
        options={options}
        onChange={handleChange}
        onInputChange={handleInputChange}
        placeholder="Search any topic"
      />
    </div>
  );
};

export default Search;
