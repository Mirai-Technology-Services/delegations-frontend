import Link from "next/link";
import { Trip } from "../../types";
import { Button } from "@nextui-org/button";
import TripsTable from "./TripsTable";

async function fetchTrips() {
  const res = await fetch("http://localhost:3001/api/trips", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch trips");
  }
  const trips: Trip[] = await res.json();
  return trips;
}

export default async function Dashboard() {
  const trips = await fetchTrips();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-4 mb-4">
        <Link href="/start-trip">
          <Button color="primary">Start Trip</Button>
        </Link>
        <Link href="/end-trip">
          <Button color="primary">End Trip</Button>
        </Link>
        <Link href="/make-pdf">
          <Button color="primary">Generate Report</Button>
        </Link>
      </div>
      <TripsTable trips={trips} />
    </div>
  );
}
