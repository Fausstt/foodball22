import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const style = {
    FextFiled: {
        bgcolor: "#E9F5FF",
    },
    form: { display: "flex", flexDirection: "column", gap: "10px" },
    Title: {
        display: { xs: "none", md: "flex" },
        fontSize: "4rem",
        fontWeight: "700",
    },
};

export default function RegistrationItem() {
    const [FastName, setFastName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const box = [
        {
            type: "text",
            label: "First Name",
            name: FastName,
            setName: setFastName,
        },
        {
            type: "text",
            label: "Last Name",
            name: LastName,
            setName: setLastName,
        },
        {
            type: "email",
            label: "Email",
            name: Email,
            setName: setEmail,
        },
        {
            type: "tel",
            label: "Phone",
            name: Phone,
            setName: setPhone,
        },
    ];

    const AddServer = (e) => {
        e.preventDefault();

        const token =
            "mVec2YGDK6LU9PiU4r8uBjGCP46nLHIjtVXy5h3rP583yeGvfowvx9A3TEVO";

        const data = {
            link_id: 3234,
            fname: FastName,
            email: Email,
            fullphone: Phone,
            source: "Foodball22",
            ip: "http://localhost:3000/",
        };
        axios({
            method: "post",
            url: `https://marketing.affboat.com/api/v3/integration?api_token=${token}`,
            data: data,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials": "true",
            },
        })
            .then((respnonse) => {
                console.log(respnonse);
            })
            .catch((error) => {
                console.log(error);
            });
        setFastName("");
        setLastName("");
        setEmail("");
        setPhone("");
    };

    return (
        <Box
            sx={{
                minWidth: "300px",
            }}
        >
            <Typography sx={style.Title}>Registration</Typography>
            <form onSubmit={AddServer} style={style.form}>
                {box.map((i) => (
                    <TextField
                        key={i.label}
                        onChange={(e) => i.setName(e.target.value)}
                        value={i.name}
                        required
                        sx={style.FextFiled}
                        variant="outlined"
                        size="small"
                        type={i.type}
                        label={i.label}
                    />
                ))}
                <Button type="submit" color="secondary" variant="contained">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
