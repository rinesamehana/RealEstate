import { unstable_useId } from "@mui/material";
import "../../../../pages/dashboardpages/new/New.scss";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { LlojiUserit } from "../../../../app/models/LlojiUserit";
import { useStore } from "../../../../app/stores/store";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyTextInput from "../../../../app/common/form1/MyTextInput";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";

export default observer(function LlojiUseritForm() {
  const history = useHistory();
  const { llojiUserStore } = useStore();
  const {
    selectedLlojiUseri,
    createLlojUseri,
    updateLlojUser,
    loading,
    loadLlojUseri,
    loadingInitial,
  } = llojiUserStore;
  const { llojiUserId } = useParams<{ llojiUserId: string }>();

  const [llojiUserit, setLlojetUserit] = useState({
    llojiUserId: "",
    lloji: "",
  });

  const validationSchema = Yup.object({
    lloji: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (llojiUserId)
      loadLlojUseri(llojiUserId).then((llojiUserit) =>
        setLlojetUserit(llojiUserit!)
      );
  }, [llojiUserId, loadLlojUseri]);

  function handleFormSubmit(llojiUserit: LlojiUserit) {
    if (llojiUserit.llojiUserId.length === 0) {
      let newLlojUser = {
        ...llojiUserit,
        llojiUserId: uuid(),
      };
      createLlojUseri(newLlojUser).then(() =>
        history.push(`llojiUser/${newLlojUser.llojiUserId}`)
      );
    } else {
      updateLlojUser(llojiUserit).then(() =>
        history.push(`/llojiUser/${llojiUserit.llojiUserId}`)
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
                      validationSchema={validationSchema}
                      enableReinitialize
                      initialValues={llojiUserit}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput name="lloji" placeholder="User" />
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
                            to="/llojiUser"
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
