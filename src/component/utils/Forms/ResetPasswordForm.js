'use client'
import { z } from "zod"
import FormComponent from "../FormComponent"
export default function ResetPasswordForm() {
  const formObject = [
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      validation: z.string().email({ message: "Invalid email address" }),
      defaultValue: ''
    },
  ]

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <FormComponent
      formObject={formObject}
      action={onSubmit}
    />
  )
}