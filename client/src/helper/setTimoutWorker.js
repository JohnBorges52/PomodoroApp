import { Timer } from "../components/Timer";
import { useState } from "react";



(function () {

  function setTimeOut(second, minute) {

    if (second > 0) {
      second - 1
    }
    if (second === 0) {
      minute - 1
      second = 59
    };
  }

  setInterval(function () {
    setTimeOut(second, minute);
  }, 1000);

})();