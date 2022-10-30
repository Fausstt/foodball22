import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const box = [
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c1159925d11_5f6294c0c7a8cda55cb1c936_Flow_Wordmark.svg",
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c6da5925d12_ethereum-logo-landscape-black.png",
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c6e6f925d13_5dec8960504967fd31147f62_Stellar_lockup_black_RGB.svg",
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467cf28c925d0f_polygon-logo.99647ca.svg",
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467cffac925d10_algorand_full_logo_black.svg",
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467cb962925d0e_628692ef60aae304a6b31b36_avalanche-logo.svg",
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c5bff925d15_bitcoin.svg",
    "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c9163925d14_solana.svg",
];

export default function Reklama09() {
    return (
        <Box
            id="supported"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
                padding: "20px 0",

                width: "100%",
                bgcolor: "#fff",
                borderRadius: "10px",
            }}
        >
            <Typography
                sx={{
                    width: "100%",
                    fontSize: "4rem",
                    lineHeight: "1.2",
                    fontWeight: "700",
                }}
            >
                WE ARE SUPPORTED BY
            </Typography>
            <Grid container spacing={5}>
                {box.map((i) => (
                    <Grid
                        key={i}
                        item
                        md={3}
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid",
                                borderRadius: "0 10px 0 10px",
                                width: "250px",
                                height: "100px",
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: "rgba(255,126,112,0.3)",
                                },
                            }}
                        >
                            <img style={{ width: "150px" }} src={i} alt="" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
