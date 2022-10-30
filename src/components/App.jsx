import { Container } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Registration from "./Registration";
import Reklama from "./Reklama";
import Reklama09 from "./Reklama/Reklama09";
import Reklama10 from "./Reklama/Reklama10";

function App() {
    return (
        <>
            <Container
                maxWidth={"xl"}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "50px",
                }}
            >
                <Header />
                <Registration />
                <Reklama />
                <Container
                    sx={{
                        position: "sticky",
                        top: "500px",
                        display: "flex",
                        bgcolor: "#B5B69D",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "50px",
                    }}
                >
                    <Reklama09 />
                    <Reklama10 />
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default App;
