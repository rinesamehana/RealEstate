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
import { LlojiShtepise } from "../../../../app/models/LlojiShtepise";

export default observer(function LlojiShtepiseForm() {
  const history = useHistory();
  const { llojiShtepiseStore } = useStore();
  const {
    selectedLlojiShtepise,

    createLlojShtepie,
    updateLlojShtepie,
    loading,
    loadLlojShtepie,
    loadingInitial,
  } = llojiShtepiseStore;
  const { llojiShtepiseId } = useParams<{ llojiShtepiseId: string }>();

  const [llojiShtepise, setLlojiShtepise] = useState({
    llojiShtepiseId: "",
    llojiiShtepise: "",
  });

  const validationSchema = Yup.object({
    llojiiShtepise: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (llojiShtepiseId)
      loadLlojShtepie(llojiShtepiseId).then((llojiShtepise) =>
        setLlojiShtepise(llojiShtepise!)
      );
  }, [llojiShtepiseId, loadLlojShtepie]);

  function handleFormSubmit(llojiShtepise: LlojiShtepise) {
    if (llojiShtepise.llojiShtepiseId.length === 0) {
      let newLlojiShtepise = {
        ...llojiShtepise,
        llojiShtepiseId: uuid(),
      };
      createLlojShtepie(newLlojiShtepise).then(() =>
        history.push(`LlojiShtepise/${newLlojiShtepise.llojiShtepiseId}`)
      );
    } else {
      updateLlojShtepie(llojiShtepise).then(() =>
        history.push(`/LlojiShtepise/${llojiShtepise.llojiShtepiseId}`)
      );
    }
  }

  // function handleFormSubmit(ambienti: Ambienti) {
  //   if (ambientiId) {
  //     updateAmbientet(ambienti).then(() => history.push("/ambienti"));
  //   } else {
  //     createAmbient(ambienti).then(() => history.push("/ambienti"));
  //   }
  // }

  // function handleInputChange(
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   const { name, value } = event.target;
  //   setAmbienti({ ...ambienti, [name]: value });
  // }

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
                      validationSchema={validationSchema}
                      enableReinitialize
                      initialValues={llojiShtepise}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput
                            name="llojiiShtepise"
                            placeholder="Lloji Shtepise"
                          />
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
                            to="/LlojiShtepise"
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
