import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: "#F7F6F1",
//   "&:hover": {
//     backgroundColor: "#F7F6F1",
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// // listen for enter key press then search for word
// const handleSearch = (e) => {
//   if (e.key === "Enter") {
//     console.log("searching for word");
//     searchForWord();
//   }
// };

// // searches for word displayed on the page and scrolls down to that word
// const searchForWord = () => {
//   console.log("searching for word");
//   const word = document.getElementById("word").value;
//   console.log(word);
//   const wordElement = document.getElementById(word);
//   console.log(wordElement);
//   wordElement.scrollIntoView();
// };

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#020122",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "#020122",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar>
          {/*}
          <IconButton
            size="large"
            edge="start"
            color="#020122"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{ color: "#020122" }}
          >
            DFW Dictionary
          </Typography>
          {/*
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
            */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
