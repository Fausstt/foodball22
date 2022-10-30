import { Box, Typography } from "@mui/material";
import React from "react";

const box = [
    {
        title: "Marry Kally",
        body: "Marry Kally has already maid a huge profit of about $20k at the previous World-Cup and now she has bigger budget to invest and ready to make big money again",
        img: "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/6359c28534e634480f482e4b_Meet-People-Online.jpeg",
    },
    {
        title: "John Hoban",
        body: "John decided to join us an early investor when our company was just growing and didn't have much money but now he is a successful businessman that makes hundreds of thousands per month because he knows how to use hype events and crypto",
        img: "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/6359c33698f35064b1893924_could-a-depression-chat-room-be-right-for-you--1-SR-p-500.jpeg",
    },
    {
        title: "Jack Jakson",
        body: "Jack Jackson is the type of person who is not a fan trying something new or investing in projects but our platform ones changed his mind and now he is doing his favorite job and has a good amount of money for future",
        img: "https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/6359c3cf7ae0eda1c8729f86_2107-softwareentwicklung_kyo618.jpeg",
    },
];

export default function Reklama10() {
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
                bgcolor: "#F5F7FA",
                borderRadius: "10px",
            }}
        >
            <Typography
                sx={{
                    color: "#00E3FF",
                    fontSize: "4rem",
                    fontWeight: "700",
                    lineHeight: "1.2",
                }}
            >
                START INVESTING NOW
            </Typography>
            <Typography
                sx={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    lineHeight: "1.7",
                }}
            >
                Story of those who invested and didn't fail with their choice
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "50px",
                }}
            >
                {box.map((i) => (
                    <Box
                        key={i.title}
                        sx={{
                            width: "300px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "20px",
                            bgcolor: "#fff",
                        }}
                    >
                        <img style={{ width: "300px" }} src={i.img} alt="" />
                        <Typography
                            sx={{
                                fontSize: "2.25rem",
                                lineHeight: "1.5",
                                fontWeight: "700",
                            }}
                        >
                            {i.title}
                        </Typography>
                        <Typography sx={{ m: "5px" }}>{i.body}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
