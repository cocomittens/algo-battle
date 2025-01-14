"use client";
import { useState, useEffect } from "react";
import { fetchGameData, updateGameData, sendSubmission } from "../util/game";
import NavBar from "../components/navbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Input } from "@mui/base/Input";
import CodeMirror from "@uiw/react-codemirror";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const problemCategories = {
  arrayString: ["array", "string"],
  treeGraph: ["tree", "graph"],
};

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
          <Grid
            container
            item
            height="60vh"
            overflow="scroll"
            justifyContent="center"
          >
            <Typography variant="h2" textAlign="center">
              Problem
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              efficitur laoreet nibh non tincidunt. Donec sollicitudin finibus
              velit, sed fermentum metus. Proin fermentum ultrices leo, id
              suscipit dui tempus vel. Nulla a justo velit. Cras posuere porta
              orci, eu ultricies ex suscipit at. Nunc aliquet pellentesque
              varius. Mauris maximus felis ut dolor venenatis commodo. Aliquam
              sagittis nisl non fermentum placerat. Quisque vitae ex metus.
              Curabitur auctor eget purus vitae sodales. Aenean at nunc erat. Ut
              rhoncus vel orci at placerat. Suspendisse tempus varius metus sit
              amet condimentum. Pellentesque pretium turpis eu nisi aliquet,
              vitae facilisis nulla pulvinar. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In efficitur laoreet nibh non
              tincidunt. Donec sollicitudin finibus velit, sed fermentum metus.
              Proin fermentum ultrices leo, id suscipit dui tempus vel. Nulla a
              justo velit. Cras posuere porta orci, eu ultricies ex suscipit at.
              Nunc aliquet pellentesque varius. Mauris maximus felis ut dolor
              venenatis commodo. Aliquam sagittis nisl non fermentum placerat.
              Quisque vitae ex metus. Curabitur auctor eget purus vitae sodales.
              Aenean at nunc erat. Ut rhoncus vel orci at placerat. Suspendisse
              tempus varius metus sit amet condimentum. Pellentesque pretium
              turpis eu nisi aliquet, vitae facilisis nulla pulvinar.
            </Typography>
            <Button variant="contained" color="primary">
              <Typography variant="button" textAlign="center">
                Get a hint (3 left)
              </Typography>
            </Button>
          </Grid>
          <Grid container item height="30vh" overflow="scroll">
            <Grid item xs={12} bgcolor="#333">
              <Typography>Cat has joined the game.</Typography>
              <Typography>Dog has joined the game.</Typography>
              <Typography>Cat: yooo</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                focused
                color="primary"
                fullWidth
                placeholder="Type your message here..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SendIcon color="primary" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6} height="30vh">
          <Grid item>
            <CodeMirror value={submission.typed_code} height="60vh" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Test case:</Typography>
            <Typography variant="body1">Output:</Typography>
            <Typography variant="body1">Expected output:</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
