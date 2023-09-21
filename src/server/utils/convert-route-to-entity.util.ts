const mapping: Record<string, string> = {
  appointments: 'appointment',
  clinics: 'clinic',
  'health-records': 'health_record',
  'healthcare-providers': 'healthcare_provider',
  'system-administrators': 'system_administrator',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
