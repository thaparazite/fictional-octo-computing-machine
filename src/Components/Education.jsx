import React from "react";

const Education = ({ education }) => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="container">
        {education.map((item) => (
          <div className="box" key={item.degree}>
            <h3 style={{ flexBasis: "40px" }}>{item.degree}</h3>
            <p className="small">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
