import { useState } from "react";
import { Button } from "antd";
import "../App.css";
import "antd/dist/reset.css";
import Form from "./form";

const Intro = () => {
  const [cond, setCond] = useState(false);

  return cond ? (
    <Form />
  ) : (
    <>
      <div className="intro">
        <div className="logo"></div>
        <div>
          <h1 className="big-heading">
            Bee
            <span> Shipping</span>
          </h1>
          <h2 className="message">The Freight Master</h2>
        </div>
        <div className="intro-btn">
          <Button
            className="custom-button "
            type="primary"
            onClick={() => {
              setCond(true);
            }}
          >
            Only Forwarding
          </Button>
          <Button
            className="custom-button "
            style={{ position: "absolute", left: "60%" }}
            type="primary"
          >
            Complete Package
          </Button>
        </div>
      </div>
    </>
  );
};

export default Intro;
