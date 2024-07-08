import { Timer } from "../timer/Timer";

export type Command = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  code: string | null;
  description: string | null;
  timers?: Array<Timer>;
};
