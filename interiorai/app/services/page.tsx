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
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentPage(): JSX.Element {
  const router = useRouter();

  const handlePayment = async () => {
    const stripe = await stripePromise;

    // Call the backend route to create a checkout session
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const session = await res.json();

    // Redirect to Stripe Checkout
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error("Stripe checkout error:", error);
      }
    }
  };

  return (
    <Box>
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
