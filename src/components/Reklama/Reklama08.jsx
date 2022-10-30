import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Reklama08() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
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
                    04
                    <br />
                    NFT Collections
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        lineHeight: "1.7",
                    }}
                >
                    YOU HAVE A CHANCE TO GET UNIQUE NFT TOKEN
                    <br />
                    <br />
                    With an investment in our platform we also provide you with
                    a great opportunity to get best moments of this World-Cup
                    2022 as an NFT Token
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
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/6359ba7825081c206c8fde8c_BvA6.gif"
                    alt=""
                />
            </Box>
        </Box>
    );
}
