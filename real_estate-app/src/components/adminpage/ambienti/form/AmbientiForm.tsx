import { unstable_useId } from "@mui/material";
import "../../../../pages/dashboardpages/new/New.scss";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { Ambienti } from "../../../../app/models/Ambienti";
import { useStore } from "../../../../app/stores/store";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyTextInput from "../../../../app/common/form1/MyTextInput";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";


export default observer(function AmbientiForm() {
  const history = useHistory();
  const { ambientiStore } = useStore();
  const {
    selectedAmbient,

    createAmbient,
    updateAmbientet,
    loading,
    loadAmbient,
    loadingInitial,
  } = ambientiStore;
  const { ambientiId } = useParams<{ ambientiId: string }>();

  const [ambienti, setAmbienti] = useState({
    ambientiId: "",
    llojiAmbient: "",
  });

  const validationSchema = Yup.object({
    llojiAmbient: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (ambientiId)
      loadAmbient(ambientiId).then((ambienti) => setAmbienti(ambienti!));
  }, [ambientiId, loadAmbient]);

  function handleFormSubmit(ambienti: Ambienti) {
    if (ambienti.ambientiId.length === 0) {
      let newAmbient = {
        ...ambienti,
        ambientiId: uuid(),
      };
      createAmbient(newAmbient).then(() =>
        history.push(`ambienti/${newAmbient.ambientiId}`)
      );
    } else {
      updateAmbientet(ambienti).then(() =>
        history.push(`/ambienti/${ambienti.ambientiId}`)
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
                      initialValues={ambienti}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput
                            name="llojiAmbient"
                            placeholder="Ambienti"
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
                            to="/ambienti"
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
