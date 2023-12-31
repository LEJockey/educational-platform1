import React, { useState } from 'react'
import useLangContext from './../../../Hooks/useLangContext';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { GrStatusGood } from "react-icons/gr";
import './commentForm.css'

const CommentForm = () => {

    const { lang, langs } = useLangContext();
    const [loading, setLoading] = useState(false)
    const [submissionStatus, setSubmissionStatus] = useState(false);


    function addComment(values) {
        setLoading(true)
        console.log(values)
        setLoading(false)
    }


    let validationSchema = Yup.object({
        name: Yup.string().required("Name is Required").min(3, "Name minlength is 3 chars").max(20, "Name maxlength is 20 chars"),
        email: Yup.string().required("Email is Required").email("Invalid email address *exemple@yyy.zzz"),
        phone: Yup.string().required("Phone is required"),
        comment: Yup.string().required('Please Enter Your Comment')
    });

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: '',
        },
        validationSchema,
        onSubmit: addComment,
        });

return (
    <div className='comment-form'>
        <h3>Write your comment </h3>

        <form onSubmit={addComment} className="row p-0" >
                {/* Name Input */}
                <div className="form-floating mb-4 col-md-6 px-md-1 px-0">

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
                <div className="form-floating mb-4 col-md-6 px-md-1 px-0">

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

                {/* Phone Input  */}
                <div className="form-floating mb-4 col-md-6 px-md-1 px-0">

                    <input
                    type="tel"
                    className="form-control"
                    id="floatingPhone"
                    name="phone"
                    placeholder='Phone'
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    required
                    />
                    
                    {/* Label */}
                    <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingPhone"
                    >
                        {langs[lang].ContactForm.Phone}
                    </label>

                    {formik.errors.phone && formik.touched.phone ? (
                        <div className="alert alert-danger error my-0 py-2">
                            {formik.errors.phone}
                        </div>
                    ) : null}

                </div>

                {/* Comment Input */}
                <div className="form-floating mb-4 col-12 px-0 px-md-1">
                    <textarea
                    className="form-control"
                    placeholder="Leave your commment here"
                    id="floatingTextarea"
                    name="comment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                    cols={40}
                    ></textarea>

                    <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingTextarea"
                    >
                        {langs[lang].ContactForm.comment}
                    </label>

                    {formik.errors.comment && formik.touched.comment ? (
                        <div className="alert alert-danger error my-0 py-2">
                            {formik.errors.comment}
                        </div>
                    ) : null}
                </div>


                {/* Save My Data (check Box) */}
                <div className="col-12 mt-3 mb-4 d-flex align-items-center justify-content-center">
                    <input className='checkbox' type="checkbox" name='remember' value= 'value' id='remember' />
                    <label className='mx-1 checkLabel' htmlFor="remember"> Save my name, email, and website in this browser for the next time I comment.</label>
                </div>


                {/* Post Comment Button */}
                <div className="col-12 px-0 px-sm-1 text-center">
                    <button 
                    type="submit"
                    className="custom-btn z-1" 
                    disabled={!(formik.isValid && formik.dirty)}
                    >
                        {langs[lang].ContactForm.add}
                    </button>
                </div>

                {/* Success Msg */}
                <div
                    className={`success-msg w-auto ${submissionStatus ? "" : "hidden"}`}
                >
                {submissionStatus && (
                    <div className="alert alert-success w-auto fade-message">
                        {langs[lang].successMsg.com} <GrStatusGood />
                    </div>
                )}

                </div>
        </form>

    </div>
)
}

export default CommentForm