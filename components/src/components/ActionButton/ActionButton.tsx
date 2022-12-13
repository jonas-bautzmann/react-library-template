import './ActionButton.css';
import { ActionButtonVariant } from './ActionButton.model';
import React, { ButtonHTMLAttributes } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ActionButtonVariant;
}

const ActionButton = ({
  variant = 'default',
  ...props
}: ActionButtonProps): JSX.Element => (
  <button {...props} className={`action-button action-button--${variant}`}>
    {props.children}
  </button>
);

export default ActionButton;
