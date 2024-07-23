import { Button } from "@nextui-org/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const status = useFormStatus();
  return (
    <Button type="submit" color="primary" isLoading={status.pending}>
      {status.pending ? "Starting..." : "Start Trip"}
    </Button>
  );
}
