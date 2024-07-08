import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";

export type TimerCreateInput = {
  interval?: number | null;
  command?: CommandWhereUniqueInput | null;
};
