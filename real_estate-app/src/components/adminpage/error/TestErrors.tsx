import React, { useState } from "react";

import axios from "axios";
import { NavLink } from "react-router-dom";
import ValidationErrors from "./ValidationErrors";
import { Button, Header, Segment } from "semantic-ui-react";

export default function TestErrors() {
  const baseUrl = "http://localhost:5000/api";
  const [errors, setErrors] = useState(null);

  function handleNotFound() {
    axios
      .get(baseUrl + "buggy/not-found")
      .catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios
      .get(baseUrl + "buggy/bad-request")
      .catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios
      .get(baseUrl + "buggy/server-error")
      .catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios
      .get(baseUrl + "buggy/unauthorised")
      .catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios.get(baseUrl + "shtepia/notaguid").catch((err) => console.log(err));
  }

  function handleValidationError() {
    axios.post(baseUrl + "shtepia", {}).catch((err) => setErrors(err));
  }

  return (
    <>
      <Header as="h1" content="TestError component" />
      <Segment>
        <Button.Group>
          <Button onClick={handleNotFound} content="Not Found" basic primary />
          <Button
            onClick={handleBadRequest}
            content="Bad Request"
            basic
            primary
          />
          <Button
            onClick={handleValidationError}
            content="Validation Error"
            basic
            primary
          />
          <Button
            onClick={handleServerError}
            content="Server Error"
            basic
            primary
          />
          <Button
            onClick={handleUnauthorised}
            content="Unauthorised"
            basic
            primary
          />
          <Button onClick={handleBadGuid} content="Bad Guid" basic primary />
        </Button.Group>
      </Segment>
      {errors && <ValidationErrors errors={errors} />}
    </>
  );
}
