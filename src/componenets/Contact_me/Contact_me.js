import React from "react";
import ReactDom from "react-dom";
function Contact_me() {
    return (
        <div className="form">
            <label htmlFor="Name">
                Name:
                <input type="text" name="Name" />
            </label>
            <label htmlFor="">
                <input type="text" />
            </label>
            <label htmlFor="">
                <input type="text" />
            </label>
            <label htmlFor="">
                <input type="text" />
            </label>
        </div>
    );
}
export default Contact_me;
