import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";

export type TimerWhereInput = {
  id?: StringFilter;
  interval?: IntNullableFilter;
  command?: CommandWhereUniqueInput;
};
