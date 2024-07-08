import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CommandList } from "./command/CommandList";
import { CommandCreate } from "./command/CommandCreate";
import { CommandEdit } from "./command/CommandEdit";
import { CommandShow } from "./command/CommandShow";
import { TimerList } from "./timer/TimerList";
import { TimerCreate } from "./timer/TimerCreate";
import { TimerEdit } from "./timer/TimerEdit";
import { TimerShow } from "./timer/TimerShow";
import { VoltageReadingList } from "./voltageReading/VoltageReadingList";
import { VoltageReadingCreate } from "./voltageReading/VoltageReadingCreate";
import { VoltageReadingEdit } from "./voltageReading/VoltageReadingEdit";
import { VoltageReadingShow } from "./voltageReading/VoltageReadingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FPGACokService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Command"
          list={CommandList}
          edit={CommandEdit}
          create={CommandCreate}
          show={CommandShow}
        />
        <Resource
          name="Timer"
          list={TimerList}
          edit={TimerEdit}
          create={TimerCreate}
          show={TimerShow}
        />
        <Resource
          name="VoltageReading"
          list={VoltageReadingList}
          edit={VoltageReadingEdit}
          create={VoltageReadingCreate}
          show={VoltageReadingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
