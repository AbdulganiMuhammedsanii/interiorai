"use client";
import React from "react";
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

export default function AboutPage() : JSX.Element {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box>
      {/* Aesthetic App Bar */}
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
            onClick={() => handleNavigation("/")}
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
              onClick={() => handleNavigation("/services")}
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
              onClick={() => handleNavigation("/about")}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* About Section */}
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
                Problem Space: Interior Design with AI
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#666",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.6",
                }}
                gutterBottom
              >
                The challenge lies in creating visually appealing interior design layouts that can
                be customized and generated in real-time using AI technology. With AI-driven
                tools, users can visualize different room setups, furniture styles, and color
                schemes, enhancing their ability to make informed design choices quickly.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#888",
                  mt: 3,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Our tool leverages cutting-edge AI models to generate personalized room
                designs. The AI considers the dimensions, style preferences, and other design
                elements to generate unique room setups. It offers an interactive and user-friendly
                experience for design enthusiasts and professionals alike.
              </Typography>
            </Grid>

            {/* Image 1 */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  image="images/cottagefeel.webp"  
                  alt="AI-generated cottage example"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Box>
            </Grid>

            {/* Image 2 */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  mt: 4,
                }}
              >
                <CardMedia
                  component="img"
                  image="images/1920sclassy.webp" 
                  alt="AI-generated classy example"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Box>
            </Grid>

            {/* Another description */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  color: "#666",
                  fontFamily: "'Poppins', sans-serif",
                  mt: 4,
                  lineHeight: "1.6",
                }}
              >
                Why AI in Interior Design?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#888",
                  fontFamily: "'Poppins', sans-serif",
                  mt: 3,
                }}
              >
                AI enables faster iterations of designs and helps to meet the needs of clients
                seeking unique, optimized solutions. With the power to visualize spaces with
                different furniture placements, color combinations, and layouts, AI brings an
                innovative approach to modern interior design.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
