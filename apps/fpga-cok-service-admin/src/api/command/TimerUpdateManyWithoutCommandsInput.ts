import { TimerWhereUniqueInput } from "../timer/TimerWhereUniqueInput";

export type TimerUpdateManyWithoutCommandsInput = {
  connect?: Array<TimerWhereUniqueInput>;
  disconnect?: Array<TimerWhereUniqueInput>;
  set?: Array<TimerWhereUniqueInput>;
};
