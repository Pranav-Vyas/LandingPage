import React from "react";
import Rectangle from "../Rectangle/Rectangle";
import styles from "./Header2.module.css";

function Header2() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Rectangle color="#FFF3F0" num="6" />
        <Rectangle color="#FFEDD5" num="7" />
        <Rectangle color="#F9F5FF" num="8" />
        <Rectangle color="#EBFAFF" num="9" />
      </div>
      {/* <div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FAFAFA"
          fill-opacity="1"
          d="M0,128L24,133.3C48,139,96,149,144,176C192,203,240,245,288,250.7C336,256,384,224,432,202.7C480,181,528,171,576,186.7C624,203,672,245,720,256C768,267,816,245,864,218.7C912,192,960,160,1008,176C1056,192,1104,256,1152,250.7C1200,245,1248,171,1296,133.3C1344,96,1392,96,1416,96L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      </div> */}
    </div>
  );
}

export default Header2;
