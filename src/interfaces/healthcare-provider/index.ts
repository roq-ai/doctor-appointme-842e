import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  user_id: string;
  clinic_id: string;
  qualification: string;
  experience?: number;
  specialization: string;
  working_days: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  clinic_id?: string;
  qualification?: string;
  specialization?: string;
  working_days?: string;
}
