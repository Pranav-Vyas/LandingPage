import React from "react";
import Rectangle from "../Rectangle/Rectangle";
import styles from "./Rightdiv.module.css";

function Rightdiv() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <Rectangle color="#EBFAFF" num="1" />
        <Rectangle color="#F9F5FF" num="2" />
      </div>
      <div className={styles.row}>
        <Rectangle color="#D1FAE5" num="3" />
        <Rectangle color="#FFF3F0" num="4" />
        <Rectangle color="#FFEDD5" num="5" />
      </div>
      <div className={styles.row}>
        <Rectangle color="#FFF3F0" num="6" />
        <Rectangle color="#FFEDD5" num="7" />
        <Rectangle color="#F9F5FF" num="8" />
        <Rectangle color="#EBFAFF" num="9" />
      </div>
    </div>
  );
}

export default Rightdiv;
