import { unstable_useId } from "@mui/material";
import "../../../../pages/dashboardpages/new/New.scss";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/axios/LoadingComponent";
import { Pajisja } from "../../../../app/models/Pajisja";
import { useStore } from "../../../../app/stores/store";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyTextInput from "../../../../app/common/form1/MyTextInput";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar2";

export default observer(function PajisjaForm() {
  const history = useHistory();
  const { pajisjaStore } = useStore();
  const {
    selectedPajisje,

    createPajisje,
    updatePajisjet,
    loading,
    loadPajisje,
    loadingInitial,
  } = pajisjaStore;
  const { pajisjaId } = useParams<{ pajisjaId: string }>();

  const [pajisja, setPajisja] = useState({
    pajisjaId: "",
    llojiPajisjes: "",
  });

  const validationSchema = Yup.object({
    llojiPajisjes: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (pajisjaId)
      loadPajisje(pajisjaId).then((pajisja) => setPajisja(pajisja!));
  }, [pajisjaId, loadPajisje]);

  function handleFormSubmit(pajisja: Pajisja) {
    if (pajisja.pajisjaId.length === 0) {
      let newPajisje = {
        ...pajisja,
        pajisjaId: uuid(),
      };
      createPajisje(newPajisje).then(() =>
        history.push(`pajisja/${newPajisje.pajisjaId}`)
      );
    } else {
      updatePajisjet(pajisja).then(() =>
        history.push(`/pajisja/${pajisja.pajisjaId}`)
      );
    }
  }

  // function handleFormSubmit(pajisja: pajisja) {
  //   if (pajisjaId) {
  //     updatePajisjeet(pajisja).then(() => history.push("/pajisja"));
  //   } else {
  //     createPajisje(pajisja).then(() => history.push("/pajisja"));
  //   }
  // }

  // function handleInputChange(
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   const { name, value } = event.target;
  //   setpajisja({ ...pajisja, [name]: value });
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
                      initialValues={pajisja}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput
                            name="llojiPajisjes"
                            placeholder="Krijo Pajisjen..."
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
                            to="/pajisja"
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
