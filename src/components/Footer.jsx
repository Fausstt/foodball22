import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
        <Box
            sx={{
                bgcolor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
                padding: "20px 0 ",
            }}
        >
            <Typography
                sx={{
                    color: "#00E3FF",
                    fontSize: "4rem",
                    lineHeight: "1.2",
                    fontWeight: "700",
                    textAlign: "center",
                }}
            >
                UNLOCK THE WORLD OF CRYPTO
                <br /> INVESTMENTS
            </Typography>
            <Typography sx={{ color: "#fff" }}>
                Start making passive income right now
            </Typography>
            <Button
                href="#reg"
                sx={{
                    width: { xs: "200px", md: "500px" },
                    height: { xs: "50px", md: "100px" },
                    bgcolor: "#fff",
                    fontSize: { xs: "1rem", md: "4rem" },
                    lineHeight: "1.2",
                    fontWeight: "700",
                    textAlign: "center",
                    color: "#000",
                    "&:hover": {
                        bgcolor: "#FFE198",
                    },
                }}
            >
                GET STARTED
            </Button>
        </Box>
    );
}
