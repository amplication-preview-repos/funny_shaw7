import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommandTitle } from "../command/CommandTitle";

export const TimerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="interval" source="interval" />
        <ReferenceInput source="command.id" reference="Command" label="command">
          <SelectInput optionText={CommandTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
