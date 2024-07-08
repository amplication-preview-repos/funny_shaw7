import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type VoltageReadingWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
