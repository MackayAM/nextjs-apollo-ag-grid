import { FunctionComponent } from 'react';
import { ITextField } from '../../types';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const BlinxTextFieldStyled = styled(({ ...props }) => (
  <TextField {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    marginRight: '10px',
    border: '1px solid #374171',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: '#374171'
    }
  }
})) as React.ComponentType<ITextField>;

const BlinxTextField: FunctionComponent<ITextField> = ({
  onChange,
  type,
  label,
  variant,
  disabled,
  ...props
}) => {
  return (
    <BlinxTextFieldStyled
      onChange={onChange}
      type={type}
      label={label}
      variant={variant}
      disabled={disabled}
      {...props}
    />
  );
};

export default BlinxTextField;
