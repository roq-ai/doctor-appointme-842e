import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SystemAdministratorInterface {
  id?: string;
  user_id: string;
  access_level: number;
  last_login?: any;
  login_attempts?: number;
  account_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SystemAdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  account_status?: string;
}
