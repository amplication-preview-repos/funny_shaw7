import { Timer as TTimer } from "../api/timer/Timer";

export const TIMER_TITLE_FIELD = "id";

export const TimerTitle = (record: TTimer): string => {
  return record.id?.toString() || String(record.id);
};
