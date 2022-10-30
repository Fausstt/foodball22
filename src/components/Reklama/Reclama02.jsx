import { Box, Typography } from "@mui/material";
import React from "react";

export default function Reclama02() {
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
            <Box sx={{ border: "8px dashed  ", width: "250px" }} />
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "4rem",
                    lineHeight: "1.2",
                }}
            >
                INVEST NOW <br /> TO GET.
                <br />
                <em>FREE TICKET.</em> LATER
            </Typography>
            <Box sx={{ border: "8px dashed  ", width: "350px" }} />
        </Box>
    );
}
