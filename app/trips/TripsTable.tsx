"use client";

import { format } from "date-fns";
import { Trip } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

interface TripsTableProps {
  trips: Trip[];
}

const TripsTable: React.FC<TripsTableProps> = ({ trips }) => {
  return (
    <Table aria-label="Trips Table">
      <TableHeader>
        <TableColumn>Trip ID</TableColumn>
        <TableColumn>Delegation ID</TableColumn>
        <TableColumn>Trip Type</TableColumn>
        <TableColumn>Start Time</TableColumn>
        <TableColumn>End Time</TableColumn>
        <TableColumn>Start Location</TableColumn>
        <TableColumn>End Location</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Meter Start</TableColumn>
        <TableColumn>Meter End</TableColumn>
        <TableColumn>Car ID</TableColumn>
        <TableColumn>Remarks</TableColumn>
        <TableColumn>Last Updated</TableColumn>
      </TableHeader>
      <TableBody items={trips}>
        {(trip: Trip) => (
          <TableRow key={trip.trip_id}>
            <TableCell>{trip.trip_id}</TableCell>
            <TableCell>{trip.delegation_id}</TableCell>
            <TableCell>{trip.trip_type}</TableCell>
            <TableCell>
              {format(new Date(trip.start_time), "yyyy-MM-dd HH:mm:ss")}
            </TableCell>
            <TableCell>
              {format(new Date(trip.end_time), "yyyy-MM-dd HH:mm:ss")}
            </TableCell>
            <TableCell>{trip.start_location}</TableCell>
            <TableCell>{trip.end_location}</TableCell>
            <TableCell>{trip.trip_description || "N/A"}</TableCell>
            <TableCell>{trip.start_meter}</TableCell>
            <TableCell>{trip.end_meter}</TableCell>
            <TableCell>{trip.car_id}</TableCell>
            <TableCell>{trip.remarks || "N/A"}</TableCell>
            <TableCell>
              {format(new Date(trip.last_updated), "yyyy-MM-dd HH:mm:ss")}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TripsTable;
