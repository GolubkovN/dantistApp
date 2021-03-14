export interface AppointmentModel {
  title: string;
  data: PatientDataModel[];
}

export interface PatientDataModel {
  name: string;
  avatar: string;
  key: string;
  id: string;
  time: string;
  diagnoses: string;
}
