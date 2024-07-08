import { Command as TCommand } from "../api/command/Command";

export const COMMAND_TITLE_FIELD = "code";

export const CommandTitle = (record: TCommand): string => {
  return record.code?.toString() || String(record.id);
};
