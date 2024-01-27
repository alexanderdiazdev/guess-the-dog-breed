import "./App.css";
import { Box, Typography, Button } from "@mui/material";

function App() {
  return (
    <>
      <Box height="100vh" width={600} padding="40px 10px">
        <Box mb={5}>
          <Typography variant="h4" textAlign={"center"} color={"white"} mb={3}>
            ¿Cuanto sabes de perros? 🐶
          </Typography>
          <Typography
            variant="subtitle1"
            mb={1}
            color="#bdbdbd"
            sx={{ textDecoration: "underline" }}
          >
            Instrucciones:
          </Typography>
          <Box width={500}>
            <Typography variant="body2" color="#bdbdbd">
              Logra tu mayor record adivinando la raza de perro que veras en la
              imagen.
            </Typography>
            <Typography variant="body2" color="#bdbdbd" mb={2}>
              <Typography
                component={"span"}
                mr="5px"
                color="#eeeeee"
                variant="body2"
              >
                Tendras 10 puntos de bienvenida,
              </Typography>
              por cada falla, te restaremos 2 puntos en tu score y cada vez que
              adivines
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

          <Typography variant="body1" color="white">
            Vamos! logra el mayor record posible 🎉
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button variant="contained" color="success">
            Empezar!
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
