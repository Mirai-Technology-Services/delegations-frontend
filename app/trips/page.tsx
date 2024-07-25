import Link from "next/link";
import { Trip } from "../../types";
import { Button } from "@nextui-org/button";
import TripsTable from "./TripsTable";
import { fetchWithAuth } from "../data/utils/fetchWithAuth";

async function fetchTrips(): Promise<Trip[]> {
  const url = "http://localhost:3001/api/trips";
  const response = await fetchWithAuth(url);

  const trips: Trip[] = response.body;
  return trips;
}

export default async function Dashboard() {
  const trips = await fetchTrips();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All trips in one place! 🌍</h1>
      <TripsTable trips={trips} />
    </div>
  );
}
