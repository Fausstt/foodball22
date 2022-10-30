import { Box, Typography } from "@mui/material";
import React from "react";

export default function Reklama04() {
    return (
        <Box
            id="aboutUS"
            sx={{
                display: { xs: "none", md: "flex" },
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
                sx={{ fontSize: "5rem", lineHeight: "1.1", fontWeight: "700" }}
            >
                Founder statement
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "50px",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1rem",
                        lineHeight: { md: "2" },
                        fontWeight: "600",
                        width: { xs: "auto", md: "500px" },
                    }}
                >
                    Crypto investing is the future of online investing.
                    <br />
                    ‍<br />
                    Our platform provides users with the ability to invest in
                    the most promising upcoming digital assets like
                    <em>WORLD-CUP 2022</em> National teams fan tokens.
                    <br />
                    <br />
                    We offer a simple and convenient way to invest, with a
                    user-friendly interface that makes it easy to get started.
                    <br />
                    <br />
                    With our platform, you can be a part of the future of
                    finance.
                    <br />
                    <br />
                    <br />
                    Bill Sendman
                </Typography>
                <img
                    style={{ width: "400px" }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/6359be6371dde56026d05b6f_Eric-McDonald-Docutap-Apr%2021.jpeg"
                    alt=""
                />
            </Box>
        </Box>
    );
}
