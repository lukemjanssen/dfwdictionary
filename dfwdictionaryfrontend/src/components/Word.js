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
    fetch("https://dfwdictionary-production.up.railway.app/word/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dfwWord),
    }).then(() => {
      console.log("New Word added");
    });
    //reload words
    useEffect(() => {
      fetch("https://dfwdictionary-production.up.railway.app/word/getAll")
        .then((res) => res.json())
        .then((result) => {
          setWords(result);
        });
    }, []);

    //clear the input boxes
    setWord("");
    setDefinition("");
  };

  const handleClickSortAscending = (e) => {
    fetch("https://dfwdictionary-production.up.railway.app/word/sortByLengthAsc")
      .then((res) => res.json())
      .then((result) => {
        setWords(result);
      });
  };

  const handleClickSortDescending = (e) => {
    fetch("https://dfwdictionary-production.up.railway.app/word/sortByLengthDesc")
      .then((res) => res.json())
      .then((result) => {
        setWords(result);
      });
  };

  const handleClickDelete = (e) => {
    //get the word connected to the delete button
    const id = e.currentTarget.parentNode.id;
    console.log(id);
    fetch("https://dfwdictionary-production.up.railway.app/word/delete/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Word deleted");
    });
    //reload words
    useEffect(() => {
      fetch("https://dfwdictionary-production.up.railway.app/word/getAll")
        .then((res) => res.json())
        .then((result) => {
          setWords(result);
        });
    }, []);

  };

  useEffect(() => {
    fetch("https://dfwdictionary-production.up.railway.app/word/getAll")
      .then((res) => res.json())
      .then((result) => {
        setWords(result);
      });
  }, []);

  return (
    <Container>
      <Paper
        elevation={3}
        style={{
          paperStyle,
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px",
          margin: "20px auto",
          flexGrow: 1,
          backgroundColor: "#AAAE8E",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          Welcome! This dictionary is a collection of words/neologisms used by
          David Foster Wallace in his novel Infinite Jest. You can add words to
          the dictionary and sort the words by length or alphabetically.
        </p>
        <br />
        <p style={{ color: "#FFFFFF" }}>
          To add a word, type the word and its definition in the boxes below and
          click submit.
        </p>
      </Paper>

      <Paper
        elevation={3}
        style={{
          paperStyle,
          display: "flex",
          flexDirection: "column",
          padding: "25px 10px",
          margin: "20px auto",
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <h1 style={{ color: "#333333" }}>Add a Word</h1>
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
        <Button
          variant="contained"
          color="inherit"
          onClick={handleClickSubmit}
          style={{ backgroundColor: "#AAAE8E", color: "white", marginTop: 10 }}
        >
          Submit
        </Button>
      </Paper>

      <Card elevation={3}>
        <h1 style={{ color: "#333333" }}>WordList:</h1>
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
              fetch("https://dfwdictionary-production.up.railway.app/word/sortByAlphabetical")
                .then((res) => res.json())
                .then((result) => {
                  setWords(result);
                });
            } else {
              changeSortButtonText("Sort By: Default");
              fetch("https://dfwdictionary-production.up.railway.app/word/getAll")
                .then((res) => res.json())
                .then((result) => {
                  setWords(result);
                });
            }
          }}
          style={{ backgroundColor: "#AAAE8E", color: "white", margin: "10px" }}
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
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ backgroundColor: "#AAAE8E", color: "white" }}
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
