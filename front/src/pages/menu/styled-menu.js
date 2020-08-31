import styled from "styled-components"
import { Colors } from "../../utils/styled-global"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.marrom};
`;
export const Menu = styled.div`
    display: grid;
    row-gap: 15px;
    grid-template-columns: 1fr;
`;
