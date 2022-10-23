import "./New.scss";

import Sidebar from "../../../components/adminpage/sidebar/Sidebar";
import Navbar from "../../../components/adminpage/navbar/Navbar2";

import React, { ChangeEvent, useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Gjinia } from "../../../app/models/Gjinia";

interface Props {
  gjinia: Gjinia | undefined;
  closeForm: () => void;
  createOrEdit: (gjinia: Gjinia) => void;
  submitting: boolean;
}
export default function New({
  gjinia: selectedGjini,
  closeForm,
  createOrEdit,
  submitting,
}: Props) {
  const initialState = selectedGjini ?? {
    gjiniaId: "",
    lloji: "",
  };

  const [gjinia, setGjinia] = useState(initialState);

  function handleSubmit() {
    createOrEdit(gjinia);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setGjinia({ ...gjinia, [name]: value });
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new</h1>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
            <form>
              <div className="formInput">
                <Segment clearing>
                  <Form onSubmit={handleSubmit} autoComplete="off">
                    <Form.Input
                      placeholder="Lloji"
                      value={gjinia.lloji}
                      name="lloji"
                      onChange={handleInputChange}
                    />
                    <Form.Input placeholder="Desc" />
                    {/* <Form.Input placeholder="Title" />
        <Form.Input placeholder="Title" /> */}
                    <Button
                      loading={submitting}
                      floated="right"
                      positive
                      type="submit"
                      content="Submit"
                    />
                    <Button
                      onClick={closeForm}
                      floated="right"
                      positive
                      type="button"
                      content="Cancel"
                    />
                  </Form>
                </Segment>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
