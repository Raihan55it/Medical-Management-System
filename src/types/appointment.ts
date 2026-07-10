export type AppointmentStatus = "pending" | "completed" | "cancelled";

export type Appointment = {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: AppointmentStatus;
};
