/* eslint  react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColofulMessage } from "./components/ColofulMessage";

const App = () => {
  console.log("再レンダリングの確認 Appコンポーネント");
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    console.log("useEffect!!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setFaseShowFlag(true);
      } else {
        faseShowFlag && setFaseShowFlag(false);
      }
    }
  }, [num]);

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
