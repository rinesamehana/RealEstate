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
import { Kontrata } from "../../../../app/models/Kontrata";

export default observer(function KontrataForm() {
  const history = useHistory();
  const { kontrataStore } = useStore();
  const {
    selectedKontrat,
    createKontrat,
    updateKontrat,
    loading,
    loadKontrat,
    loadingInitial,
  } = kontrataStore;
  const { kontrataId } = useParams<{ kontrataId: string }>();

  const [kontrata, setKontrat] = useState({
    kontrataId: "",
    llojiKontrates: "",
  });

  const validationSchema = Yup.object({
    llojiKontrates: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (kontrataId)
      loadKontrat(kontrataId).then((kontrata) => setKontrat(kontrata!));
  }, [kontrataId, loadKontrat]);

  function handleFormSubmit(kontrata: Kontrata) {
    if (kontrata.kontrataId.length === 0) {
      let newKontrat = {
        ...kontrata,
        kontrataId: uuid(),
      };
      createKontrat(newKontrat).then(() =>
        history.push(`kontrata/${newKontrat.kontrataId}`)
      );
    } else {
      updateKontrat(kontrata).then(() =>
        history.push(`/kontrata/${kontrata.kontrataId}`)
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
                      initialValues={kontrata}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput
                            name="llojiKontrates"
                            placeholder="Kontrata"
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
                            to="/kontrata"
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
