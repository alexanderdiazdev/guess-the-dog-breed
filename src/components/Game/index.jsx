import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Game() {
  const [score, setScore] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://127.0.0.1:8000/api/breeds/");
        const data = await res.json();
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadBreeds();
  }, []);
  return (
    <Box>
      {isLoading && <Box color={"white"}>Loading......</Box>}
      {!isLoading && (
        <Box bgcolor={"#1B5E21"} borderRadius={3}>
          <Typography
            variant="h5"
            textAlign={"center"}
            color={"white"}
            mb={3}
            padding={1}
          >
            Score: {score}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
