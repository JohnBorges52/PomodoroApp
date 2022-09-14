import styled from "styled-components";


export const Slider = styled.input.attrs({ type: 'range', min: "10", max: "50", defaultValue: "25", step: "5" })
  `-webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  width: 80%;
  height: 15px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(90deg, rgb(255, 61, 61) 0%, rgb(255, 61, 61) ${props.value * 1.5}%, #fff ${props.value * 2}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 34px;
    height: 34px;
    background-image: radial-gradient(circle, #f7f7fc 30%, #2843db 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 44px;
    height: 44px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;

