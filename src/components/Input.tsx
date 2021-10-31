import cx from 'classnames';
import React, { forwardRef, HTMLProps } from 'react';
import { Input as ChakraInput } from "@chakra-ui/react"

type InputProps = HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <ChakraInput
    {...props}
    ref={ref}
  />
));

export default Input;
