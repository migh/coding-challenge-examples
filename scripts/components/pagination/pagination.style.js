import { button, emoji } from '../../../style/common.style';

export const rootStyle = {
  ...emoji
};

export const buttonStyle = {
  ...button,
  border: 'none',
  cursor: 'pointer'
};

export const interactiveButtonStyle = ({ active }) => ({
  display: 'inline-block',
  '& button': {
    ...buttonStyle,
    textDecoration: active ? 'underline' : 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
});
