import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button, Card } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Word() {
  const [sortButtonText, setSortButtonText] = useState("Sort By: Default");
  const changeSortButtonText = (text) => setSortButtonText(text);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [words, setWords] = useState([]);
  const paperStyle = {
    padding: "25px 10px",
    margin: "20px auto",
    maxWidth: 500,
    flexGrow: 1,
  };

  const handleClickSubmit = (e) => {
    if (!word || !definition) {
      return;
    }

    e.preventDefault();
    const dfwWord = { word, definition };
    console.log(dfwWord);
    fetch("http://localhost:8080/word/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dfwWord),
    }).then(() => {
      console.log("New Word added");
    });
    //reload the page
    window.location.reload();
  };

  const handleClickSortAscending = (e) => {
    fetch("http://localhost:8080/word/sortByLengthAsc")
      .then((res) => res.json())
      .then((result) => {
        setWords(result);
      });
  };

  const handleClickSortDescending = (e) => {
    fetch("http://localhost:8080/word/sortByLengthDesc")
      .then((res) => res.json())
      .then((result) => {
        setWords(result);
      });
  };

  const handleClickDelete = (e) => {
    //get the word connected to the delete button
    const id = e.currentTarget.parentNode.id;
    console.log(id);
    fetch("http://localhost:8080/word/delete/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Word deleted");
    });
    //reload the page
    window.location.reload();
  };

  useEffect(() => {
    fetch("http://localhost:8080/word/getAll")
      .then((res) => res.json())
      .then((result) => {
        setWords(result);
      });
  }, []);

  return (
    <Container>
      <Paper
        elevation={3}
        style={{ paperStyle, display: "flex", flexDirection: "column" }}
      >
        <h1 style={{ color: "gray" }}>Add a Word</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Word:"
            variant="filled"
            fullWidth
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Definition:"
            variant="filled"
            fullWidth
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          />
        </Box>
        <Button variant="contained" color="inherit" onClick={handleClickSubmit}>
          Submit
        </Button>
      </Paper>

      <h1>WordList:</h1>

      <Card elevation={3}>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => {
            if (sortButtonText === "Sort By: Default") {
              changeSortButtonText("Sort By: Ascending Length");
              handleClickSortAscending();
            } else if (sortButtonText === "Sort By: Ascending Length") {
              changeSortButtonText("Sort By: Descending Length");
              handleClickSortDescending();
            } else if (sortButtonText === "Sort By: Descending Length") {
              changeSortButtonText("Sort By: Alphabetical");
              fetch("http://localhost:8080/word/sortByAlphabetical")
                .then((res) => res.json())
                .then((result) => {
                  setWords(result);
                });
            } else {
              changeSortButtonText("Sort By: Default");
              fetch("http://localhost:8080/word/getAll")
                .then((res) => res.json())
                .then((result) => {
                  setWords(result);
                });
            }
          }}
        >
          {" "}
          {sortButtonText}{" "}
        </Button>

        {words.map((word) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={word.id}
            id={word.id}
          >
            <h3>Word: {word.word}</h3>
            <p>Defintion: {word.definition}</p>

            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              style={{ backgroundColor: "#2E3B55", color: "white" }}
              size="small"
              onClick={handleClickDelete}
            >
              Delete
            </Button>
          </Paper>
        ))}
      </Card>
    </Container>
  );
}
