import React from "react";

const oduBg = require("./imgs/still_odu_bg.png");
const smol_google_play_badge = require("./imgs/google-play-badge/128x128.png");
const big_google_play_badge = require("./imgs/google-play-badge/256x256.png");
const biggest_google_play_badge = require("./imgs/google-play-badge/512x512.png");
const smol_apple_badge = require("./imgs/app-store-badge/128x128.png");
const big_apple_badge = require("./imgs/app-store-badge/256x256.png");
const biggest_apple_badge = require("./imgs/app-store-badge/512x512.png");
const gif = require("./imgs/IMG_1216.gif");
const screen_breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const screen_width = window.innerWidth;

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
        // if phone screen rotatie background 90deg
        backgroundRepeat: "no-repeat",
        position: "fixed",
        width: "-webkit-fill-available",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "rgba(255, 255, 255, 0.5)",
          // padding: 20,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            height: 400,
            width: 400,
            backgroundImage: `url(${gif})`,
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <button
          style={{
            width: 400,
            height: 100,
            maxWidth: "91%",
            fontSize: 20,
            marginBottom: 10,
            borderRadius: 10,
            padding: 15,
            backgroundImage: `url(${
              screen_width < screen_breakpoints.md
                ? big_google_play_badge
                : screen_width < screen_breakpoints.lg
                ? big_google_play_badge
                : biggest_google_play_badge
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

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
          {/* Google Playss */}
        </button>
        <button
          style={{
            width: 400,
            height: 100,
            fontSize: 20,
            marginBottom: 10,
            padding: 15,
            borderRadius: 10,
            maxWidth: "91%",
            backgroundImage: `url(${
              screen_width < screen_breakpoints.md
                ? big_apple_badge
                : screen_width < screen_breakpoints.lg
                ? big_apple_badge
                : biggest_apple_badge
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            border: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://apps.apple.com/us/app/odulom/id6448789029");
          }}
        >
          {/* Apple Play */}
        </button>
      </div>
    </div>
  );
}

export default App;
