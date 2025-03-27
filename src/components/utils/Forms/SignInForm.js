"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FormComponent from "../FormComponent";
import { Checkbox } from "@/@/components/ui/checkbox";
import FormLink from "../FormLink";
import { login } from "@/@/lib/auth";
import { zodValidation } from "@/@/lib/utils";
export default function SignInForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(login, {
    success: null,
    errors: {},
  });
  const formObject = [
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      validation: zodValidation.email,
      defaultValue: "",
    },
    {
      name: "password",
      placeholder: "password",
      type: "password",
      validation: zodValidation.loginPassword,
      defaultValue: "",
    },
  ];
  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    }
  }, [state]);

  return (
    <FormComponent
      submitLabel="Sign In"
      formObject={formObject}
      action={formAction}
      disable={pending}
      beforeSubmit={
        <div className="flex items-center space-x-2 justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <FormLink href="reset-password" label="Forgot password ?" />
        </div>
      }
    />
  );
}
