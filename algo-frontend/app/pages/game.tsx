"use client";
import { useState, useEffect } from "react";
import { fetchGameData, updateGameData, sendSubmission } from "../util/game";
import NavBar from "../components/navbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Game() {
  const [gameData, setGameData] = useState({ score: 0 });
  const [submission, setSubmission] = useState({
    question_id: 4,
    lang: "Java",
    typed_code:
      "class Solution { public double findMedianSortedArrays(int[] nums1, int[] nums2) { return 0; } }",
  });

  function handleSubmit() {
    sendSubmission(submission);
  }

  return (
    <div>
      <NavBar />
      <Button onClick={handleSubmit}>
        <Typography variant="button">Submit</Typography>
      </Button>
    </div>
  );
}
