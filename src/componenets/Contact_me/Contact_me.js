import React from "react";
import emailjs from "emailjs-com";
import Roll from "react-reveal/Roll";
import "./Contact.css";
import Fade from "react-reveal/Fade";
class Contact_me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validEmail: false,
            startAnimation: false,
            Next: this.props.Next,
        };
    }
    keyup = (e) => {
        if (e.target.value) {
            e.target.classList.add("not-empty");
        } else {
            e.target.classList.remove("not-empty");
        }
        if (e.target.name === "email") {
            if (
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    e.target.value
                )
            ) {
                if (!this.state.validEmail) {
                    this.setState({ validEmail: true, startAnimation: false });
                }
            } else if (
                !(e.target === document.activeElement) &&
                !e.target.classList.contains("not-empty")
            ) {
                this.setState({ startAnimation: false });
            } else {
                this.setState({ startAnimation: true, validEmail: false });
            }
        }
    };

    emailFocusOut = (e) => {
        this.setState({ validEmail: false });
        this.keyup(e);
    };
    render() {
        return (
            <div className="contact_div">
                <div className="contact_container">
                    <Roll top>
                        <div className="relative_contact_container">
                            <h2 className="contact_h2">Contact Me here</h2>
                            <div className="form_div">
                                <form
                                    className="contact-form"
                                    onSubmit={(e) => {
                                        sendEmail(e);
                                    }}
                                >
                                    <div className="input_div">
                                        <input
                                            type="text"
                                            className="contact_input"
                                            onKeyUp={(e) => {
                                                this.keyup(e);
                                            }}
                                            autoComplete="no"
                                            required
                                            name="name"
                                        />{" "}
                                        <label
                                            className="input_label"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="input_div">
                                        <input
                                            type="email"
                                            autoComplete="no"
                                            onBlur={(e) => {
                                                this.emailFocusOut(e);
                                            }}
                                            required
                                            className="contact_input"
                                            onKeyUp={(e) => {
                                                this.keyup(e);
                                            }}
                                            name="email"
                                        />
                                        <label
                                            className="input_label"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <Fade
                                            bottom
                                            collapse
                                            when={this.state.startAnimation}
                                        >
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: "block" }}
                                            >
                                                Please enter a vaild email !
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className="input_div">
                                        <input
                                            type="text"
                                            autoComplete="no"
                                            required
                                            className="contact_input"
                                            onKeyUp={(e) => {
                                                this.keyup(e);
                                            }}
                                            name="subject"
                                        />{" "}
                                        <label
                                            className="input_label"
                                            htmlFor="subject"
                                        >
                                            Subject
                                        </label>
                                    </div>
                                    <div className="input_div">
                                        <input
                                            type="text"
                                            className="contact_input content"
                                            onKeyUp={(e) => {
                                                this.keyup(e);
                                            }}
                                            autoComplete="no"
                                            required
                                            name="content"
                                        />
                                        <label
                                            className="input_label"
                                            htmlFor="content"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div className="input_div">
                                        <button
                                            type="submit"
                                            name="submit"
                                            className="contact_input submit_btn"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Roll>
                </div>
                <div
                    className="prev"
                    id="prev"
                    onClick={() => {
                        this.state.Next("Projects");
                    }}
                >
                    <p>{"<"}</p>
                </div>
            </div>
        );
    }
}

function sendEmail(e) {
    e.preventDefault();
    emailjs
        .sendForm(
            "service_534rlm4",
            "template_tyyizvg",
            e.target,
            "user_b6ksttCnHMGRKpvfzYyxe"
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    e.target.reset();
}
export default Contact_me;
