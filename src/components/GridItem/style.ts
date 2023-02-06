import styled from "styled-components";

type ContainerProps = {
    shownBackground: boolean
}

type IconProps = {
    opacity?: number
}
export const container = styled.div<ContainerProps>`
border-radius: 10px;
height: 100px;
display:flex;
justify-content: center;
align-items: center;
background-color: ${props => props.shownBackground ? '#1550FF':'#E2E3E3' }
`

export const Icon = styled.img<IconProps>`
max-width: 55%;
opacity:  ${props => props.opacity ?? 1 }

`