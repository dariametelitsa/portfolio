import React from 'react';
import { S } from "./tagCloud_Styles";

export const TagCloud = (props: {tags: Array<string>}) => {
    return (
        <S.TagCloud>
            {
                props.tags.map((el:string) => {
                    return (<span>{el}</span>);
                })
            }
        </S.TagCloud>
    );
};

