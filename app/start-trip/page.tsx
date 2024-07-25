import { fetchWithAuth } from "../data/utils/fetchWithAuth";
import StartTripForm from "./StartTripForm";

async function fetchStartTripFormData() {
  const url = "http://localhost:3001/api/trips/start-form";
  const response = await fetchWithAuth(url);
  return response.body; // Return the response body directly
}

export default async function StartTrip() {
  const formData = await fetchStartTripFormData();

  return (
    <div className="flex items-center justify-center">
      <StartTripForm {...formData} />
    </div>
  );
}
