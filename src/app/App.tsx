import { useEffect, useState } from "react";
import ParticleLayout from "../components/layouts/ParticleLayout";
import data from "../data/quotes.json";
import moment from "moment";
import "moment/locale/km";
import { quotesInterface } from "../interface/interface";
import Setting from "../components/Setting";
import Modal from "react-modal";
import githubIcon from "../assets/logo-github.svg";
import settingIcon from "../assets/cog-outline.svg";

function App() {
  const [quotes, setQuotes] = useState<quotesInterface>();
  const [timer, setTimer] = useState();
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  useEffect(() => {
    let random = Math.floor(Math.random() * data.length);
    setQuotes(data[random]);
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
      <div>
<!--         <Modal isOpen={openSetting} children={<Setting />} /> -->
      </div>
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
      <div style={{ position: "absolute", bottom: "1%", right: "1%" }}>
        <img
          alt="setting"
          id="popup-trigger"
          onClick={() => setOpenSetting(true)}
          style={{ cursor: "pointer" }}
          src={settingIcon}
          width={30}
          height={30}
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
            <img alt="icon" src={githubIcon} width={40} height={40} />
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
