import { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: ButtonProps) {
  return (
    <ButtonWrapper {...props} />
  );
}
