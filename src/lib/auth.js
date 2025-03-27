"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  try {
    const data = Object.fromEntries(formData);
    const response = await fetch(
      "https://api-dev.pokeadeal.com/api/Authenticate/login-professional",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "An error occurred while logging in");
    }
    // 🔍 Vérifie que le cookie est bien défini

    (await cookies()).set("accessToken", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function register(prevState, formData) {
  try {
    const data = Object.fromEntries(formData);
    const response = await fetch(
      "https://api-dev.pokeadeal.com/api/Authenticate/register-professional",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);

    if (!response.ok) {
      throw new Error("An error occurred while signing up");
    }
    return { success: true, data: { message: "Profile created" } };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function resetPassword(prevState, formData) {
  try {
    const data = Object.fromEntries(formData);
    const cookieStore = await cookies();
    data.email = cookieStore.get("email")?.value;
    data.resetCode = cookieStore.get("resetToken")?.value;
    console.log(JSON.stringify(data));
    const response = await fetch(
      "https://api-dev.pokeadeal.com/api/Authenticate/reset-password-professional",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("An error occurred while reseting the password");
    }
    return { success: true, data: { message: "Your password has been reseted" } };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function forgotPassword(prevState, formData) {
  try {
    const data = Object.fromEntries(formData);
    const response = await fetch(
      "https://api-dev.pokeadeal.com/api/Authenticate/forgot-password-professional",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("An error occurred while reseting the password");
    }
    return { success: true, data: { message: "Email sent" } };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) return null;
  try {
    return accessToken;
  } catch (error) {
    return null;
  }
}

export async function logout() {
  (await cookies()).delete("accessToken");
  redirect("/sign-in");
}

export async function validatEmail(data) {
  try {
    const params = new URLSearchParams();
    for (const key in data) {
      params.append(key, data[key]);
    }
    const response = await fetch("https://api-dev.pokeadeal.com/api/Authenticate/confirm-email-professional?" + params);
    console.log(response);
    if (!response.ok) {
      throw new Error("An error occurred while validating the email");
    }
    return true;
  } catch (error) {
    return false;
  }
}