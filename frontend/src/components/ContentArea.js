import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import AdvancedJSCourse from './AdvancedJSCourse';
import ReactJSCourse from './ReactJSCourse';
import ContactUs from './ContactUs';
import ContactPage from './contact/ContactPage';
import Courses from './Courses';

const ContentArea = () => {
    return (
        <div className="content-area">
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/courses" exact element={<Courses/>} />
                <Route path="/courses/basic-javascript" element={<Courses/>} />
                <Route path="/courses/advanced-js" element={<AdvancedJSCourse/>} />
                <Route path="/courses/react" element={<ReactJSCourse/>} />
                {/* <Route path="/contact" element={<ContactUs/>} /> */}
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </div>
      );
}

export default ContentArea