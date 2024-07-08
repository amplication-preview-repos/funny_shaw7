import { TimerUpdateManyWithoutCommandsInput } from "./TimerUpdateManyWithoutCommandsInput";

export type CommandUpdateInput = {
  code?: string | null;
  description?: string | null;
  timers?: TimerUpdateManyWithoutCommandsInput;
};
