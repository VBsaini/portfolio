import React from "react";
import "./Modal.css";

function Modal(props) {
    let smallScreen = props.smallScreen;
    return (
        <div className="modal_div">
            {smallScreen ? (
                <div className="smallScreen">
                    <div className="modal modal_screen">
                        <p>
                            Your resolution is too small please view it on
                            another device or rotate your phone
                        </p>
                        <button
                            className="modal_btn"
                            onClick={() => {
                                handleclickNext();
                            }}
                        >
                            Next
                        </button>
                    </div>{" "}
                    <div className="modal modal_hover">
                        <p>Click on top of website for navbar</p>
                        <button className="modal_btn" onClick={handleclick}>
                            Close
                        </button>
                    </div>
                </div>
            ) : (
                <div className="modal">
                    <p>Hover on top of website for navbar</p>
                    <button className="modal_btn" onClick={handleclick}>
                        Close
                    </button>
                </div>
            )}

            <div className="black"></div>
        </div>
    );
}

function handleclick() {
    document.querySelector(".modal_div").classList.add("hide");
}
function handleclickNext() {
    document.querySelector(".modal_screen").classList.add("modal_screen_hide");
    document.querySelector(".modal_hover").classList.add("modal_hover_show");
}
export default Modal;
