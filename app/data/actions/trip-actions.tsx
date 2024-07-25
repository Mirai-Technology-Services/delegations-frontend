"use server";

import { schemaStartTrip } from "@/app/types/validation";
import { fetchWithAuth } from "../utils/fetchWithAuth";

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
    start_location: formData.get("location"),
    start_meter: Number(formData.get("meter")),
    // time: formData.get("time"),
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return updateState(prevState, {
      zodErrors: validatedFields.error.flatten().fieldErrors,
    });
  }

  const tripData = { ...validatedFields.data, car_id: 1 };

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
