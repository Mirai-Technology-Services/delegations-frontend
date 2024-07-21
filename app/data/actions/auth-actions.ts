"use server";

export async function registerUserAction(formData: FormData) {
  const fields = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log(JSON.stringify(fields));

  try {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }

    const data = await response.json();
    console.log("Success:", data);
    // Handle successful login here (e.g., redirecting the user, setting cookies, etc.)
  } catch (error) {
    console.error("Error:", error);
    // Handle error here (e.g., showing an error message to the user)
  }
}
