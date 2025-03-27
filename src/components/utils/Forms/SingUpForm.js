'use client'
import { useActionState, useEffect } from 'react'
import FormComponent from "../FormComponent"
import FormLink from "../FormLink"
import { register } from "@/@/lib/auth"
import { toast } from "sonner";
import { zodValidation } from "@/@/lib/utils"

export default function SignUpForm() {
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
      validation: zodValidation.name,
      defaultValue: ''
    },
    {
      name: 'lastname',
      placeholder: 'Last Name',
      type: 'name',
      validation: zodValidation.name,
      defaultValue: ''
    },
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      validation: zodValidation.email,
      defaultValue: ''
    },
    {
      name: 'password',
      placeholder: 'password',
      type: 'password',
      validation: zodValidation.password,
      defaultValue: '',
      description: 'Your password must have at least 8 characters, at least one cap, at least one special caracter and at least one number'
    },
    {
      name: 'consent',
      label: consentLabel,
      type: 'checkbox',
      className: "flex flex-row justify-between items-start space-y-0",
      validation: zodValidation.consent,
      defaultValue: false,
    }
  ]

  useEffect(() => {
    if (state.success) {
      toast("An email has been sent to you to confirm your email address",
        {
          type: "success",
          duration: 10000,
          position: "top-right",
          unstyled: true,
          className: "p-3 rounded-md text-white flex gap-2 justify-center items-center align-center bg-green-500"
        }
      );
    }
  }, [state])

  return (
    <FormComponent
      submitLabel="Sign Up"
      formObject={formObject}
      action={formAction}
      disable={pending}
    />
  )
}
