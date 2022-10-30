import { unstable_useId } from "@mui/material";
import "../../../../pages/dashboardpages/new/New.scss";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { Gjendja } from "../../../../app/models/Gjendja";
import { useStore } from "../../../../app/stores/store";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyTextInput from "../../../../app/common/form1/MyTextInput";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";

export default observer(function GjendjaForm() {
  const history = useHistory();
  const { gjendjaStore } = useStore();
  const {
    selectedGjendje,

    createGjendje,
    updateGjendjet,
    loading,
    loadGjendje,
    loadingInitial,
  } = gjendjaStore;
  const { gjendjaId } = useParams<{ gjendjaId: string }>();

  const [gjendja, setGjendja] = useState({
    gjendjaId: "",
    gjendja: "",
  });

  const validationSchema = Yup.object({
    gjendja: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (gjendjaId)
      loadGjendje(gjendjaId).then((gjendja) => setGjendja(gjendja!));
  }, [gjendjaId, loadGjendje]);

  function handleFormSubmit(gjendja: Gjendja) {
    if (gjendja.gjendjaId.length === 0) {
      let newGjendje = {
        ...gjendja,
        gjendjaId: uuid(),
      };
      createGjendje(newGjendje).then(() =>
        history.push(`gjendja/${newGjendje.gjendjaId}`)
      );
    } else {
      updateGjendjet(gjendja).then(() =>
        history.push(`/gjendja/${gjendja.gjendjaId}`)
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
                     key={gjendja.gjendjaId}
                      validationSchema={validationSchema}
                      enableReinitialize
                      initialValues={gjendja}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                        key={gjendja.gjendjaId}
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput  key={gjendja.gjendjaId} name="gjendja" placeholder="Gjendja" />
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
                            to="/gjendja"
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
