import styled from 'styled-components';

export const FeatureBoxContainer = styled.div `
    background-color: rgba(255,255,255,.8);
    font-size: 1.5rem;
    padding: 1.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,.15);
    transition: transform .3s;
    backface-visibility: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    backface-visibility: hidden;

    @media only screen and (max-width: 56.25em)  {
        padding: 2rem;
    }

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);
    }   
`;

export const SVGContainer = styled.svg `
    width: 64px;
    height: 64px;
    margin-bottom: .5rem;
    fill: blue;
    backface-visibility: hidden;


    @media only screen and (max-width: 56.25em) {
        margin-bottom: 0;
    }
`;