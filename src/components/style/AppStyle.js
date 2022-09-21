import styled from "styled-components";

const AppStyle = styled.div`
margin: 1rem;
font-size: 1.2rem;

.container-tracker{
    display: grid;
    grid-gap: 1rem;
}
.box-tracker{
    padding: 2rem;
    border-radius: 0.5rem;
}
.budget{
    background-color: #BEBEBE
}
.remaining{
    background-color: #abd699;
}
.spent{
    background-color: #ffe26a;
}
`;

export default AppStyle;
