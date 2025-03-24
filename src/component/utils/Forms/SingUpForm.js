'use client'
import { z } from "zod"
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import FormComponent from "../FormComponent"
import FormLink from "../FormLink"
import { register } from "@/@/lib/auth"
export default function SignUpForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(register, { success: null, errors: {} })
  const consentLabel = <div className="grid gap-1.5 leading-none text-xs">
    <div
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </div>
    <p className="text-sm text-muted-foreground">
      You agree to our
      <FormLink href="cgu" label=" Terms & Conditions " />
      and our
      <FormLink href="privacy" label=" Privacy Policy" />.
    </p>
  </div>
  const formObject = [
    {
      name: 'firstname',
      placeholder: 'First Name',
      type: 'name',
      validation: z.string().toUpperCase().min(2, { message: "First Name too short" }).regex(/^[a-zA-Z\s-]{2,}$/, { message: 'Your First Name contain forbiden caracters' }),
      defaultValue: ''
    },
    {
      name: 'lastname',
      placeholder: 'Last Name',
      type: 'name',
      validation: z.string().toUpperCase().min(2, { message: "Last Name too short" }).regex(/^[a-zA-Z\s-]{2,}$/, { message: 'Your Last Name contain forbiden caracters' }),
      defaultValue: ''
    },
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      validation: z.string().email({ message: "Invalid email address" }),
      defaultValue: ''
    },
    {
      name: 'password',
      placeholder: 'password',
      type: 'password',
      validation:
        z
          .string()
          .min(8, { message: "Password must be at least 8 characters." })
          .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, { message: 'Your password must have at least 8 characters, have at least one cap, have at least one special caractere and at least one number' }),
      defaultValue: '',
      description: 'Your password must have at least 8 characters, at least one cap, at least one special caracter and at least one number'
    },
    {
      name: 'consent',
      label: consentLabel,
      type: 'checkbox',
      className: "flex flex-row justify-between items-start space-y-0",
      validation: z.boolean().default(false).refine(value => value === true, { message: "You must accept the terms and conditions." }),
      defaultValue: false,
    }
  ]

  useEffect(() => {
    if (state.success) {
      router.push('/sign-in');
    }
  }, [state])

  return (
    <FormComponent
      formObject={formObject}
      action={formAction}
      disable={pending}
    />
  )
}
