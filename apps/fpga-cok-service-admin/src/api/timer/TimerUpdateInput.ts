import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";

export type TimerUpdateInput = {
  interval?: number | null;
  command?: CommandWhereUniqueInput | null;
};
