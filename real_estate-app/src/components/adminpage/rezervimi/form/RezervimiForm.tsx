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
import { Rezervimi } from "../../../../app/models/Rezervimi";


export default observer(function RezervimiForm() {
  const history = useHistory();
  const { rezervimiStore } = useStore();
  const {
    selectedRezervimi,

    createRezervimin,
    updateRezervimin,
    loading,
    loadRezervimin,
    loadingInitial,
  } = rezervimiStore;
  const { rezervimiId } = useParams<{ rezervimiId: string }>();

  const [rezervimi, setRezervimin] = useState({
    rezervimiId: "",
    check_in: "",
    check_out: "",
    shtepiaId: "",
    menyraPagesesId: "",
    kontrataId: "",
 
  });

  const validationSchema = Yup.object({
    check_in: Yup.string().required("Place is required"),
    check_out: Yup.string().required("Place is required"),
    shtepiaId: Yup.string().required("Place is required"),
    menyraPagesesId: Yup.string().required("Place is required"),
    kontrataId: Yup.string().required("Place is required"),
  
  });
  useEffect(() => {
    if (rezervimiId)
    loadRezervimin(rezervimiId).then((rezervimi) => setRezervimin(rezervimi!));
  }, [rezervimiId, loadRezervimin]);

  function handleFormSubmit(rezervimi: Rezervimi) {
    if (rezervimi.rezervimiId.length === 0) {
      let newRezervim = {
        ...rezervimi,
        rezervimiId: uuid(),
      };
      createRezervimin(newRezervim).then(() =>
        history.push(`rezervimi/${newRezervim.rezervimiId}`)
      );
    } else {
      updateRezervimin(rezervimi).then(() =>
        history.push(`/rezervimi/${rezervimi.rezervimiId}`)
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
                      initialValues={rezervimi}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                       
                           <MyTextInput
                            name="check_in"
                            placeholder="CheckIn"
                          />
                           <MyTextInput
                            name="check_out"
                            placeholder="CheckOut"
                          />
                           <MyTextInput
                            name="shtepiaId"
                            placeholder="Shtepia"
                          />
                           <MyTextInput
                            name="menyraPagesesId"
                            placeholder="Pagesa"
                          />
                           <MyTextInput
                            name="kontrataId"
                            placeholder="Kontrata"
                          />
                           {/* <MyTextInput
                            name="appUserId"
                            placeholder="AppUser"
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
                            to="/rezervimi"
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
