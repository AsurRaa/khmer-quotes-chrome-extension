import React, { useEffect, useState } from "react";
import ParticleLayout from "../components/layouts/ParticleLayout";
import datas from "../data/quotes.json";
import moment from "moment";
import { quotesInterface } from "../interface/interface";
const githubIcon = require("../assets/logo-github.svg");
function App() {
  const [quotes, setQuotes] = useState<quotesInterface>();
  const [clock, setClock] = useState();
  useEffect(() => {
    let random = Math.floor(Math.random() * datas.length);
    setQuotes(datas[random]);

    let timing = moment().locale("be").format("MMMM Do YYYY, h:mm:ss a");
    console.log(timing);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", zIndex: -1 }}>
        <ParticleLayout />
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
      <div style={{ position: "absolute", bottom: "1%", left: "1%" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://github.com/AsurRaa/khmer-quotes-extension",
                "_blank"
              )
            }
          >
            <img src={githubIcon} width={40} height={40} />
          </div>
          <div>{}</div>
        </div>
      </div>
    </>
  );
}

export default App;
