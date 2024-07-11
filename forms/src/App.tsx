import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./form";
import FormWithStateHook from "./FormWithStateHook";
import FormWithReactFormHook from "./FormWithReactFormHook";
import FormSchemaBasedValidation from "./FormSchemaBasedValidation";

function App() {
  return (
    <>
      <Form />
      <FormWithStateHook />
      <FormWithReactFormHook />
      <FormSchemaBasedValidation />
    </>
  );
}

export default App;
