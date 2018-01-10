import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
`;

export default function Hello() {
  const modifiers = {
    thursdays: { daysOfWeek: [4] },
    birthday: new Date(2018, 9, 30)
  };
  const modifiersStyles = {
    birthday: {
      color: "white",
      backgroundColor: "#ffc107"
    },
    thursdays: {
      color: "#ffc107",
      backgroundColor: "#fffdee"
    }
  };
  return (
    <Container>
      <DayPicker
        month={new Date(2018, 9)}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      />
    </Container>
  );
}
