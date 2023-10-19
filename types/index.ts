import React, { MouseEventHandler } from "react";
//interface specifies how a specific structure should look like
export interface CustomButtonProps {
  isDisabled?: boolean;
  title: string;
  containerStyles?: string; //optional or string
  textStyles: string;
  rightIcon?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
