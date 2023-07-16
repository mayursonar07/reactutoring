import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import AdvancedJSCourse from './AdvancedJSCourse';
import BasicJSCourse from './BasicJSCourse';
import ReactJSCourse from './ReactJSCourse';
import ContactUs from './ContactUs';

const ContentArea = () => {
    return (
        <div className="content-area">
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/courses" exact element={<BasicJSCourse/>} />
                <Route path="/courses/basic-javascript" element={<BasicJSCourse/>} />
                <Route path="/courses/advanced-js" element={<AdvancedJSCourse/>} />
                <Route path="/courses/react" element={<ReactJSCourse/>} />
                <Route path="/contact" element={<ContactUs/>} />
            </Routes>
        </div>
      );
}

export default ContentArea