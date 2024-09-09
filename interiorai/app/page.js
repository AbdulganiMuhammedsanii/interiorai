"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "ddark grunge bedroom with high ceilings and dark hardwood floors and massive black bed and two elegant nightstands on both sides of the bed.";
  const imageSources = [ "images/generation.webp", "/replicate(2).jpg", "/replicate(3).jpg", "/replicate(4).jpg", ];
  const router = useRouter();
  const [isPropagating, setIsPropagating] = useState(false);

  // Text propagation effect
  useEffect(() => {
    let currentIndex = 0;
    setIsPropagating(true); // Disable buttons when text propagation starts

    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
        setIsPropagating(false); // Re-enable buttons when text propagation is done
      }
    }, 25); // Adjust delay between each character

    return () => clearInterval(intervalId);
  }, [fullText]);

  const goToAbout = () => {
    if (!isPropagating) router.push("/about");
  };

  const goToServices = () => {
    if (!isPropagating) router.push("/services");
  };

  return (
    <Box>
      <AppBar position="static" color="success" elevation={4} sx={{ backgroundColor: "#b8e994" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              "&:hover": { color: "lightgray" },
            }}
          >
            Interior AI
          </Typography>
          <Button
            color="inherit"
            sx={{ mx: 1, color: "white", "&:hover": { color: "lightgray" } }}
            onClick={goToServices}
            disabled={isPropagating} // Disable button during propagation
          >
            Services
          </Button>
          <Button
            color="inherit"
            sx={{ mx: 1, color: "white", "&:hover": { color: "lightgray" } }}
            onClick={goToAbout}
            disabled={isPropagating} // Disable button during propagation
          >
            About
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main section with Title, Text Propagation, and Image */}
      <Box sx={{ backgroundColor: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#333", mb: 4 }}
              >
                Interior Design Visualization
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#333", mt: 8 }} // Push the text down
              >
                {displayedText}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: "520px", overflow: "hidden" }}>
                <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                  <img
                    src="images/generation.webp"
                    alt="Original"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
