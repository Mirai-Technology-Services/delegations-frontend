"use server";

import { schemaStartTrip } from "@/app/types/validation"; // Define your validation schema

// Utility function to update state
function updateState(prevState: any, updates: any) {
  return {
    ...prevState,
    zodErrors: null,
    message: null,
    ...updates,
  };
}

// Action to start a new trip
export async function startTripAction(prevState: any, formData: FormData) {
  const validatedFields = schemaStartTrip.safeParse({
    location: formData.get("location"),
    meter: Number(formData.get("meter")),
    time: formData.get("time"),
    delegation_id: Number(formData.get("delegation_id")),
  });

  console.debug("Validated fields", validatedFields.error);

  if (!validatedFields.success) {
    return updateState(prevState, {
      zodErrors: validatedFields.error.flatten().fieldErrors,
    });
  }

  try {
    const response = await fetch("http://localhost:3001/api/trips/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return updateState(prevState, {
        message: errorData.message || "Failed to start the trip.",
      });
    }

    const responseData = await response.json();
    return updateState(prevState, {
      message: "Trip started successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error(error);
    return updateState(prevState, {
      message: "Ops! Something went wrong. Please try again later.",
    });
  }
}
