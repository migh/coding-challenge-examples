import { button, emoji } from '../../../style/common.style';

export const arrowStyle = {
  ...emoji
};

export const rootStyle = {
  '& button': {
    ...button,
    ':hover': {
      textDecoration: 'underline'
    }
  }
};
