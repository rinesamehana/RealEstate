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
import { MenyraePageses } from "../../../../app/models/MenyraPageses";

export default observer(function MenyraPagesesForm() {
  const history = useHistory();
  const { menyraPagesesStore } = useStore();
  const {
    selectedMenyraPageses,

    createMenyrPagese,
    updateMenyrPagese,
    loading,
    loadMenyrPagese,
    loadingInitial,
  } = menyraPagesesStore;
  const { menyraPagesesId } = useParams<{ menyraPagesesId: string }>();

  const [menyraPageses, setMenyraPageses] = useState({
    menyraPagesesId: "",
    menyraePageses: "",
  });

  const validationSchema = Yup.object({
    menyraePageses: Yup.string().required("Place is required"),
  });
  useEffect(() => {
    if (menyraPagesesId)
      loadMenyrPagese(menyraPagesesId).then((menyraPageses) =>
        setMenyraPageses(menyraPageses!)
      );
  }, [menyraPagesesId, loadMenyrPagese]);

  function handleFormSubmit(menyraePageses: MenyraePageses) {
    if (menyraePageses.menyraPagesesId.length === 0) {
      let newMenyraPageses = {
        ...menyraePageses,
        menyraPagesesId: uuid(),
      };
      createMenyrPagese(newMenyraPageses).then(() =>
        history.push(`MenyraPageses/${newMenyraPageses.menyraPagesesId}`)
      );
    } else {
      updateMenyrPagese(menyraePageses).then(() =>
        history.push(`/MenyraPageses/${menyraPageses.menyraPagesesId}`)
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
                      initialValues={menyraPageses}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <MyTextInput
                            name="menyraePageses"
                            placeholder="MenyraPageses"
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
                            to="/MenyraPageses"
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
