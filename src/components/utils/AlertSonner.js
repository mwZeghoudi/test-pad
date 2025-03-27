"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AlertSonner() {
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState('');

  useEffect(() => {
    const validEmail = document.cookie
      .split("; ")
      .find(row => row.startsWith("validEmail="))
      ?.split("=")[1];

    if (validEmail === "true") {
      setMessage("Your mail is confirmed");
    } else if (validEmail === "false") {
      setMessage("An error occurred, please try again.");
    }
    setIsValid(validEmail === "true");
    document.cookie = "validEmail=; Max-Age=0; path=/;";
  }, []);


  useEffect(() => {
    if (message) {
      const toastConfig = {
        type: isValid ? "success" : "error",
        duration: 3000,
        position: "top-right",
        unstyled: true,
        className: "p-3 rounded-md text-white flex gap-2 justify-center items-center align-center " + (isValid ? 'bg-green-500' : 'bg-red-400')
      }

      toast(message, toastConfig);
    }
  }, [message]);

  return null;
}