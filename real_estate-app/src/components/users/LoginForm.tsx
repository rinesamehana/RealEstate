import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form1/MyTextInput";
import { useStore } from "../../app/stores/store";
import CSS from "csstype";
const FormStyle: CSS.Properties = {
  textAlign: "center",
};

export default observer(function LoginForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .login(values)
          .catch((error) => setErrors({ error: "Invalid email or password" }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form
          style={FormStyle}
          className="ui-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Header className="ui form" content="Login" />

          <MyTextInput name="email" placeholder="Email" />

          <MyTextInput name="password" placeholder="Password" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <Label
                style={{ marginBottom: 10 }}
                basic
                color="red"
                content={errors.error}
              />
            )}
          />

          <Button
            loading={isSubmitting}
            positive
            content="Login"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
});
