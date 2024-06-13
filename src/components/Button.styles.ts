import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' |'sucess';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'yellow',
    danger: 'red',
    sucess: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 50px;

    
    ${props => {
        return css
        `background-color: ${buttonVariants[props.variant]}`
    }}
`   