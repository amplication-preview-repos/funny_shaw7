import { TimerCreateNestedManyWithoutCommandsInput } from "./TimerCreateNestedManyWithoutCommandsInput";

export type CommandCreateInput = {
  code?: string | null;
  description?: string | null;
  timers?: TimerCreateNestedManyWithoutCommandsInput;
};
