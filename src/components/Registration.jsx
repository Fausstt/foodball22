import { Box, Typography } from "@mui/material";
import React from "react";
import RegistrationItem from "./RegistrationItem";

export default function Registration() {
    return (
        <Box
            id={"reg"}
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: "100px",
                padding: "20px 0",

                width: "100%",
                bgcolor: "#fff",
                borderRadius: "10px",
            }}
        >
            <Typography
                sx={{
                    display: { xs: "flex", md: "none" },
                    fontSize: "4rem",
                    fontWeight: "700",
                    fontFamily: "Gustavo Trial",
                }}
            >
                Registration
            </Typography>
            <img
                style={{ width: "300px" }}
                src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/635c3dbf3b44856d5b3c2c1f_2022_FIFA_World_Cup.svg-p-800.png"
                alt=""
            />
            <RegistrationItem />
        </Box>
    );
}
