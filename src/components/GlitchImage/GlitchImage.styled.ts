import styled, { css } from "styled-components";


export const GlitchImageStyled = styled.div<{ width: number | string }>`
    width: ${props => typeof props.width === "number" ? `${props.width}rem` : props.width};
    position: relative;
    img, canvas {
        width: 100%;
    }
    canvas {
        height: 100%;
    }
`




export const ImgGlitch = styled.div<{$index: number, $prom: number, $opacity: number }>`
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    animation-iteration-count: infinite;
    animation-duration: 150ms;
    animation-fill-mode: forwards;
    height:  ${props => props.$prom}%;
    top:  ${props => props.$prom * props.$index}%;
    opacity: 0;
    z-index: 2;
    div {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    img {
        top: -${props => props.$index * 100}%;
        opacity: ${props => props.$opacity};
    }
    canvas {
        opacity: ${props => props.$opacity};
    }
`

export const ImgGlitchBase = styled(ImgGlitch)`
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    opacity: 0;
    animation-duration: 150ms;
    z-index: 0;
    img, canvas {
        opacity: 1;
        transform: none;
        filter: unset !important;
    }
`

export const DivGlitchSection = styled.div<{ $inside: boolean, $variations: Array<number>, $activeFxOnHover: boolean}>`
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${props => props.$inside && css`
        overflow: hidden;
    `} 
    img, canvas {
        position: absolute;
    }
    ${props => !props.$activeFxOnHover && css`
        pointer-events: none;
    `};
    &.GlitchImageActive {
        ${ImgGlitch} {
            animation-name: GlitchImage-glitch1;
            z-index: ${props => props.$inside ? 2 : 0};
            opacity: 1;
            &:nth-child(odd) {
                animation-name: GlitchImage-glitch2;
            }
        }
        ${ImgGlitchBase} {
            opacity: 1;
            animation-name: GlitchImageBase-glitch1;
            &:nth-child(odd) {
                animation-name: GlitchImageBase-glitch2;
            }
        }
    }
   

    @keyframes GlitchImage-glitch1 {
        ${props => props.$variations && css`
            0% { 
                margin-left: ${1 * props.$variations[0]}%;
                margin-bottom: ${0.05 * props.$variations[0]}%;
                opacity: 1;
            }
            20% {
                margin-left: ${-3 * props.$variations[0]}%;
                margin-bottom: ${-0.1 * props.$variations[0]}%;
            }
            40% {
                margin-left: ${3 * props.$variations[0]}%;
                margin-bottom: ${0.05 * props.$variations[0]}%;
            }
            60% {
                margin-left: ${-1 * props.$variations[0]}%;
                margin-bottom: ${0.1 * props.$variations[0]}%;
            }
            74% {
                opacity: 1;
            }
            75% {
                opacity: 0;
            }
            80% {
                margin-left: 0;
                margin-bottom: 0;
            }
            85% {
                opacity: 1;
            }
            100% {
                margin-left: ${0.35 * props.$variations[0]}%;
                margin-bottom: ${-0.05 * props.$variations[0]}%;
            }
        `}
    }
    @keyframes GlitchImage-glitch2 {
        ${props => props.$variations && css`
            0% { 
                margin-left: ${-3 * props.$variations[0]}%;
                opacity: 1;
            }
            20% {
                margin-left: ${2 * props.$variations[0]}%;
            }
            34% {
                opacity: 1;
            }
            35% {
                opacity: 0;
            }
            40% {
                margin-left: 0;
            }
            45% {
                opacity: 1;
            }
            60% {
                margin-left: ${3 * props.$variations[0]}%;
            }
            80% {
                margin-left: ${-3 * props.$variations[0]}%;
            }
            100% {
                margin-left: ${3.2 * props.$variations[0]}%;
            }
        `}
    }
    @keyframes GlitchImageBase-glitch1 {
        ${props => props.$variations && css`
            0% {
                margin-left: ${0.5 * props.$variations[1]}%;
            }
            20% {
                margin-left: ${-1 * props.$variations[1]}%;
            }
            40% {
                margin-left: ${1 * props.$variations[1]}%;
            }
            60% {
                margin-left: ${-1 * props.$variations[1]}%;
            }
            80% {
                margin-left: 0;
            }
            100% {
                margin-left: ${0.35 * props.$variations[1]}%;
            }
        
        `}
     
    }
    @keyframes GlitchImageBase-glitch2 {
        ${props => props.$variations && css`
            0% {
                margin-left: ${-1 * props.$variations[1]}%;
            }
            20% {
                margin-left: ${1 * props.$variations[1]}%;
            }
            40% {
                margin-left: 0;
            }
            60% {
                margin-left: ${1 * props.$variations[1]}%;
            }
            80% {
                margin-left: ${-1 * props.$variations[1]}%;
            }
            100% {
                margin-left: ${0.5 * props.$variations[1]}%;
            }
        `}   
    }
`




