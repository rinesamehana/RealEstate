

import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField, Item, Label, Segment, Select } from "semantic-ui-react";

import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useStore } from "../../app/stores/store";

import Navbar from "../../components/navbar/Navbar";
import MyTextInput from "../../app/common/form1/MyTextInput";
import { Rezervimi } from "../../app/models/Rezervimi";
import { MyNewSelect } from "../../app/common/form1/MyNewSelect";
import CSS from "csstype";
const LabelStyle: CSS.Properties = {
  width: "310px",
  padding: "10px",
marginBottom:"15px",

height:"50px",

};


export default observer(function RezrvimiForm() {
    const { rezervimiStore } = useStore();
    const { createRezervimin, updateRezervimin, loading ,loadRezervimin} = rezervimiStore;


    const history = useHistory();
  const { rezervimiId } = useParams<{ rezervimiId: string }>();

  const [rezervimi, setRezervimi] = useState({
    rezervimiId: '',
    check_in: '',
    check_out: '',
    nrPersonave : '',
    pagesa:'',
    kontrata:''
  
  });

  const validationSchema = Yup.object({
    check_in: Yup.string().required('Data eshte e zbrazet!'),
    check_out: Yup.string().required('Data eshte e zbrazet!'),
    nrPersonave: Yup.string().required('Numri i personave eshte i zbrazet!'),
    pagesa: Yup.string().required('Mesazhi eshte i zbrazet!'),
    kontrata: Yup.string().required('Mesazhi eshte i zbrazet!'),
 });


 useEffect(() => {
  if (rezervimiId) loadRezervimin(rezervimiId).then(rezervimi => setRezervimi(rezervimi!))
}, [rezervimiId, loadRezervimin]);

 
    function handleFormSubmit(rezervimi: Rezervimi) {
      if (rezervimi.rezervimiId.length === 0) {
        let newRezrvim = {
          ...rezervimi,
          rezervimiId: uuid(),
        };
        createRezervimin(newRezrvim).then(() =>
   
        history.push(`/rezervimi`) 
        
      );     alert('Rezervimi u krijua me sukses!')
      } else {
        updateRezervimin(rezervimi).then(() => history.push(`/rezervimi/${rezervimi.rezervimiId}`));
      }
    }

    const options=[
      {value:"E-banking", desc:"E-banking"},
      {value:"Cash", desc:"Cash"},
      {value:"Crypto", desc:"Crypto"},

    ]
    const optionss=[
      {value:"None", desc:"None"},
      {value:"One Month Contract", desc:"One Month Contract"},
      {value:"Six Month Contract", desc:"Six Month Contract"},
      {value:"One Year Contract", desc:"One Year Contract"},


    ]
  


  return (


      <div className="newContainer">
        <Navbar />      
        <div className="new">
          <div className="newContainer">
            <div className="top">
              <h1>Book your favorite house</h1>
            </div>
            <div className="bottom">
              <div className="right">
                <div className="formInput">
                  <Segment clearing>
                    <Formik
                      key={rezervimi.rezervimiId}
                      validationSchema={validationSchema}
                      enableReinitialize
                      initialValues={rezervimi}
                      onSubmit={(value) => handleFormSubmit(value)}
                    >
                      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form
                        key={rezervimi.rezervimiId}
                          className="ui-form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <Field style={LabelStyle} type='date' name="check_in" className='form-control' /><br/>
                          <Field style={LabelStyle} type='date' name="check_out" className='form-control' />
                            <MyTextInput name='nrPersonave' placeholder='Nr. Personave' />

                            <MyNewSelect options={options} name="pagesa" label={""} />
                            <MyNewSelect options={optionss} name="kontrata" label={""} />
                            {/* <MyTextInput name='pagesa' placeholder='Pagesa' /> */}
                          <Button
                            disable={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated="right"
                            positive
                            inverted
                            type="submit"
                            content="Submit"
                          />
                          <Button
                            as={Link}
                            to="/"
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

  );
});
