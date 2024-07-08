import { Command } from "../command/Command";

export type Timer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  interval: number | null;
  command?: Command | null;
};
