export type VoltageReading = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  value: number | null;
};
