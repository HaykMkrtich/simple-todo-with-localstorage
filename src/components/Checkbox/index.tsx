import styles from './Checkbox.module.scss';
import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';

interface CheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

function Checkbox({ onChange, ...props }: CheckboxProps): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);
  return (
    <label className={cn(styles.wrapper, { [styles.checked]: checked })}>
      <input
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange && onChange(e);
        }}
        {...props}
      />
    </label>
  );
}

export default Checkbox;
