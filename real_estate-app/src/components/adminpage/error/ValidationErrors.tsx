import React from "react";
import { Alert } from "react-bootstrap";
import CSS from "csstype";
interface Props {
  errors: any;
}

const sty: CSS.Properties = {
  marginTop:"-15px",
  padding: "2px",
  width: "172px",
  borderRadius: "4px",
  background: "rgba(214, 69, 65)",
  color: "white",
};
export default function ValidationErrors({ errors }: Props) {
  return (
    <>
      {errors && (
        <Alert style={sty} variant="danger" className="mt-3">
          {errors.map((err: any, i: any) => (
            <p key={i}>{err}</p>
          ))}
        </Alert>
      )}
    </>
  );
}
