import React, { useState } from 'react'
import { useFormik } from 'formik'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import useLangContext from '../../Hooks/useLangContext'
import rightLogo from '../../assests/Register/right.png'
// Icons
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import './ContactForm.css'

const ContactForm = () => {

    const { lang, langs } = useLangContext();
    const [loading, setLoading] = useState(false);


    function handleContacting(values) {
        setLoading(true);
        console.log(values);
        setLoading(false);
    }

    let validationSchema = Yup.object({
        name: Yup.string().required("Name is Required").min(3, "Name minlength is 3 chars").max(10, "Name maxlength is 10 chars"),
        email: Yup.string().required("Email is Required").email("Invalid email address *exemple@yyy.zzz"),
        phone: Yup.string().required("Phone is required"),
        message: Yup.string().required('Please Enter description about Your Founder').min(10, 'Minlength of Founder brief 20 chars').max(200, 'Minlength of Founder brief 200 chars')
    });

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
        validationSchema,
        onSubmit: handleContacting,
    });

  return (
<>
    <form onSubmit={formik.handleSubmit}>
        <div className="col-lg-8 col-md-10 mx-auto px-md-0 px-4">
            <div className="form-floating name-input mt-5 mb-4">
                <input
                type="text"
                className="form-control w-100 "
                id="floatingName"
                name="name"
                placeholder="Name"
                required
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                />
                {/* Label */}
                <label
                className={` ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingName"
                >
                    {langs[lang].ContactForm.Name}
                </label>

                <span> <FaUser/> </span>

                {formik.errors.name && formik.touched.name ? (
                <div className="alert alert-danger error my-0 py-2">
                    {formik.errors.name}
                </div>
                ) : null}
            </div>

            <div className="form-floating mb-4 ">
                <input
                type="email"
                className="form-control w-100"
                id="floatingEmail"
                name="email"
                placeholder="Email"
                required
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                />

                <label
                className={`${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingEmail"
                >
                {langs[lang].ContactForm.Email}
                </label>

                <span> <MdEmail/> </span>

                {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-danger error my-0 py-2">
                    {formik.errors.email}
                </div>
                ) : null}
            </div>

            <div className="form-floating mb-4">
                <PhoneInput
                defaultCountry="SA"
                className="form-control"
                id="floatingPhone"
                placeholder="Phone"
                name="phone"
                onBlur={(e) => {
                    const clonedEvent = e ? Object.assign({}, e) : null; // Create a copy of the event if it's not null
                    formik.handleBlur(clonedEvent);
                }}
                value={formik.values.phone}
                onChange={(value, data, event) => {
                if (event) {
                    const clonedEvent = Object.assign({}, event); // Create a copy of the event
                    formik.handleChange(clonedEvent); // You can handle the event here
                }
                formik.setFieldValue("phone", value);
                }}
                required
                />
                {/* Label */}
                <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingPhone"
                >
                    {langs[lang].ContactForm.phone}
                </label>

                <span> <MdPhone/> </span>

                {formik.errors.phone && formik.touched.phone ? (
                <div className="alert alert-danger error my-0 py-2">
                    {formik.errors.phone}
                </div>
                ) : null}
            </div>

            <div className="form-floating mb-4">
                <textarea
                className="form-control"
                placeholder="A brief description of the Founder"
                id="floatingTextarea"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                cols={40}
                
                ></textarea>
                
                <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingTextarea"
                >
                    {langs[lang].ContactForm.Message}
                </label>

                {formik.errors.message && formik.touched.message ? (
                <div className="alert alert-danger error my-0 py-2">
                    {formik.errors.message}
                </div>
                ) : null}
            </div>
            
            <div className='submit-contact'>

                <button
                onClick={formik.handleSubmit}
                disabled={!(formik.isValid && formik.dirty)}
                className='modal-btn mb-5'
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                >
                    {langs[lang].ContactForm.send}
                </button>

            </div>

        </div>
    </form>

    {/* Done Modal */}
    <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex="-1"
    >
        <div className="modal-dialog modal-dialog-centered">

            {/* Modal Content */}
            <div className="modal-content p-5">
                <div className="modal-header text-center p-0">
                    <h2 className="modal-title" id="exampleModalToggleLabel3">
                        Your message was sent successfully,We will respond to you as soon as possible
                    </h2>

                    <img className="right-img mt-4" src={rightLogo} alt="" />
                </div>
            </div>
        </div>
    </div>


</>
  )
}

export default ContactForm