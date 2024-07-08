import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  code?: SortOrder;
  description?: SortOrder;
};
