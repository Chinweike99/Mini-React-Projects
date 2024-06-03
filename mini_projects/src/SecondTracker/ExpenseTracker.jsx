import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0;
    height: 100vh;
`;

const Header = styled.span`
    color: #333;
    font-size: 35px;
    font-weight: 600;
`;

function Tracker(){
    return (
        <Container>
            <Header>Expense Tracker</Header>
            <HomeComponent />
        </Container>
    )
}

export default Tracker;