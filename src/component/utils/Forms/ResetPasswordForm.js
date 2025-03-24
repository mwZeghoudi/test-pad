'use client'
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { z } from "zod"
import FormComponent from "../FormComponent"
import { resetPassword } from '@/@/lib/auth';
export default function ResetPasswordForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(resetPassword, { success: null, errors: {} })
  const formObject = [
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      validation: z.string().email({ message: "Invalid email address" }),
      defaultValue: ''
    },
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
    />
  )
}