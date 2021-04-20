import React from "react";

const CustomProject = ({ title, linkArray, Class, desc, img, linksText }) => {
    return (
        <div className={Class} id={Class}>
            <div className="projects_container">
                <div className="back">
                    <p className="links_text">Links</p>
                    <div className="links">
                        {linkArray.map((item, index) => {
                            return (
                                <p className="links_text" index={index}>
                                    <a
                                        href={item}
                                        rel="noreferrer"
                                        className={"a-links"}
                                        target="_blank"
                                    >
                                        {linksText[index]}
                                    </a>
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="front">
                    <img
                        src={img}
                        alt="Space shooter"
                        className="space_img project_img"
                    />
                    <h2 className="project_h2">{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomProject;
