import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  user_id: string;
  clinic_id: string;
  appointment_date: any;
  appointment_time: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  clinic_id?: string;
  appointment_time?: string;
  status?: string;
}
