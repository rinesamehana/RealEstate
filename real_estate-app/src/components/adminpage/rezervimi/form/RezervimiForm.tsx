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
import CSS from "csstype";

const select: CSS.Properties = {
  display:"flex",
  width: "25.5%",
  height:"40px"
};
const CardStyles1: CSS.Properties = {
  marginLeft: "20px",
  width: "220px",
  height: "30px",
  marginBottom:"5px",

};
const CardStyles2: CSS.Properties = {
  marginLeft: "10px",
  marginBottom:"5px",
  width: "220px",
  height: "30px"

};


export default observer(function RezervimiForm() {
  const history = useHistory();
  const { rezervimiStore, shtepiaStore, kontrataStore, menyraPagesesStore } = useStore();
  const {
    selectedRezervimi,

    createRezervimin,
    updateRezervimin,
    loading,
    loadRezervimin,
    loadingInitial,
  } = rezervimiStore;
  const { rezervimiId } = useParams<{ rezervimiId: string }>();
  const { shtepiat, loadShtepite } = shtepiaStore;
  const { menyratPageses, loadMenyratPageses } = menyraPagesesStore;
  const { kontratat, loadKontratat } = kontrataStore;
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
useEffect(()=>{
  loadKontratat();
    loadShtepite();
    loadMenyratPageses();
}, [loadKontratat,loadMenyratPageses, loadShtepite])
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
                        ><span>Check_In: </span>
                          <Field type='date' style={CardStyles1} name="check_in" className='check_in' />
                          <br/>   
                          <span >Check_Out: </span>
                          <Field type='date' style={CardStyles2} name="check_out" className='check_out' />
                           {/* <MyTextInput
                            name="check_in"
                            placeholder="CheckIn"
                          />
                           <MyTextInput
                            name="check_out"
                            placeholder="CheckOut"
                          /> */}
                          
                           <Field
                            style={select}
                            as="select"
                            name="shtepiaId"
                            className="Shtepia"
                          >
                            <option placeholder="Zgjedh Shtepine "></option>

                            {shtepiat.map((shtepia) => (
                              <option
                                key={shtepia.shtepiaId}
                                value={shtepia.shtepiaId}
                              >
                                {shtepia.titulli}
                              </option>
                            ))}
                          </Field>
                          <Field
                            style={select}
                            as="select"
                            name="menyraPagesesId"
                            className="MenyraPageses"
                          >
                            <option placeholder="Zgjedh Menyren e Pageses "></option>

                            {menyratPageses.map((menyraPageses) => (
                              <option
                                key={menyraPageses.menyraPagesesId}
                                value={menyraPageses.menyraPagesesId}
                              >
                                {menyraPageses.menyraePageses}
                              </option>
                            ))}
                          </Field>
                          <Field
                            style={select}
                            as="select"
                            name="kontrataId"
                            className="Kontrata"
                          >
                            <option placeholder="Zgjedh Kontraten "></option>

                            {kontratat.map((kontrata) => (
                              <option
                                key={kontrata.kontrataId}
                                value={kontrata.kontrataId}
                              >
                                {kontrata.llojiKontrates}
                              </option>
                            ))}
                          </Field>
                          
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
