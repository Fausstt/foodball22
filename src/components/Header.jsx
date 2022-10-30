import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";

export default function Header() {
    return (
        <AppBar
            position="sticky"
            sx={{
                display: { xs: "none", md: "flex" },
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button href="#aboutUS" color="secondary" variant="contained">
                    Adout us
                </Button>
                <Button href="#supported" color="secondary" variant="contained">
                    WE ARE SUPPORTED
                </Button>
                <img
                    style={{ width: "100px" }}
                    src="https://uploads-ssl.webflow.com/63599ef8c9467c2c52925cf1/635c1e8b652f115be52f1479_pngwing.com.png"
                    alt=""
                />
                <Button href="#docs" color="secondary" variant="contained">
                    Docs
                </Button>
                <Button href="#reg" color="go" variant="contained">
                    GET STARTED
                </Button>
            </Toolbar>
        </AppBar>
    );
}
