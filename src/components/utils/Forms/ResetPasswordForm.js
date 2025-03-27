'use client'
import { useActionState, useEffect, useState } from 'react'
import { z } from "zod"
import FormComponent from "../FormComponent"
import { resetPassword } from '@/@/lib/auth';
import { toast } from "sonner";
import { zodValidation } from '@/@/lib/utils';

export default function ResetPasswordForm() {
  const [state, formAction, pending] = useActionState(resetPassword, { success: null, errors: {} })
  const [isReset, setIsReset] = useState(false)
  const formObject = [
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      validation: zodValidation.email,
      defaultValue: ''
    },
  ]
  const resetSchema = z.object({
    password: zodValidation.password,
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // Associe l'erreur à `confirmPassword`
  });

  const resetFormObject = [
    {
      name: 'password',
      placeholder: 'New Password',
      type: 'password',
      validation: resetSchema.shape.password,
      defaultValue: ''
    },
    {
      name: 'confirmPassword',
      placeholder: 'Confirm New Password',
      type: 'password',
      validation: resetSchema.shape.confirmPassword,
      defaultValue: ''
    },
  ];
  useEffect(() => {
    const email = document.cookie
      .split("; ")
      .find(row => row.startsWith("email="))
      ?.split("=")[1];
    const resetToken = document.cookie
      .split("; ")
      .find(row => row.startsWith("resetToken="))
      ?.split("=")[1];
    setIsReset(email && resetToken)
  }, [])
  useEffect(() => {
    if (state.success) {
      toast("An email has been sent to you to reset your password",
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
    <>
      {
        isReset ?
          <FormComponent
            submitLabel='Continue'
            formObject={resetFormObject}
            action={formAction}
            disable={pending}
          />
          :
          <FormComponent
            submitLabel='Continue'
            formObject={formObject}
            action={formAction}
            disable={pending}
          />
      }
    </>
  )
}