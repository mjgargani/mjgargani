import React from "react";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";

const Home: React.FC<PageProps> = ({ show }) => <Page show={show}>
  <div style={{
    position: "fixed",
    minWidth: "100vw",
    top: "60vh",
    color: "white",
    textAlign: "center",
    fontSize: "3vw",
    fontWeight: "bold",
    pointerEvents: "none",
    WebkitTextFillColor: "black",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "white",
    textShadow: [
      "-3px  -3px 0 #fff",
      "-2px  -2px 0 #fff",
      "-1px  -1px 0 #fff",
      "1px  1px 0 #fff",
      "2px  2px 0 #fff",
      "3px  3px 0 #fff",
      "4px  4px 0 #fff",
      "5px  5px 0 #fff",
      "6px  6px 0 #fff",
    ].join(", "),
  }}>
    mjgargani's Lab 
  </div>
</Page>;

export default Home;