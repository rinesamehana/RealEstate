import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Header, Input, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form1/MyTextInput";
import { useStore } from "../../app/stores/store";

import "./loginstyle.css";
import Navbar from "../navbar/Navbar";

export default observer(function LoginForm() {
  const { userStore } = useStore();
  return (
    <><Navbar />
    <div className="login-container">
      <Formik
        initialValues={{ email: "", password: "", error: null }}
        onSubmit={(values, { setErrors }) => userStore
          .login(values)
          .catch((error) => setErrors({ error: "Invalid email or password" }))}>
        {({ handleSubmit, isSubmitting, errors }) => (
          <div className="vlogin">
            <Form
              className="ui-form"
              onSubmit={handleSubmit}
              autoComplete="off">
              <div className="container_rl">
                <div className="designn">
                  <h1 className="titlee">Have an account?</h1>

                  <MyTextInput name="email" placeholder="Email" />

                  <MyTextInput
                    name="password"
                    placeholder="Password"
                    type="password" />
                  <ErrorMessage
                    name="error"
                    render={() => (
                      <Label
                        style={{ marginBottom: 10 }}
                        basic
                        color="red"
                        content={errors.error} />
                    )} />

                  <Button
                    loading={isSubmitting}
                    color={"black"}
                    content="Sign In"
                    type="submit"
                    fluid />
                </div>
                <div className="other_buttons">
                  <div className=".w-50-login">
                    <Input type="checkbox" checked />
                    <span className="checkmark"></span>
                    <label className="checkbox-wrap checkbox-primary">
                      Remember Me
                    </label>
                  </div>
                  <div className=".w-50-login">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
                <div className="orSignIn">
                  <h4>— Or Sign In With —</h4>
                  <div className="login-options">
                    <div className="facebook-login"><p>Facebook</p></div>
                    <div className="twitter-login"><p>Twitter</p></div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
    </>
  );
});
