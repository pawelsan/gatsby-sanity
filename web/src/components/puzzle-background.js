import React from "react";
import "./puzzle-background.css";

const PuzzleBackground = () => {

  const Puzzle = ({ className }) => (
    <div className={className}>
      <div className="connector connector_1"></div>
      <div className="connector connector_2"></div>
      <div className="connector connector_3"></div>
      <div className="connector connector_4"></div>
    </div>
  )

  return (
    <div className="background_container">
      <div className="puzzle_container">
        <div className="puzzle_row">
          <Puzzle className="puzzle" />
          <Puzzle className="puzzle" />
          <Puzzle className="puzzle" />
        </div>
        <div className="puzzle_row">
          <Puzzle className="puzzle" />
          <Puzzle className="puzzle" />
        </div>
        <div className="puzzle_row">
          <Puzzle className="puzzle" />
        </div>
        <Puzzle className="puzzle loose_puzzle_2" />
        <Puzzle className="puzzle loose_puzzle_3" />
        <Puzzle className="puzzle loose_puzzle_4" />
      </div>
      <Puzzle className="puzzle loose_puzzle_1" />
      <Puzzle className="puzzle loose_puzzle_3" />
      <Puzzle className="puzzle loose_puzzle_4" />
    </div>
  )
};

export default PuzzleBackground;
