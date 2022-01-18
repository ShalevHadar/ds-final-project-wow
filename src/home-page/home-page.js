import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#e5e5e5",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        pt: 2,
        pl: "5%",
      }}
    >
      <Typography variant="h5" sx={{ color: "#24313a", fontWeight: "bold" }}>
        Find game best deal
      </Typography>
      <Typography sx={{ color: "##6f7c81", mb: 2 }}>
        Pick your desired game and find out when to buy it{" "}
      </Typography>

      <Card sx={{ width: "95%", borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Choose a time and place
          </Typography>
          <Typography>
            By selecting the following details, you will see how many band
            members are joining.
          </Typography>
          <Divider sx={{ mb: 3, mt: 1 }} />
          <Box sx={{ mb: 2 }}>
            <Typography>Select game:</Typography>
            <TextField placeholder="Game name" />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography>Select date:</Typography>
            <TextField placeholder="Select a date" />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography>Number of Players:</Typography>
            <TextField placeholder="Enter number" />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography>Shop name:</Typography>
            <TextField placeholder="Enter shop" />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button
              sx={{ borderRadius: 10, backgroundColor: "#3898f0" }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ width: "95%", mt: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: "#273640", fontWeight: "bold" }}
          >
            Result:
          </Typography>
          <Divider sx={{ mb: 3, mt: 1 }} />
          <Typography>the game</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

const top100Films = [
  { label: "Sonic" },
  { label: "Little Fighter2" },
  { label: "Mega-man" },
];
