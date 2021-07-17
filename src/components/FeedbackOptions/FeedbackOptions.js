import React from "react";
import { Btn } from "./FeedbackOptions.styles";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Btn type="button" name={options} onClick={onLeaveFeedback}>
      {options}
    </Btn>
  );
};
