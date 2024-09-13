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
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home(): JSX.Element {
  const [displayedText, setDisplayedText] = useState<string>("");
  const fullText: string =
    "A moody bedroom with high ceilings, dark hardwood floors, a grand black bed, and elegant nightstands on either side.";
  const imageSources: string[] = [
    "images/generation.webp",
    "/replicate(2).jpg",
    "/replicate(3).jpg",
    "/replicate(4).jpg",
  ];
  const router = useRouter();
  const [isPropagating, setIsPropagating] = useState<boolean>(false);

  // Text propagation effect
  useEffect(() => {
    let currentIndex: number = 0;
    setIsPropagating(true);

    const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
        setIsPropagating(false);
      }
    }, 25);

    return () => clearInterval(intervalId);
  }, [fullText]);

  const goToAbout = (): void => {
    if (!isPropagating) router.push("/about");
  };

  const goToServices = (): void => {
    if (!isPropagating) router.push("/services");
  };

  return (
    <Box>
      {/* Stunning App Bar with gradient and cool hover effects */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #1e3c72, #2a5298)",
          padding: "10px 0",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": { color: "#f1c40f" },
            }}
          >
            Interior AI
          </Typography>
          <Box>
            <Button
              sx={{
                mx: 1,
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "white",
                transition: "color 0.3s",
                "&:hover": { color: "#f1c40f" },
              }}
              onClick={goToServices}
              disabled={isPropagating}
            >
              Services
            </Button>
            <Button
              sx={{
                mx: 1,
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "white",
                transition: "color 0.3s",
                "&:hover": { color: "#f1c40f" },
              }}
              onClick={goToAbout}
              disabled={isPropagating}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main section with aesthetic layout */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  mb: 4,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Elegant Interior Design Visualization
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "400",
                  color: "#666",
                  mt: 8,
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.6",
                }}
              >
                {displayedText}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "520px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <img
                    src="images/generation.webp"
                    alt="Interior Design Visualization"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
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
