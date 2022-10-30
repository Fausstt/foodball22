import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Reklama01() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                padding: "20px 0",

                width: "100%",
                bgcolor: "#fff",
                borderRadius: "10px",
            }}
        >
            <Typography
                sx={{
                    width: "600px",
                    fontFamily: "Gustavo Trial",
                    fontSize: { xs: "30px", md: "60px" },
                    textAlign: "center",
                    fontWeight: "800",
                }}
            >
                The gateway for CRYPTO
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Gustavo Trial",
                    fontSize: { xs: "30px", md: "60px" },
                    textAlign: "center",
                    fontWeight: "800",
                }}
            >
                <em>WORLD-CUP</em> INVESTMENS
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Gustavo Trial",
                    fontSize: { xs: "20px", md: "30px" },
                    textAlign: "center",
                    fontWeight: "800",
                }}
            >
                We've built the easiest platform to invest in fan-tokens of
                national teams to help you make money while watching World-Cup
                2022
            </Typography>
            <Button
                href="#reg"
                sx={{ borderRadius: "20px", padding: "15px" }}
                size="large"
                variant="contained"
                color="go"
            >
                CONTACT NOW
            </Button>
        </Box>
    );
}
