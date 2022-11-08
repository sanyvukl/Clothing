import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

export const BUTTONS_TYPE_CLASSES = {
    "base": "base",
    "google": "google-sign-in",
    "inverted": "inverted",
};
const getButton = (buttonType = BUTTONS_TYPE_CLASSES.base) => {
    if (buttonType === BUTTONS_TYPE_CLASSES.base) {
        return BaseButton;
    }
    if (buttonType === BUTTONS_TYPE_CLASSES.google) {
        return GoogleSignInButton;
    }
    if (buttonType === BUTTONS_TYPE_CLASSES.inverted) {
        return InvertedButton;
    }
};

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return (<CustomButton {...otherProps}>{children}</CustomButton>);
};

export default Button;