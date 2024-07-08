import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMAND_TITLE_FIELD } from "../command/CommandTitle";

export const TimerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Timers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="interval" source="interval" />
        <ReferenceField label="command" source="command.id" reference="Command">
          <TextField source={COMMAND_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
