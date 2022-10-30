import { Box, Button, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";

export default function Reklama03() {
    return (
        <Box
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <img
                    style={{ width: "15%" }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c9b09925d16_Vectorzora%20logo%20grey.svg"
                    alt=""
                />
                <img
                    style={{ width: "15%" }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c1803925d1a_logo-full-purplelogo%20partners%20grey.svg"
                    alt=""
                />
                <img
                    style={{ width: "15%" }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c11bd925d17_gemini-ar21svglogo%20partners%20grey.svg"
                    alt=""
                />
                <img
                    style={{ width: "15%" }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c7ebf925d18_Frame%201logo%20partners%20grey.svg"
                    alt=""
                />
                <img
                    style={{ width: "15%" }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/63599ef9c9467c31ab925d19_Layer%201logo%20partners%20grey.svg"
                    alt=""
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "100px",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Typography
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                        fontSize: "4rem",
                        lineHeight: "1.2",
                        fontWeight: "700",
                    }}
                >
                    Powerful
                    <br />
                    <em style={{ color: "#7CBBFF" }}>WC-2022 Fan Token</em>
                    <br /> Investment platform
                </Typography>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "500",
                            fontSize: "1rem",
                            paddingBottom: "20px",
                        }}
                    >
                        While you seat near your TV watching
                        <br /> WC-2022 for free
                        <br />
                        you can make profit with us
                    </Typography>
                    <Button href="#reg" variant="contained" color="go">
                        GET STARTED
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        sx={{
                            mb: "8px",
                            fontSize: "40px",
                            lineHeight: "48px",
                            fontWeight: "600",
                        }}
                    >
                        $500
                    </Typography>
                    <Typography>
                        Amount of people
                        <br />
                        who have already invested
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        sx={{
                            mb: "8px",
                            fontSize: "40px",
                            lineHeight: "48px",
                            fontWeight: "600",
                        }}
                    >
                        12k+
                    </Typography>
                    <Typography>Average invest amount</Typography>
                </Box>
            </Box>
        </Box>
    );
}
