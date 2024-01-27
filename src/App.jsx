import { useState } from "react";
import "./App.css";
import { Box, Typography, Button } from "@mui/material";
import Game from "../src/components/Game";

function App() {
  const [showGame, setShowGame] = useState(false);
  return (
    <>
      {!showGame && (
        <Box
          width={500}
          height={"100vh"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h4"
              textAlign={"center"}
              color={"white"}
              mb={3}
            >
              ¿Cuanto sabes de perros? 🐶
            </Typography>

            <Box>
              <Typography
                variant="subtitle1"
                mb={1}
                color="#bdbdbd"
                sx={{ textDecoration: "underline" }}
                textAlign={"center"}
              >
                Instrucciones:
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  color="#bdbdbd"
                  textAlign={"center"}
                >
                  Logra tu mayor record adivinando la raza de perro que veras en
                  la imagen.
                </Typography>
                <Typography
                  variant="body2"
                  color="#bdbdbd"
                  mb={2}
                  textAlign={"center"}
                >
                  <Typography
                    component={"span"}
                    mr="5px"
                    color="#eeeeee"
                    variant="body2"
                  >
                    Tendras 10 puntos de bienvenida,
                  </Typography>
                  por cada falla, te restaremos 2 puntos en tu score y cada vez
                  que adivines
                  <Typography
                    component={"span"}
                    mx="5px"
                    color="#eeeeee"
                    variant="body2"
                  >
                    Tendras 2 puntos extras en tu score!.
                  </Typography>
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="white"
                mb={5}
                textAlign={"center"}
              >
                Vamos! logra el mayor record posible 🎉
              </Typography>
              <Box display={"flex"} justifyContent={"center"}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setShowGame(true)}
                >
                  Empezar!
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {showGame && <Game />}
    </>
  );
}

export default App;
