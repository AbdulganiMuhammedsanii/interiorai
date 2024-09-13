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
  CardContent,
  CardActions,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function PaymentPage() : JSX.Element {
  const router = useRouter();

  const handlePayment = () => {
    // Add your payment logic here (e.g., Stripe integration)
    alert("Payment processing for $10 for unlimited generations.");
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
            onClick={() => router.push("/")}
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
              onClick={() => router.push("/services")}
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
              onClick={() => router.push("/about")}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Payment Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container maxWidth="sm">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      mb: 2,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Unlimited Generations
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#666",
                      mb: 4,
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: "1.6",
                    }}
                  >
                    For just $10, unlock unlimited interior design generations.
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#1e3c72",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    $10
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", mt: 4 }}>
                  <Button
                    onClick={handlePayment}
                    sx={{
                      backgroundColor: "#1e3c72",
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      transition: "background-color 0.3s",
                      "&:hover": { backgroundColor: "#2a5298" },
                    }}
                  >
                    Pay Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
