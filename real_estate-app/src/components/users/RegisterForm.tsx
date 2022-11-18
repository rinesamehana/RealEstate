import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Header } from "semantic-ui-react";
import MyTextInput from "../../app/common/form1/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from "yup";
import ValidationErrors from "../adminpage/error/ValidationErrors";
import Navbar from "../navbar/Navbar";
import "./loginstyle.css";
export default observer(function RegisterForm() {
  const { userStore } = useStore();
  return (
    <>
      <Navbar />
      <div className="login-container">
        <Formik
          initialValues={{
            displayName: "",
            username: "",
            email: "",
            password: "",
            error: null,
          }}
          onSubmit={(values, { setErrors }) =>
            userStore.register(values).catch((error) => setErrors({ error }))
          }
          validationSchema={Yup.object({
            displayName: Yup.string().required(),
            username: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required(),
          })}>
          {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
            <Form
              className="ui-form error"
              onSubmit={handleSubmit}
              autoComplete="off">
              {/* <Header className="ui form" content="Sign up" /> */}
              <div className="container_rl">
                <div className="designn">
                  <h1 className="titlee">Create an account</h1>
                  <MyTextInput name="displayName" placeholder="Display Name" />
                  <MyTextInput name="username" placeholder="Username" />
                  <MyTextInput name="email" placeholder="Email" />
                  <MyTextInput
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <ErrorMessage
                    name="error"
                    render={() => <ValidationErrors errors={errors.error} />}
                  />

                  <Button
                    disabled={!isValid || !dirty || isSubmitting}
                    loading={isSubmitting}
                    color={"black"}
            
                    content="Register"
                    type="submit"
                    fluid
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
});
