import { Button } from "@nextui-org/button";
import Link from "next/link";
import TripsTable from "../trips/TripsTable";
import TripsOverview from "../trips/TripsOverview";

export default function DelegationTrip({ delegation }: any) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h1>You have an active delegation with ongoing trip</h1>
      <TripsOverview trips={delegation.trips} />
      <Button as={Link} href="/start-trip" color="primary">
        Add Trip
      </Button>
    </div>
  );
}
