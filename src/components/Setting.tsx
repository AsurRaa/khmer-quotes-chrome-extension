import React, { FC, useState, useEffect } from "react";
import { GithubPicker } from "react-color";
const Setting: FC = (props) => {
  const [toggle, setToggle] = useState<boolean>(true);
  useEffect(() => {
    let localStorageParticle = localStorage.getItem("isParticle");
    if (localStorageParticle === "true") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, []);
  return (
    <div style={{ padding: 5 }}>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        <div>
          <GithubPicker
            onChangeComplete={(color) => {
              localStorage.setItem("bgColor", `${color.hex}`);
              window.location.reload();
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div style={{ margin: 5 }}>
              <p>Particle</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={toggle}
                onChange={() => {
                  window.localStorage.setItem("isParticle", `${!toggle}`);
                  setToggle(!toggle);
                  window.location.reload();
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => {
                localStorage.setItem("bgColor", "white");
                localStorage.setItem("isParticle", "false");
                window.location.reload();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
