import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import "./Title.scss";

const Title = () => {
  return (
    <div className="main-title">
      <FontAwesomeIcon icon={faTree} />
      <div className="title-font">PlanTree</div>
    </div>
  );
};

export default Title;
