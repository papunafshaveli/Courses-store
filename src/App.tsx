import styled from "styled-components";
import "./App.css";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { coursesDB } from "./DB/coursesDB";
import { useState } from "react";
import Courses from "./components/Courses/Courses.js";
import { CourseT } from "./types/types.js";

function App() {
  const [coursesData] = useState<CourseT[]>(coursesDB);
  const [currency, setCurrency] = useState<string>("USD");

  const handleUsd = () => {
    setCurrency("USD");
  };

  const handleEur = () => {
    setCurrency("EUR");
  };

  const handleGbp = () => {
    setCurrency("GBP");
  };

  return (
    <AppContainer $currency={currency}>
      <StyledHeader>
        <h4>Change currency:</h4>
        <Buttons $currency={currency}>
          <button onClick={handleUsd}>USD</button>
          <button onClick={handleEur}>EUR</button>
          <button onClick={handleGbp}>GBP</button>
        </Buttons>
      </StyledHeader>
      <CourseInfo />
      <Courses coursesData={coursesData} currency={currency} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div<{ $currency: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 20px 5%;

  background-color: ${({ $currency }) =>
    $currency === "USD"
      ? "darkslategrey"
      : $currency === "EUR"
      ? "#88886f"
      : "#64A075"};

  transition: background-color 1000ms linear;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    font-size: 1.6rem;
    color: white;
    letter-spacing: 1px;
  }
`;

const Buttons = styled.div<{ $currency: string }>`
  display: flex;
  gap: 10px;

  button {
    padding: 6px 18px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    background-color: ${({ $currency }) =>
      $currency === "USD"
        ? "#b5afaf"
        : $currency === "EUR"
        ? "#7e9570"
        : "#07af37"};
  }
`;
