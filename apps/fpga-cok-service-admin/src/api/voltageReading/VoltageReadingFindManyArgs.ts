import { VoltageReadingWhereInput } from "./VoltageReadingWhereInput";
import { VoltageReadingOrderByInput } from "./VoltageReadingOrderByInput";

export type VoltageReadingFindManyArgs = {
  where?: VoltageReadingWhereInput;
  orderBy?: Array<VoltageReadingOrderByInput>;
  skip?: number;
  take?: number;
};
