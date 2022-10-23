import { unstable_useId } from "@mui/material";
import "../../../../pages/dashboardpages/new/New.scss";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { Pamja } from "../../../../app/models/Pamja";
import { useStore } from "../../../../app/stores/store";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyTextInput from "../../../../app/common/form1/MyTextInput";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";

export default observer(function PamjaForm() {
  const history = useHistory();
  const { pamjaStore } = useStore();
  const {
    selectedPamje,

    createPamje,
    updatePamjet,
    loading,
    loadPamje,
    loadingInitial,
  } = pamjaStore;
  const { pamjaId } = useParams<{ pamjaId: string }>();

  const [pamja, setPamja] = useState({
    pamjaId: "",
    pamjaa: "",
  });

  const validationSchema = Yup.object({
    pamjaa: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (pamjaId) loadPamje(pamjaId).then((pamja) => setPamja(pamja!));
  }, [pamjaId, loadPamje]);

  function handleFormSubmit(pamja: Pamja) {
    if (pamja.pamjaId.length === 0) {
      let newPamje = {
        ...pamja,
        pamjaId: uuid(),
      };
      createPamje(newPamje).then(() =>
        history.push(`pamja/${newPamje.pamjaId}`)
      );
    } else {
      updatePamjet(pamja).then(() => history.push(`/pamja/${pamja.pamjaId}`));
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
                      validationSchema={validationSchema}
                      enableReinitialize
                      initialValues={pamja}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput name="pamjaa" placeholder="Pamja" />
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
                            to="/pamja"
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
