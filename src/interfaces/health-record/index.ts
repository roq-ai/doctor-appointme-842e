import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface HealthRecordInterface {
  id?: string;
  user_id: string;
  clinic_id: string;
  diagnosis: string;
  prescription?: string;
  notes?: string;
  date_of_visit: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface HealthRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  clinic_id?: string;
  diagnosis?: string;
  prescription?: string;
  notes?: string;
}
