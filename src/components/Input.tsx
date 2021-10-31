import cx from 'classnames';
import React, { forwardRef, HTMLProps } from 'react';

type InputProps = HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    {...props}
    className={cx('chakra-input', props.className)}
    ref={ref}
  />
));

export default Input;
