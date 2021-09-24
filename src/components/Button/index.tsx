import React, { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
type ClickProps = React.MouseEvent<HTMLButtonElement, MouseEvent>

export default function Button(props: ButtonProps) {
  function handleClick(event: ClickProps) {
    event.preventDefault();

    const { onClick } = props;

    if (onClick) onClick(event);
  }

  return (
    <ButtonWrapper onClick={(event) => handleClick(event)} {...props} />
  );
}
