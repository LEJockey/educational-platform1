import React, { useState } from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import useLangContext from '../../../Hooks/useLangContext';
import './BlogContact.css'

const BlogContact = () => {

    const { lang, langs } = useLangContext();
    const [loading, setLoading] = useState(false)
    const [submissionStatus, setSubmissionStatus] = useState(false);

    function handleContact(values) {
        setLoading(true)
        console.log(values)
        setLoading(false)
    }

    let validationSchema = Yup.object({
        name: Yup.string().required("Name is Required").min(3, "Name minlength is 3 chars").max(20, "Name maxlength is 20 chars"),
        email: Yup.string().required("Email is Required").email("Invalid email address"),
        message: Yup.string().required('Please Enter Your Message')
    });

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: '',
        },
        validationSchema,
        onSubmit: handleContact,
        });

return (
    <div className='blog-box blog-contact overflow-x-hidden'>

        <h3>Get in Touch</h3>

        <form onSubmit={handleContact}>
            
            {/* Name Input */}
            <div className="form-floating mb-4 ">

                <input
                type="text"
                className="form-control"
                id="floatingName"
                name="name"
                placeholder='name'
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                required
                />

                {/* Label */}
                <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingName"
                >
                    {langs[lang].ContactForm.Name}
                </label>

                {formik.errors.name && formik.touched.name ? (
                    <div className="alert alert-danger error my-0 py-2">
                        {formik.errors.name}
                    </div>
                ) : null}

            </div>

            {/* Email Imput */}
            <div className="form-floating mb-4 ">

                <input
                type="Email"
                className="form-control"
                id="floatingEmail"
                name="email"
                placeholder='Email'
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                required
                />

                {/* Label */}
                <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingEmail"
                >
                    {langs[lang].ContactForm.Email}
                </label>

                {formik.errors.email && formik.touched.email ? (
                    <div className="alert alert-danger error my-0 py-2">
                        {formik.errors.email}
                    </div>
                ) : null}

            </div>

            <div className="form-floating mb-4">
                <textarea
                className="form-control"
                placeholder="Message"
                id="floatingTextarea"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                cols={40}
                >

                </textarea>
                
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


            <div className="text-center">
                    <button 
                    type="submit"
                    className="modal-btn" 
                    onClick={handleContact}
                    disabled={!(formik.isValid && formik.dirty)}
                    >
                        {langs[lang].ContactForm.send}
                    </button>
                </div>




        </form>
    </div>
)
}

export default BlogContact