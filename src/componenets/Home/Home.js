import react from "react";
import "./Home.css";
import Bounce from "react-reveal/Bounce";
function Home(props) {
    return (
        <div className="home">
            <div className="text">
                <p className="intro">
                    Hello Everyone My name is Vaibhav Saini and welcome to my
                    Portfolio
                </p>
            </div>

            <h1 className="words">
                I am a{" "}
                <Bounce left cascade>
                    <span className="container dev_span">
                        <span
                            className="upArrow ta1"
                            onClick={(e) => {
                                animate("up", e);
                            }}
                        >
                            {"<"}
                        </span>
                        <Bounce left cascade>
                            <span id="words" className="word">
                                Developer
                            </span>
                        </Bounce>

                        <span
                            className="downArrow ta1"
                            onClick={(e) => {
                                animate("down", e);
                            }}
                        >
                            {"/>"}
                        </span>
                    </span>
                </Bounce>
            </h1>
            <div className="container-text">
                <div className="who">
                    <h3 className="who_h3">Who Am I ?</h3>
                    <p id="who" className="who_p" id="text">
                        I am a developer during quarantine my friend introduced
                        to coding web development to be exact and i was in love
                        i knew exactly what to do further in my life. i
                        completed many courses and learned various things.
                    </p>
                </div>
            </div>
            <div
                className="next"
                id="next"
                onClick={() => {
                    props.Next("Skills");
                }}
            >
                <p>{">"}</p>
            </div>
        </div>
    );
}
async function animate(method, event) {
    const word = document.getElementById("words");
    const text = document.getElementById("text");
    let element;
    let text_txtcontent;
    if (word.textContent == "Student") {
        element = "Developer";
        text_txtcontent = `I am a developer
        during quarantine my friend introduced to coding web
        development to be exact and i was in love i knew
        exactly what to do further in my life.
        i completed many courses and learned various things.`;
    } else {
        element = "Student";
        text_txtcontent = `I am 16 years old and I am from New Delhi, India and 
        I study in class 10th apart from from studies my interest are gaming and coding.
        `;
    }
    word.classList.add(method);
    text.classList.add(method);
    await delay(500);
    word.textContent = element;
    text.textContent = text_txtcontent;
    word.classList.remove(method);
    text.classList.remove(method);
    word.classList.add(method + "A");
    text.classList.add(method + "A");
    await delay(500);
    word.classList.remove(method + "A");
    text.classList.remove(method + "A");
}

function delay(delayInms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

export default Home;
