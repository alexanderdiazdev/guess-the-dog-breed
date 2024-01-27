import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Game() {
  const [score, setScore] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const loadBreeds = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://127.0.0.1:8000/api/breeds/");
      const data = await res.json();
      setIsLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadBreeds();
  }, []);

  const updateScore = (answer) => {
    console.log(answer)
    if(answer){
        setScore(score + 2)
        loadBreeds();
    }else{
        setScore(score - 2)
    }
  }
  return (
    <>
      {isLoading && <Box color={"white"}>Loading......</Box>}

      {!isLoading && data && (
        <Box>
          <Box mb={4}>
            <Typography variant="h5" textAlign={"center"} color={"white"}>
              Tienes: {score} puntos
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"center"} mb={2}>
            <Box width={300}>
              <img src={data.image} width="100%" />
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Box width={300}>
              {data.options.map(({ breed, correct }, index) => {
                return (
                  <Box key={index} mb={1}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => updateScore(correct)}
                      fullWidth
                    >
                      {breed}
                    </Button>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
