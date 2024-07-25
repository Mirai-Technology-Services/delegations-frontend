import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function NoDelegation() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h1>You have no active delegation.</h1>
      <Button as={Link} href="/start-trip" color="primary">
        Start Delegation
      </Button>
    </div>
  );
}
