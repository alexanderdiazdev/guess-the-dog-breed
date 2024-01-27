import React, { useState, useEffect } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";

export default function Game() {
  const [score, setScore] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [breedError, setBreedError] = useState(false);

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
    if (answer) {
      setBreedError(false);
      setScore(score + 2);
      loadBreeds();
    } else {
      setScore(score - 2);
      setBreedError(true);
      setTimeout(function () {
        setBreedError(false);
      }, 1500);
    }
  };

  return (
    <Box height={"100vh"} width={500} pt={5}>
      {score > 0 && (
        <Box mb={3} display={"flex"}>
          <Typography
            bgcolor={"#1B5E21"}
            py={1}
            px={3}
            color={"white"}
            borderRadius={"4px"}
          >
            Tu puntaje actual:
            <Typography variant="span" px={"5px"} fontSize={"20px"}>
              {score}
            </Typography>
          </Typography>
        </Box>
      )}
      <Box>
        {isLoading && (
          <Box display={"flex"} justifyContent={"center"} pt={10}>
            <CircularProgress />
          </Box>
        )}
        {score === 0 && (
          <Box pt={10}>
            <Box mb={5}>
              <Typography color={"white"} textAlign={"center"} variant="h4">
                Tu score llego a cero
              </Typography>
              <Typography
                color={"white"}
                textAlign={"center"}
                variant="subtitle1"
              >
                ¿Quieres intentarlo de nuevo?
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setScore(10), loadBreeds();
                }}
                fullWidth
              >
                Jugar de nuevo!
              </Button>
            </Box>
          </Box>
        )}
        {data && !isLoading && score > 0 && (
          <Box>
            <Typography
              variant="h6"
              color={"white"}
              textAlign={"center"}
              mb={3}
            >
              ¿Que raza de perro es?
            </Typography>
            <Box>
              <Box display={"flex"} mb={2} justifyContent={"center"}>
                <Box width={"400px"}>
                  <Box mb={1}>
                    <img src={data.image} width={"100%"} />
                  </Box>
                  {breedError && (
                    <Box>
                      <Typography textAlign={"center"} color={"#f73378"}>
                        No es la raza correcta 🙁
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Box width={"400px"}>
                  {data.options.map(({ breed, correct }, index) => {
                    return (
                      <Box mb={1} key={index}>
                        <Button
                          variant="contained"
                          color="primary"
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
          </Box>
        )}
      </Box>
    </Box>
  );
}
