import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Card, CardBody } from "@nextui-org/card";

interface OngoingTripProps {
  car: string;
  start_location: string;
  end_location: string;
}

export default function OngoingTrip(props: OngoingTripProps): JSX.Element {
  return (
    <Card className="max-w-xl">
      <CardBody>
        <div className="flex justify-between items-center py-2 px-10">
          <h1>Home</h1>
          <div className="flex gap-2 items-center">
            <h1>Elantra</h1>
            <ArrowLongRightIcon className="h-8 w-8" />
          </div>
          <h1>Home</h1>
        </div>
      </CardBody>
    </Card>
  );
}
