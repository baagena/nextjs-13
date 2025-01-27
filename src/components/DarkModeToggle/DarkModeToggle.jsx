"use client";

import React from "react";
import styles from "./darkModeToggle.module.css";
import { useTheme } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggleMode, mode } = useTheme();

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
