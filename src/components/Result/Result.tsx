import React from "react";

interface Props {
    rate: number;
    givenNumber: number;
}

function Result(props: Props) {
    return (
        <p>Wynik: {(props.rate * props.givenNumber).toFixed(2)}</p>
    )
}

export default Result;