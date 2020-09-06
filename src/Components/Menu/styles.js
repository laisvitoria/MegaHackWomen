import Styles from 'styled-components'

export const Header = Styles.header`
    background-color: ${props => props.color};
    width:100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;