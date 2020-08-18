import React, { useEffect, useState } from "react";
import ParticleLayout from "../components/layouts/ParticleLayout";
import datas from "../data/quotes.json";

interface quotesInterface {
  author: string;
  quoteNameEN: string;
  quoteNameKH: string;
}

function App() {
  let x = "hi";
  const [quotes, setQuotes] = useState<quotesInterface>();
  useEffect(() => {
    let random = Math.floor(Math.random() * datas.length);
    setQuotes(datas[random]);
  }, []);

  return (
    <div>
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
        <div>
          <p
            style={{ fontSize: "1.5rem", fontWeight: 400, textAlign: "center" }}
          >
            <p>{quotes?.quoteNameKH}</p>
          </p>
          <p style={{ fontSize: "1rem", fontWeight: 500, textAlign: "center" }}>
            {quotes?.author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
