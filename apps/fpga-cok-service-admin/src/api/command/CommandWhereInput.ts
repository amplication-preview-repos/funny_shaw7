import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TimerListRelationFilter } from "../timer/TimerListRelationFilter";

export type CommandWhereInput = {
  id?: StringFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  timers?: TimerListRelationFilter;
};
