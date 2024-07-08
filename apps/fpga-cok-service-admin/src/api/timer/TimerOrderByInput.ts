import { SortOrder } from "../../util/SortOrder";

export type TimerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  interval?: SortOrder;
  commandId?: SortOrder;
};
