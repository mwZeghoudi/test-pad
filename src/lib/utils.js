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
export const zodValidation = {
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().toUpperCase().min(2, { message: "Name too short" }).regex(/^[a-zA-Z\s-]{2,}$/, { message: 'Your Name contain forbiden caracters' }),
  consent: z.boolean().default(false).refine(value => value === true, { message: "You must accept the terms and conditions." }),
  loginPassword: z.string()
    .min(8, { message: "Password must be at least 8 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, { message: 'Your password must have at least 8 characters, have at least one cap, have at least one special caractere and at least one number' }),
}