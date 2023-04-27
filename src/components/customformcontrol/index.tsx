import { FC } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { onlyNumbers } from 'helpers/Number.helper';
import { formatRut } from 'helpers/Rut.helper';

import { CustromFormControlProps } from './typex';

// Component custom form control with functions for onchange according to type of input

const CustomFormControl: FC<CustromFormControlProps> = ({
  id,
  label,
  formik,
  placeholder,
  isRequired,
  type,
  disabled,
  withColor,
  maxLength,
  value,
  ...rest
}) => {
  const errors = formik.errors as Record<string, string>; // errors in the formik hook
  const touched = formik.touched as Record<string, boolean>;

  return (
    <FormControl isInvalid={(!!errors[id] && !!touched[id]) ?? false} {...rest}>
      <FormLabel fontSize={'12px'} color={withColor ? 'gray.800' : '#FFF'}>
        {label || '#'}
      </FormLabel>
      <Input
        bg="#FFF"
        maxLength={maxLength}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onBlur={formik.handleBlur}
        onChange={e => {
          // onChange for plate id
          if (id === 'plate') {
            e.target.value = e.target.value.toUpperCase();
            formik.handleChange(e);
          }
          // onChange for identifier id
          if (id !== 'identifier') formik.handleChange(e);
          else {
            if (formik.values?.documentType === 'Rut')
              e.target.value = formatRut(e.target.value, true).toUpperCase();
            formik.handleChange(e);
          }
          // onChange for number type
          if (type === 'number') {
            e.target.value = onlyNumbers(e.target.value);
            formik.handleChange(e);
          }
        }}
        disabled={disabled}
        value={value ? value : (formik?.values[id] as string)}
      />
      <FormErrorMessage>{errors[id]}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomFormControl;
