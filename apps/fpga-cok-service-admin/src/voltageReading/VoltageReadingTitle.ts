import { VoltageReading as TVoltageReading } from "../api/voltageReading/VoltageReading";

export const VOLTAGEREADING_TITLE_FIELD = "id";

export const VoltageReadingTitle = (record: TVoltageReading): string => {
  return record.id?.toString() || String(record.id);
};
