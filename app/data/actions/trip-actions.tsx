"use server";

import { schemaStartTrip } from "@/app/types/validation"; // Define your validation schema
import { fetchWithAuth } from "../utils/fetchWithAuth";
import { redirect } from "next/navigation";

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
    // time: formData.get("time"),
    delegation_id: Number(formData.get("delegation_id")),
  });

  if (!validatedFields.success) {
    return updateState(prevState, {
      zodErrors: validatedFields.error.flatten().fieldErrors,
    });
  }

  // Append type: "start" to the validated data
  const tripData = {
    ...validatedFields.data,
    type: "start",
  };

  console.log(JSON.stringify(tripData));

  try {
    const responseData = await fetchWithAuth(
      "http://localhost:3001/api/trips/start",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripData),
      },
    );

    redirect("/trips");
  } catch (error) {
    console.error(error);
    return updateState(prevState, {
      message: "Ops! Something went wrong. Please try again later.",
    });
  }
}
