import Link from "next/link";
import { format } from "date-fns";
import { Trip } from "../types";

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
        <Link href="/trips/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add New Trip
          </button>
        </Link>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Log End of Trip
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Generate PDF
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300 text-black">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Trip ID</th>
            <th className="py-2 px-4 border-b">Delegation ID</th>
            <th className="py-2 px-4 border-b">Trip Type</th>
            <th className="py-2 px-4 border-b">Start Time</th>
            <th className="py-2 px-4 border-b">End Time</th>
            <th className="py-2 px-4 border-b">Start Location</th>
            <th className="py-2 px-4 border-b">End Location</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Meter Start</th>
            <th className="py-2 px-4 border-b">Meter End</th>
            <th className="py-2 px-4 border-b">Car ID</th>
            <th className="py-2 px-4 border-b">Remarks</th>
            <th className="py-2 px-4 border-b">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.trip_id}>
              <td className="py-2 px-4 border-b">{trip.trip_id}</td>
              <td className="py-2 px-4 border-b">{trip.delegation_id}</td>
              <td className="py-2 px-4 border-b">{trip.trip_type}</td>
              <td className="py-2 px-4 border-b">
                {format(new Date(trip.start_time), "yyyy-MM-dd HH:mm:ss")}
              </td>
              <td className="py-2 px-4 border-b">
                {format(new Date(trip.end_time), "yyyy-MM-dd HH:mm:ss")}
              </td>
              <td className="py-2 px-4 border-b">{trip.start_location}</td>
              <td className="py-2 px-4 border-b">{trip.end_location}</td>
              <td className="py-2 px-4 border-b">
                {trip.trip_description || "N/A"}
              </td>
              <td className="py-2 px-4 border-b">{trip.meter_start}</td>
              <td className="py-2 px-4 border-b">{trip.meter_end}</td>
              <td className="py-2 px-4 border-b">{trip.car_id}</td>
              <td className="py-2 px-4 border-b">{trip.remarks || "N/A"}</td>
              <td className="py-2 px-4 border-b">
                {format(new Date(trip.last_updated), "yyyy-MM-dd HH:mm:ss")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
