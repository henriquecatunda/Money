import React from 'react';
import { ButtonLink,Title } from "./styles"

export default function Button(props) {

    const { title,icon, onClick } = props;

    return (
        <ButtonLink onClick={onClick} >
            <Title> {title} </Title>
            <img src={icon} alt="" />
        </ButtonLink>

    );

}
