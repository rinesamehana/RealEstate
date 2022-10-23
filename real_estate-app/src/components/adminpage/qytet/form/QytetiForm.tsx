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
import MySelectInput from "../../../../app/common/form1/MyTextInput";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";
import { Qyteti } from "../../../../app/models/Qyteti";
import { categoryOptions } from "../../../../app/common/form1/options/CategoryOptions";
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
export default observer(function QytetiForm() {
  const history = useHistory();
  const { qytetiStore, shtetiStore } = useStore();
  const { shtetet, loadShtetet } = shtetiStore;
  const {
    selectedQytet,

    createQytet,
    updateQytetet,
    loading,
    loadQytet,
    loadingInitial,
  } = qytetiStore;
  const { qytetiId } = useParams<{ qytetiId: string }>();

  const [qyteti, setQytet] = useState({
    qytetiId: "",
    emri: "",
    kodiPostar: "",
    shtetiId: "",
  });

  const validationSchema = Yup.object({
    emri: Yup.string().required("Place is required"),
    kodiPostar: Yup.string().required("Place is required"),
    shtetiId: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (qytetiId) loadQytet(qytetiId).then((qyteti) => setQytet(qyteti!));
  }, [qytetiId, loadQytet]);

  useEffect(() => {
    loadShtetet();
  }, [loadShtetet]);

  function handleFormSubmit(qyteti: Qyteti) {
    if (qyteti.qytetiId.length === 0) {
      let newQytet = {
        ...qyteti,
        qytetiId: uuid(),
      };
      createQytet(newQytet).then(() =>
        history.push(`qyteti/${newQytet.qytetiId}`)
      );
    } else {
      updateQytetet(qyteti).then(() =>
        history.push(`/qyteti/${qyteti.qytetiId}`)
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
                      initialValues={qyteti}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          style={CardStyles}
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput name="emri" placeholder="Qyteti" />
                          <MyTextInput
                            name="kodiPostar"
                            placeholder="KodiPostar"
                          />
                          <MyTextInput name="shtetiId" placeholder="Shteti" />

                          {/* <MySelectInput
                            options={categoryOptions}
                            name="gjiniaId"
                            placeholder="Shteti"
                            label="sd"
                          /> */}

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
                            to="/qyteti"
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
