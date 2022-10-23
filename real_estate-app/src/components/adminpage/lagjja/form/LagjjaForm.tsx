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
import { Lagjja } from "../../../../app/models/Lagjja";
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
export default observer(function LagjjaForm() {
  const history = useHistory();
  const { lagjjaStore } = useStore();
  const {
    selectedLagje,

    createLagje,
    updateLagjet,
    loading,
    loadLagje,
    loadingInitial,
  } = lagjjaStore;
  const { lagjjaId } = useParams<{ lagjjaId: string }>();

  const [lagjja, setLagje] = useState({
    lagjjaId: "",
    emri: "",
    qytetiId: "",
  });

  const validationSchema = Yup.object({
    emri: Yup.string().required("Place is required"),
    qytetiId: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (lagjjaId) loadLagje(lagjjaId).then((lagjja) => setLagje(lagjja!));
  }, [lagjjaId, loadLagje]);

  function handleFormSubmit(lagjja: Lagjja) {
    if (lagjja.lagjjaId.length === 0) {
      let newLagje = {
        ...lagjja,
        lagjjaId: uuid(),
      };
      createLagje(newLagje).then(() =>
        history.push(`lagjja/${newLagje.lagjjaId}`)
      );
    } else {
      updateLagjet(lagjja).then(() =>
        history.push(`/lagjja/${lagjja.lagjjaId}`)
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
                      initialValues={lagjja}
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
                            placeholder="Krijo Lagje..."
                          />
                          <MyTextInput
                            name="qytetiId"
                            placeholder="Qyteti..."
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
                            to="/lagjja"
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
