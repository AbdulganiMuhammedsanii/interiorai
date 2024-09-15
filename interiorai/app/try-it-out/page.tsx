"use client";
import React, { useState } from "react";
import { Toolbar, AppBar, Container, TextField, Button, Box, Typography, Grid, CircularProgress, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

export default function TryItOut(): JSX.Element {
  const [roomIdea, setRoomIdea] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>(""); // State for storing generated image URL
  const [loading, setLoading] = useState<boolean>(false); // State for loading indicator
  const router = useRouter();
  const [isPropagating, setIsPropagating] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomIdea(event.target.value);
  };

  const handleSubmit = async () => {
    if (!roomIdea) return;

    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: roomIdea }),
      });

      const data = await response.json();
      if (response.ok) {
        setImageUrl(data.imageUrl); // Store the generated image URL
      } else {
        console.error("Failed to generate image:", data.error);
      }
    } catch (error) {
      console.error("Error submitting room idea:", error);
    } finally {
      setLoading(false);
    }
  };

  const goHome = (): void => {
    if (!isPropagating) router.push("/");
  };

  const goToAbout = (): void => {
    if (!isPropagating) router.push("/about");
  };

  const goToServices = (): void => {
    if (!isPropagating) router.push("/services");
  };

  return (
    <Box sx={{ background: "linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)", minHeight: "100vh" }}>
      {/* App Bar */}
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
            onClick={goHome}
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

      {/* Main content layout */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Left side - Text input and button */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 2, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Input Your Room Ideas
                </Typography>
                <Typography sx={{ mb: 2, color: "#555" }}>
                  Describe your dream room in detail and let AI generate a beautiful design based on your input!
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Describe your dream room"
                  value={roomIdea}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  sx={{ mb: 4 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{ width: "100%", padding: "12px 0", fontSize: "1.1rem" }}
                >
                  {loading ? <CircularProgress size={24} /> : "Generate"}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Right side - Image appears on submit */}
          <Grid item xs={12} md={6}>
            {loading ? (
              <CircularProgress />
            ) : (
              imageUrl && (
                <Box
                  sx={{
                    width: "100%",
                    height: "560px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <img
                    src={imageUrl} // Display the generated image
                    alt="Generated Room"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  />
                </Box>
              )
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
