import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Trip {
  trip_id: number;
  delegation_id: number;
  trip_type: string;
  start_time: string;
  end_time: string;
  start_location: string;
  end_location: string;
  trip_description?: string;
  start_meter: number;
  end_meter: number;
  car_id: number;
  remarks?: string;
  last_updated: string;
}
