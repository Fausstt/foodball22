import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Reklama07() {
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
                    03
                    <br />
                    Reward System
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        lineHeight: "1.7",
                    }}
                >
                    Learn about crypto assets by taking lessons with our
                    educational platform, test your knowledge by completing our
                    quiz and earn crypto. Void has partnered with trusted &
                    emerging projects to offer an easy way to learn about
                    cryptocurrency.
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
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/635c312bf84c3c0161e55cc5_pngegg%20(1)-p-800.png"
                    alt=""
                />
            </Box>
        </Box>
    );
}
