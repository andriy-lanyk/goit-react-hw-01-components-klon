import React, { Component } from "react";

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const [good, neutral, bad] = Object.keys(this.state);
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button">{good}</button>
        <button type="button">{neutral}</button>
        <button type="button">{bad}</button>
      </>
    );
  }
}
