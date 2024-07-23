import EndTripForm from "./EndTripForm";

export default function StartTrip() {
  return (
    <div className="flex items-center justify-center">
      <EndTripForm delegationNumber={1} endMeter={10} />
    </div>
  );
}
