import "./BathTub.css";
import Tube from "./Tube";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useEffect } from "react";

const BathTub = () => {
  const [increase, setIncrease] = useState(false);
  const [decrease, setDecrease] = useState(false);
  const [level, setLevel] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (increase) {
        setLevel(level + 1);
        console.log("Increase every 2 seconds!");
      }
    }, 2000);
    if (!increase || level >= 5) clearTimeout(timer);
  }, [increase, level]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (decrease && level > 0) {
        setLevel(level - 1);
        console.log("Decrease every 2 seconds!");
      }
    }, 2000);
    if (!decrease || level <= 0) clearTimeout(timer);
  }, [decrease, level]);

  const increaseWater = (e) => {
    setDecrease(false);
    setIncrease(true);
    console.log("Increase");
  };
  const decreaseWater = (e) => {
    setIncrease(false);
    setDecrease(true);
    console.log("Decrease");
  };
  return (
    <div>
      <div className="bath-tub-container">
        <Tube level={level} />
      </div>
      <span className="up-button"></span>
      <div className="buttons">
        <ArrowDropUpIcon
          style={{ fontSize: 60, color: "green" }}
          onClick={increaseWater}
        />
        <ArrowDropDownIcon
          style={{ fontSize: 60, color: "red" }}
          onClick={decreaseWater}
        />
        <span className="level-counter">{level * 20} %</span>
      </div>
    </div>
  );
};

export default BathTub;
