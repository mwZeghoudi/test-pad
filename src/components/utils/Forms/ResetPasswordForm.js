'use client'
import { useActionState, useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { z } from "zod"
import FormComponent from "../FormComponent"
import { forgotPassword, resetPassword } from '@/@/lib/auth';
import { toast } from "sonner";
import { zodValidation } from '@/@/lib/utils';

export default function ResetPasswordForm() {
  const [state, formAction, pending] = useActionState(forgotPassword, { success: null, errors: {} })
  const [resetState, resetFormAction, resetPending] = useActionState(resetPassword, { success: null, errors: {} })
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

  const passwordValidation = zodValidation.password;
  const resetFormSchema = z.object({
    newPassword: zodValidation.password,
    confirmPassword: zodValidation.password,
  }).superRefine(({ newPassword, confirmPassword }, ctx) => {
    if (newPassword !== confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });
  const resetFormObject = [
    {
      name: 'newPassword',
      placeholder: 'New Password',
      type: 'password',
      validation: passwordValidation,
      defaultValue: ''
    },
    {
      name: 'confirmPassword',
      placeholder: 'Confirm New Password',
      type: 'password',
      validation: passwordValidation,
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
  useEffect(() => {
    if (resetState.success) {
      toast("Your password has been reset",
        {
          type: "success",
          duration: 5000,
          position: "top-right",
          unstyled: true,
          className: "p-3 rounded-md text-white flex gap-2 justify-center items-center align-center bg-green-500"
        }
      );
      document.cookie = "validEmail=; Max-Age=0; path=/;";
      setTimeout(() => {
        redirect("/sign-in");
      }, 1400);
    }
  }, [resetState])

  return (
    <>
      {
        isReset ?
          <FormComponent
            submitLabel='Continue'
            formObject={resetFormObject}
            action={resetFormAction}
            disable={pending}
            schema={resetFormSchema}
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