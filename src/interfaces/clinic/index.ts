import { AppointmentInterface } from 'interfaces/appointment';
import { HealthRecordInterface } from 'interfaces/health-record';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClinicInterface {
  id?: string;
  description?: string;
  location?: string;
  working_hours?: string;
  speciality?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  health_record?: HealthRecordInterface[];
  healthcare_provider?: HealthcareProviderInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    health_record?: number;
    healthcare_provider?: number;
  };
}

export interface ClinicGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  working_hours?: string;
  speciality?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
