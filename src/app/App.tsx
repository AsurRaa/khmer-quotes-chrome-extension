import React, { useEffect, useState } from "react";
import ParticleLayout from "../components/layouts/ParticleLayout";
import datas from "../data/quotes.json";
import moment from "moment";
import "moment/locale/km";
import { quotesInterface } from "../interface/interface";
import Popup from "@atlaskit/popup";
import Setting from "../components/Setting";

const githubIcon = require("../assets/logo-github.svg");
const settingIcon = require("../assets/cog-outline.svg");

function App() {
  const [quotes, setQuotes] = useState<quotesInterface>();
  const [timer, setTimer] = useState();
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  const [isParticle, setIsParticle] = useState<boolean | null>(true);
  let [bgColor, setBgColor] = useState<string | null>("white");
  useEffect(() => {
    setBgColor(localStorage.getItem("bgColor"));
    let localStorageParticle = localStorage.getItem("isParticle");
    if (localStorageParticle === "true") {
      setIsParticle(true);
    } else {
      setIsParticle(false);
    }

    let random = Math.floor(Math.random() * datas.length);
    setQuotes(datas[random]);
    const interval = setInterval(() => {
      console.log("This will run every second!");
      let timing = moment().locale("km").format("MMMM Do YYYY, h:mm:ss a");
      // @ts-ignore
      setTimer(timing);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{ position: "fixed", zIndex: -1, backgroundColor: `${bgColor}` }}
      >
        {isParticle === true ? <ParticleLayout /> : null}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p style={{ fontSize: "1.5rem", fontWeight: 400, textAlign: "center" }}>
          <p>{quotes?.quoteNameKH}</p>
        </p>
        <p style={{ fontSize: "1rem", fontWeight: 500, textAlign: "center" }}>
          {quotes?.author}
        </p>
      </div>
      <div style={{ position: "absolute", bottom: "1%", right: "1%" }}>
        <Popup
          content={() => <Setting />}
          isOpen={openSetting}
          trigger={(triggerProps) => (
            // @ts-ignore
            <img
              alt="logo"
              id="popup-trigger"
              {...triggerProps}
              onClick={() => setOpenSetting(!openSetting)}
              style={{ cursor: "pointer" }}
              src={settingIcon}
              width={30}
              height={30}
            />
          )}
        />
      </div>
      <div style={{ position: "absolute", bottom: "1%", left: "1%" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              marginRight: 5,
            }}
            onClick={() =>
              window.open(
                "https://github.com/AsurRaa/khmer-quotes-extension",
                "_blank"
              )
            }
          >
            <img src={githubIcon} width={40} height={40} alt="setting" />
          </div>
          <div style={{}}>
            <p style={{ fontSize: 12, padding: 0, margin: 0 }}>
              Powered by{" "}
              <span
                onClick={() => window.open("https://asurraa.com", "_blank")}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                AsurRaa
              </span>
            </p>
            {timer}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
