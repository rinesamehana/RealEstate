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
import { Shteti } from "../../../../app/models/Shteti";
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
export default observer(function ShtetiForm() {
  const history = useHistory();
  const { shtetiStore } = useStore();
  const {
    selectedShteti,

    createShtet,
    updateShtet,
    loading,
    loadShtet,
    loadingInitial,
  } = shtetiStore;
  const { shtetiId } = useParams<{ shtetiId: string }>();

  const [shteti, setShteti] = useState({
    shtetiId: "",
    emri: "",
    shkurtesa: "",
  });

  const validationSchema = Yup.object({
    emri: Yup.string().required("Place is required"),
    shkurtesa: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (shtetiId) loadShtet(shtetiId).then((shteti) => setShteti(shteti!));
  }, [shtetiId, loadShtet]);

  function handleFormSubmit(shteti: Shteti) {
    if (shteti.shtetiId.length === 0) {
      let newShtet = {
        ...shteti,
        shtetiId: uuid(),
      };
      createShtet(newShtet).then(() =>
        history.push(`shteti/${newShtet.shtetiId}`)
      );
    } else {
      updateShtet(shteti).then(() =>
        history.push(`/shteti/${shteti.shtetiId}`)
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
                      initialValues={shteti}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          style={CardStyles}
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput
                            name="emri"
                            placeholder="Krijo Shtet..."
                          />
                          <MyTextInput
                            name="shkurtesa"
                            placeholder="Shkurtesa..."
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
                            to="/shteti"
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
