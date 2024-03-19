import React from 'react';
import icons from './../../assets/images/icons.svg';

type IconPropsType = {
  iconId: string,
  width?: string,
  height?: string,
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg width={props.width || "32px"} height={props.height || "32px"} >
      <use xlinkHref={`${icons}#${props.iconId}`} />
    </svg>
  );
};