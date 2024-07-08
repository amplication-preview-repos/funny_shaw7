import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommandTitle } from "../command/CommandTitle";

export const TimerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="interval" source="interval" />
        <ReferenceInput source="command.id" reference="Command" label="command">
          <SelectInput optionText={CommandTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
