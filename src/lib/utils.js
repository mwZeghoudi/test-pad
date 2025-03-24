import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formConstructor(formObj) {
  const schemaShape = {};
  const defaultValues = {};
  formObj.forEach(el => {
    schemaShape[el.name] = el.validation
    defaultValues[el.name] = el.defaultValue;
  });
  const formSchema = z.object(schemaShape)
  return { formSchema, defaultValues };
}