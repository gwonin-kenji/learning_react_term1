import React from "react";

const ColofulMessage = (props) => {
  console.log("再レンダリングの確認 ColofulMessageコンポーネント");
  // console.log(props);

  const { color, children } = props;

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;
