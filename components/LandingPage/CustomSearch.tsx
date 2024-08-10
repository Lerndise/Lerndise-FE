"use client";
import Select from "react-select";
import { Search } from "lucide-react";

interface CustomSelectProps {
  options: any;
  onChange: any;
  inputValue?: any;
  onInputChange: any;
  placeholder: string;
  isLoading?: boolean;
}

const CustomSearch = ({
  options,
  onChange,
  inputValue,
  onInputChange,
  placeholder,
  isLoading,
}: CustomSelectProps) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
      border: "1px solid #272829",
      backgroundColor: "white",
      fontSize: "16px",
      height: "48px",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #272829",
        backgroundColor: "#DAC1F3",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#272829"
        : state.isFocused
        ? "#DAC1F3"
        : "white",
      "&:hover": {
        backgroundColor: state.isSelected ? "#272829" : "#DAC1F3",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#272829",
      fontSize: "16px",
    }),
    input: (provided: any) => ({
      ...provided,
      margin: "0px",
      fontSize: "16px",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "8px 16px",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#272829", // Text color
    }),
  };

  return (
    <div className="relative lg:w-[900px] no-select">
      <Select
        options={options}
        onChange={onChange}
        defaultInputValue={inputValue}
        onInputChange={onInputChange}
        styles={customStyles}
        placeholder={placeholder}
        isLoading={isLoading}
        autoFocus={false}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
      <Search
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
    </div>
  );
};

export default CustomSearch;
