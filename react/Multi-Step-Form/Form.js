import React, { useState } from 'react';

const steps = [
    { id: 1, title: 'Signup Info', fields: ['Email Address', 'Password', 'Confirm Password'] },
    { id: 2, title: 'Personal Info', fields: ['User Name', 'First Name', 'Last Name'] },
    { id: 3, title: 'Professional Info', fields: ['Current Company', 'Total Experience', 'Designation'] },
    // add more steps to the form .. 
    // for example step 4 , 5 ...etc
  ];

function MultiStepForm() {
  const [activeForm, setActiveForm] = useState(1);
  const [modalActive, setModalActive] = useState(false);

  const handleNext = () => {
    if (activeForm < steps.length) {
      setActiveForm(activeForm + 1);
    }
  };

  const handleBack = () => {
    if (activeForm > 1) {
      setActiveForm(activeForm - 1);
    }
  };

  const handleDone = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <ul>
          {steps.map((step) => (
            <li key={step.id} className={`form_${step.id}_progessbar ${activeForm >= step.id ? 'active' : ''}`}>
              <div>
                <p>{step.id}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="form_wrap">
        {steps.map((step) => (
          <div key={step.id} className={`form_${step.id} data_info`} style={{ display: activeForm === step.id ? 'block' : 'none' }}>
            <h2>{step.title}</h2>
            <form>
              <div className="form_container">
                {step.fields.map((field, index) => (
                  <div key={index} className="input_wrap">
                    <label htmlFor={field}>{field}</label>
                    <input type="text" name={field} className="input" id={field} />
                  </div>
                ))}
              </div>
            </form>
          </div>
        ))}
      </div>
      <div className="btns_wrap">
        <div className={`common_btns form_${activeForm}_btns`}>
          {activeForm !== 1 && (
            <button type="button" className="btn_back" onClick={handleBack}>
              <span className="icon"><ion-icon name="arrow-back-sharp"></ion-icon></span>
              Back
            </button>
          )}
          {activeForm !== steps.length ? (
            <button type="button" className="btn_next" onClick={handleNext}>
              Next <span className="icon"><ion-icon name="arrow-forward-sharp"></ion-icon></span>
            </button>
          ) : (
            <button type="button" className="btn_done" onClick={handleDone}>
              Done
            </button>
          )}
        </div>
      </div>
      <div className={`modal_wrapper ${modalActive ? 'active' : ''}`}>
        <div className="shadow" onClick={closeModal}></div>
        <div className="success_wrap">
          <span className="modal_icon"><ion-icon name="checkmark-sharp"></ion-icon></span>
          <p>You have successfully completed the process.</p>
          <ion-icon name="close-outline" onClick={closeModal}></ion-icon>
        </div>
        
      </div>
    </div>
  );
}

export default MultiStepForm;
