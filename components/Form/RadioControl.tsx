/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupControlProps {
  control: any;
  name: string;
  label?: string;
  options: RadioOption[];
  defaultValue?: string;
}

const RadioControl = ({
  control,
  name,
  label,
  options,
  defaultValue,
}: RadioGroupControlProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const { error } = useFormField();
        return (
          <FormItem className="space-y-3">
            <FormLabel className="text-custom-black_800 text-sm font-bodyMediumFont">
              {label}
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value || defaultValue}
                className="flex flex-col space-y-1"
              >
                {options.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={option.value}
                        className={cn(
                          error
                            ? "border-custom-error-300 bg-custom-error-200 focus:bg-custom-error-200 focus:border-custom-error-300"
                            : "border-custom-black-400 focus:bg-custom-info-light focus:border-custom-info",
                          "focus:outline-none"
                        )}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default RadioControl;