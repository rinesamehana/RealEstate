import { useField } from "formik";
import React, { useState } from "react";
import { Form, Label } from "semantic-ui-react";
import CSS from "csstype";
const LabelStyle: CSS.Properties = {
  width: "310px",
  padding: "10px",
marginBottom:"15px",

height:"50px",

};
interface Props {
  placeholder: string;
  name: string;
  type?: string;
  label?: string;
  onChange?: any;



}


export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);

  
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <input style={LabelStyle} {...field} {...props}  />
      
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
