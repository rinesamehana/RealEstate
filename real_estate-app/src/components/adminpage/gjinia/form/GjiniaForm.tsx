import { unstable_useId } from "@mui/material";
import "../../../../pages/dashboardpages/new/New.scss";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";

import { useStore } from "../../../../app/stores/store";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyTextInput from "../../../../app/common/form1/MyTextInput";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";
import { Gjinia } from "../../../../app/models/Gjinia";

export default observer(function GjiniaForm() {
  const history = useHistory();
  const { gjiniaStore } = useStore();
  const {
    selectedGjinia,

    createGjini,
    updateGjinia,
    loading,
    loadGjini,
    loadingInitial,
  } = gjiniaStore;
  const { id } = useParams<{ id: string }>();

  const [gjinia, setGjinia] = useState({
    gjiniaId: "",
    lloji: "",
  });

  const validationSchema = Yup.object({
    lloji: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (id) loadGjini(id).then((gjinia) => setGjinia(gjinia!));
  }, [id, loadGjini]);

  function handleFormSubmit(gjinia: Gjinia) {
    if (gjinia.gjiniaId.length === 0) {
      let newGjini = {
        ...gjinia,
        gjiniaId: uuid(),
      };
      createGjini(newGjini).then(() =>
        history.push(`gjinia/${newGjini.gjiniaId}`)
      );
    } else {
      updateGjinia(gjinia).then(() =>
        history.push(`/gjinia/${gjinia.gjiniaId}`)
      );
    }
  }

  if (loadingInitial) return <LoadingComponent content="Loading" />;
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="new">
          <div className="newContainer">
            <div className="top">
              <h1>Add/Edit</h1>
            </div>
            <div className="bottom">
              <div className="right">
                <div className="formInput">
                  <Segment clearing>
                    <Formik
                      key={gjinia.gjiniaId}
                      validationSchema={validationSchema}
                      enableReinitialize
                      initialValues={gjinia}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                        key={gjinia.gjiniaId}
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput name="lloji" placeholder="Gjinia" />
                          <Button
                            disable={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated="right"
                            positive
                            type="submit"
                            content="Submit"
                          />
                          <Button
                            as={Link}
                            to="/gjinia"
                            floated="right"
                            type="button"
                            content="Cancel"
                          />
                        </Form>
                      )}
                    </Formik>
                  </Segment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
