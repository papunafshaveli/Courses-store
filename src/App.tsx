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
  console.log(currency);
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
        <Buttons>
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

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 6px 18px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
