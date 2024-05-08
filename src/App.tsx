import React from "react";

const oduBg = require("./imgs/odulum_background.png");
// import oduBg from "./imgs/odulum_background.png"

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        backgroundImage: `url(${oduBg})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <button
          style={{
            width: 200,
            height: 50,
            fontSize: 20,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://play.google.com/store/apps/details?id=com.ashanti.mobile.odulum&pli=1"
            );
          }}
        >
          Google Play
        </button>
        <button
          style={{
            width: 200,
            height: 50,
            fontSize: 20,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://apps.apple.com/us/app/odulom/id6448789029");
          }}
        >
          Apple Play
        </button>
      </div>
    </div>
  );
}

export default App;
