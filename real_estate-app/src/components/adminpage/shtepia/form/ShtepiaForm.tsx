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
import { Shtepia } from "../../../../app/models/Shtepia";
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
const select: CSS.Properties = {
  display:"flex",
  width: "25.5%",
  height:"40px"
};

export default observer(function ShtepiaForm() {
  const history = useHistory();
  const { shtepiaStore, lagjjaStore, qytetiStore, llojiShtepiseStore, gjendjaStore, pamjaStore, kafshetStore, stafiStore } = useStore();
  const {
    selectedShtepia,

    createShtepi,
    updateShtepi,
    loading,
    loadShtepi,
    loadingInitial,
  } = shtepiaStore;
  const { lagjet, loadLagjet } = lagjjaStore;
  // const { qytetet, loadQytetet } = qytetiStore;
  const { llojeteshtepive, loadLlojetShtepive } = llojiShtepiseStore;
  const { gjendjet, loadGjendjet } = gjendjaStore;
  const { pamjet, loadPamjet } = pamjaStore;
  const { kafshett, loadKafshett } = kafshetStore;
  const { stafii, loadStafii } = stafiStore;
  const { shtepiaId } = useParams<{ shtepiaId: string }>();

  const [shtepia, setShtepia] = useState({
    shtepiaId: "",
    photourl: "",
    titulli: "",
    cmimi: "",
    lokacioni: "",
    nrDhomave: "",
    nrBanjove: "",
    siperfaqja: "",
    pershkrimi: "",
    lagjjaId: "",
    llojiShtepiseId: "",
    gjendjaShtepiseId: "",
    pamjaId: "",
    kafshetId: "",
    stafiId: "",
  });

  const validationSchema = Yup.object({
    photourl: Yup.string().required("Place is required"),
    titulli: Yup.string().required("Place is required"),
    cmimi: Yup.string().required("Place is required"),
    lokacioni: Yup.string().required("Place is required"),
    nrDhomave: Yup.string().required("Place is required"),
    nrBanjove: Yup.string().required("Place is required"),
    siperfaqja: Yup.string().required("Place is required"),
    pershkrimi: Yup.string().required("Place is required"),
    lagjjaId: Yup.string().required("Place is required"),
    llojiShtepiseId: Yup.string().required("Place is required"),
    gjendjaShtepiseId: Yup.string().required("Place is required"),
    pamjaId: Yup.string().required("Place is required"),
    kafshetId: Yup.string().required("Place is required"),
    stafiId: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (shtepiaId)
    loadShtepi(shtepiaId).then((shtepia) => setShtepia(shtepia!));
  }, [shtepiaId, loadShtepi]);
  useEffect(() => {
    loadLagjet();
    loadLlojetShtepive();
    loadGjendjet();
    loadPamjet();
    loadKafshett();
    loadStafii();
  }, [loadLagjet, loadLlojetShtepive,loadGjendjet,loadPamjet,loadKafshett,loadStafii]);
  function handleFormSubmit(shtepia: Shtepia) {
    if (shtepia.shtepiaId.length === 0) {
      let newShtepi = {
        ...shtepia,
        shtepiaId: uuid(),
      };
      createShtepi(newShtepi).then(() =>
        history.push(`shtepia/${newShtepi.shtepiaId}`)
      );
    } else {
      updateShtepi(shtepia).then(() =>
        history.push(`/shtepia/${shtepia.shtepiaId}`)
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
                      initialValues={shtepia}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                         
                           <MyTextInput
                            name="titulli"
                            placeholder="Titulli"
                          />
                           <MyTextInput
                            name="photourl"
                            placeholder="Photourl"
                          />
                           <MyTextInput
                            name="cmimi"
                            placeholder="Cmimi"
                          />
                           <MyTextInput
                            name="lokacioni"
                            placeholder="Lokacioni"
                          />
                           <MyTextInput
                            name="nrDhomave"
                            placeholder="NrDhomave"
                          />
                           <MyTextInput
                            name="nrBanjove"
                            placeholder="NrBanjove"
                          />
                           <MyTextInput
                            name="siperfaqja"
                            placeholder="Siperfaqja"
                          />
                           <MyTextInput
                            name="pershkrimi"
                            placeholder="Pershkrimi"
                          />
                           <Field
                            style={select}
                            as="select"
                            name="lagjjaId"
                            className="Lagjja"
                          >
                            <option placeholder="Zgjedh Lagjen "></option>

                            {lagjet.map((lagjja) => (
                              <option
                                key={lagjja.lagjjaId}
                                value={lagjja.lagjjaId}
                              >
                                {lagjja.emri}
                              </option>
                            ))}
                          </Field>
                          
                          <Field
                            style={select}
                            as="select"
                            name="llojiShtepiseId"
                            className="LlojiShtepise"
                          >
                            <option placeholder="Zgjedh Lloji e Shtepise "></option>

                            {llojeteshtepive.map((llojiShtepise) => (
                              <option
                                key={llojiShtepise.llojiShtepiseId}
                                value={llojiShtepise.llojiShtepiseId}
                              >
                                {llojiShtepise.llojiiShtepise}
                              </option>
                            ))}
                          </Field>
                          <Field
                            style={select}
                            as="select"
                            name="gjendjaShtepiseId"
                            className="Gjendja"
                          >
                            <option placeholder="Zgjedh Gjendjen "></option>

                            {gjendjet.map((gjendja) => (
                              <option
                                key={gjendja.gjendjaId}
                                value={gjendja.gjendjaId}
                              >
                                {gjendja.gjendja}
                              </option>
                            ))}
                          </Field>
                          <Field
                            style={select}
                            as="select"
                            name="pamjaId"
                            className="Pamja"
                          >
                            <option placeholder="Zgjedh Pamjen "></option>

                            {pamjet.map((pamja) => (
                              <option
                                key={pamja.pamjaId}
                                value={pamja.pamjaId}
                              >
                                {pamja.pamjaa}
                              </option>
                            ))}
                          </Field>
                          <Field
                            style={select}
                            as="select"
                            name="kafshetId"
                            className="Kafshet"
                          >
                            <option placeholder="Zgjedh Lejimin e Kafsheve "></option>

                            {kafshett.map((kafshe) => (
                              <option
                                key={kafshe.kafshetId}
                                value={kafshe.kafshetId}
                              >
                                {kafshe.lejohenKafshet}
                              </option>
                            ))}
                          </Field>
                          <Field
                            style={select}
                            as="select"
                            name="stafiId"
                            className="Stafi"
                          >
                            <option placeholder="Zgjedh Stafin "></option>

                            {stafii.map((stafi) => (
                              <option
                                key={stafi.stafiId}
                                value={stafi.stafiId}
                              >
                                {stafi.emri}, {stafi.mbiemri}
                              </option>
                            ))}
                          </Field>
                          
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
                            to="/shtepia"
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
