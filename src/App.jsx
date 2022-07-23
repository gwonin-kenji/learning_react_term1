import React, { useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  console.log("再レンダリングの確認 Appコンポーネント");
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faseShowFlag && <p>（^人^）</p>}
    </>
  );
};

export default App;
