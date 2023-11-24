import React from 'react'
import { CiSearch } from "react-icons/ci";
import useLangContext from '../../../Hooks/useLangContext';
import './BlogSearch.css'

const BlogSearch = () => {

    const { lang, langs } = useLangContext();

  return (
    <div className='blog-box'>
        <h3>Search Here</h3>
        <div className="form-floating">

                    <input
                    type="text"
                    className="form-control"
                    id="floatingSearch"
                    name="search"
                    placeholder='Search'
                    />
                    
                    {/* Label */}
                    <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingSearch"
                    >
                        {langs[lang].ContactForm.search}
                    </label>

                    <span><CiSearch/></span>

                </div>
    </div>
  )
}

export default BlogSearch