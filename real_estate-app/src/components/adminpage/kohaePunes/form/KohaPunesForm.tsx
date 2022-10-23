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
import { KohaPunes } from "../../../../app/models/KohaPunes";
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
export default observer(function KohaPunesForm() {
  const history = useHistory();
  const { kohaPunesStore } = useStore();
  const {
    selectedKohaPunes,

    createkohePune,
    updatekohePune,
    loading,
    loadkohePune,
    loadingInitial,
  } = kohaPunesStore;
  const { kohaId } = useParams<{ kohaId: string }>();

  const [kohaPunes, setKohaPunes] = useState({
    kohaId: "",
    kohaEPuness: "",
    koha: "",
  });

  const validationSchema = Yup.object({
    kohaEPuness: Yup.string().required("Place is required"),
    koha: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (kohaId)
      loadkohePune(kohaId).then((kohaPunes) => setKohaPunes(kohaPunes!));
  }, [kohaId, loadkohePune]);

  function handleFormSubmit(kohaPunes: KohaPunes) {
    if (kohaPunes.kohaId.length === 0) {
      let newKohePune = {
        ...kohaPunes,
        kohaId: uuid(),
      };
      createkohePune(newKohePune).then(() =>
        history.push(`KohaPunes/${newKohePune.kohaId}`)
      );
    } else {
      updatekohePune(kohaPunes).then(() =>
        history.push(`/KohaPunes/${kohaPunes.kohaId}`)
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
                      initialValues={kohaPunes}
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
                            name="kohaEPuness"
                            placeholder="Krijo Orar Pune..."
                          />
                          <MyTextInput
                            name="koha"
                            placeholder="Kohezgjatja Punes..."
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
                            to="/KohaPunes"
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
