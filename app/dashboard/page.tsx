import Link from "next/link";
import { Button } from "@nextui-org/button";

export default async function Dashboard() {
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
    </div>
  );
}
