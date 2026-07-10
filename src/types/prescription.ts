export type Medicine = {
  name: string;
  dosage: string;
  instruction: string;
};

export type Prescription = {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  medicines: Medicine[];
  notes?: string;
};
