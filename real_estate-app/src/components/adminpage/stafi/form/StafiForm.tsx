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
import { Stafi } from "../../../../app/models/Stafi";
import CSS from "csstype";

const CardStyles: CSS.Properties = {
  width: "100%",

  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop: "20px",
  marginBottom: "20px",
  textAlign: "center",
};
export default observer(function StafiForm() {
  const history = useHistory();
  const { stafiStore } = useStore();
  const {
    selectedStafi,

    createStafi,
    updateStafi,
    loading,
    loadStafi,
    loadingInitial,
  } = stafiStore;
  const { stafiId } = useParams<{ stafiId: string }>();

  const [stafi, setStafi] = useState({
    stafiId: "",
    emri: "",
    mbiemri: "",
    email: "",
    nrTelefonit: "",
    roliId: "",
    llojiUserId: "",
    kohaId: "",
    gjiniaId: "",
    qytetiId: "",
    shtetiId: "",
    adresa: "",
  });

  const validationSchema = Yup.object({
    emri: Yup.string().required("Place is required"),
    mbiemri: Yup.string().required("Place is required"),
    email: Yup.string().required("Place is required"),
    nrTelefonit: Yup.string().required("Place is required"),
    roliId: Yup.string().required("Place is required"),
    llojiUserId: Yup.string().required("Place is required"),
    kohaId: Yup.string().required("Place is required"),
    gjiniaId: Yup.string().required("Place is required"),
    qytetiId: Yup.string().required("Place is required"),
    shtetiId: Yup.string().required("Place is required"),
    adresa: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (stafiId) loadStafi(stafiId).then((stafi) => setStafi(stafi!));
  }, [stafiId, loadStafi]);

  function handleFormSubmit(stafi: Stafi) {
    if (stafi.stafiId.length === 0) {
      let newStafi = {
        ...stafi,
        stafiId: uuid(),
      };
      createStafi(newStafi).then(() =>
        history.push(`Stafi/${newStafi.stafiId}`)
      );
    } else {
      updateStafi(stafi).then(() => history.push(`/Stafi/${stafi.stafiId}`));
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
                      initialValues={stafi}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          style={CardStyles}
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput name="emri" placeholder="Emri" />
                          <MyTextInput name="mbiemri" placeholder="Mbiemri" />
                          <MyTextInput name="email" placeholder="Email" />
                          <MyTextInput
                            name="nrTelefonit"
                            placeholder="NrTelefonit"
                          />
                          <MyTextInput name="roliId" placeholder="RoliId" />
                          <MyTextInput
                            name="llojiUserId"
                            placeholder="LlojiUserId"
                          />
                          <MyTextInput name="kohaId" placeholder="KohaId" />
                          <MyTextInput name="gjiniaId" placeholder="GjiniaId" />
                          <MyTextInput name="qytetiId" placeholder="QytetiId" />
                          <MyTextInput name="shtetiId" placeholder="ShtetiId" />
                          <MyTextInput name="adresa" placeholder="Adresa" />
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
                            to="/Stafi"
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
