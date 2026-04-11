export interface ClinicConfig {
  brand: {
    name: string;
    doctor: string;
    fullName: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  };
  schedule: {
    weekdays: string;
    saturdays: string;
  };
}
