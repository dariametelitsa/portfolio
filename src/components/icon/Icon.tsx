import React from 'react';
import icons from './../../assets/images/icons.svg';
import { IconProps } from "../../assets/Types";

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg width={props.width || "32px"} height={props.height || "32px"} >
      <use xlinkHref={`${icons}#${props.iconId}`} />
    </svg>
  );
};