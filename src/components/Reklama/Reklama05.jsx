import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Reklama05() {
    return (
        <Box
            id="docs"
            sx={{
                display: "flex",
                position: "sticky",
                top: "100px",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
                padding: "20px 0",

                width: "100%",
                bgcolor: "#fff",
                borderRadius: "10px",
            }}
        >
            <Box
                sx={{
                    width: { xs: "auto", md: "500px" },
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        lineHeight: "1.1",
                    }}
                >
                    01
                    <br />
                    Invest in minutes
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        lineHeight: "1.7",
                    }}
                >
                    A FEW MINUTES OF YOUR TIME = A FEW Hundred $$$
                    <br />
                    <br />
                    With our platform you can invest in{" "}
                    <em>WC-2022 National</em> teams <em>FAN TOKENS </em>
                    easily and with help of our assistants it's gonna be one of
                    the best money making experiences you could ever imagine
                </Typography>
                <Box>
                    <Button href="#reg" color="go" variant="contained">
                        GET STARTED
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                }}
            >
                <img
                    style={{
                        width: "500px",
                    }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/6359b43b5b5ed9cf2f39fa2d__3.gif"
                    alt=""
                />
            </Box>
        </Box>
    );
}
