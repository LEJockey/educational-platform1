import React, { useState } from "react";
import reImg from "../../assests/Register/hero image.png";
import ImageComp from "../../Components/ImageComp/ImageComp";
import useLangContext from "../../Hooks/useLangContext";
import "./Register.css";
import SingleStepForm from "../../Components/RegisterComponents/SinleStepForm/SingleStepForm";
import FounderStepForm from '../../Components/RegisterComponents/FounderStepForm/FounderStepForm';

const Register = () => {
  const { lang, langs } = useLangContext();
  const [singleForm, setSingleForm] = useState(true);
  const [multiForm, setMultiForm] = useState(false);

  return (
    <section className="register">
      <div className="container-lg px-3 px-sm-5 px-lg-0">
        <div className="row">
          {/* Register Image */}
          <div className="col-lg-6 p-0  register-img">
            <ImageComp src={reImg} alt="Register Now" />
          </div>

          {/* Slider Form */}
          <div className="col-lg-6 p-0 pt-5 pt-lg-0 position-relative bg-white register-forms">
            <div className="select-form">
              <button
                onClick={(e) => {
                  setSingleForm(true);
                  setMultiForm(false);
                }}
                className={`show-form1 ${singleForm ? "active" : ""}`}
              >
                Sign Up
              </button>

              <button
                onClick={(e) => {
                  setSingleForm(false);
                  setMultiForm(true);
                }}
                className={`show-form2 ${multiForm ? "active" : ""}`}
              >
                Sign Up As a founder
              </button>
            </div>

            {singleForm && <SingleStepForm />}

            {multiForm && <FounderStepForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
