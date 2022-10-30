import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Reklama06() {
    return (
        <Box
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
                    02
                    <br />
                    Passive income system
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        lineHeight: "1.7",
                    }}
                >
                    WE CREATE YOU A PERFECT PASSIVE INCOME
                    <br />
                    <br />
                    Most of people don't even understand that while just sitting
                    on sofa watching <em>WorldCup-2022 </em> for free they lose
                    such an opportunity to lose money
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
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/6359b9c3616a3a36df638fa0_istockphoto-1149954008-612x612.jpeg"
                    alt=""
                />
            </Box>
        </Box>
    );
}
