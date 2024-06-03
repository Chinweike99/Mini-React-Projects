import styled from "styled-components";
import OverviewComponent from "./overviewComponent";
import TransactionComponent from "./transactionComponent";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 10px;
`;

const HomeComponent = (props) => {
    return (
        <Container>
            HomeComponent
            <OverviewComponent />
            <TransactionComponent />
        </Container>
    );
};

export default HomeComponent;