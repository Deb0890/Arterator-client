import React from "react";
import Style from "./style.module.css";

const Card = ({ title, child }) => {
  return (
    <>
      <div className={Style.randomWord}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={Style.displayWord}>{child}</div>
      </div>
    </>
  );
};

export default Card;
