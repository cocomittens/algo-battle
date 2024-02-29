"use client";
import { useState, useEffect } from "react";
import { fetchGameData, updateGameData, sendSubmission } from "../util/game";
import NavBar from "../components/navbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Input } from "@mui/base/Input";
import CodeMirror from "@uiw/react-codemirror";

export default function Game() {
  const [gameData, setGameData] = useState({ score: 0 });
  const [submission, setSubmission] = useState({
    question_id: 4,
    lang: "Java",
    typed_code:
      "class Solution { public double findMedianSortedArrays(int[] nums1, int[] nums2) { return 0; } }",
  });

  return (
    <div>
      <NavBar isGame={true} gameData={submission} />
      <Grid container>
        <Grid container item xs={6}>
          <Typography variant="h2" textAlign="center">
            Problem
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            efficitur laoreet nibh non tincidunt. Donec sollicitudin finibus
            velit, sed fermentum metus. Proin fermentum ultrices leo, id
            suscipit dui tempus vel. Nulla a justo velit. Cras posuere porta
            orci, eu ultricies ex suscipit at. Nunc aliquet pellentesque varius.
            Mauris maximus felis ut dolor venenatis commodo. Aliquam sagittis
            nisl non fermentum placerat. Quisque vitae ex metus. Curabitur
            auctor eget purus vitae sodales. Aenean at nunc erat. Ut rhoncus vel
            orci at placerat. Suspendisse tempus varius metus sit amet
            condimentum. Pellentesque pretium turpis eu nisi aliquet, vitae
            facilisis nulla pulvinar.
          </Typography>
          <Grid container item>
            <Grid item xs={12}>
              <Typography>Cat: yooo</Typography>
            </Grid>
            <Grid item xs={12}>
              <Input placeholder="Type your code here" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid item>
            <CodeMirror value={submission.typed_code} height="20vh" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">Results</Typography>
            <Typography variant="body1">Last failed test case:</Typography>
            <Typography variant="body1">Test cases remaining:</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
