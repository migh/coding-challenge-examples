const gap = '8px';
const size = `calc(33.33% - ${gap})`;

// Width will be a bit bigger for the center column
export const rootStyle = {
  width: '100%',
  height: '80vh',
  textAlign: 'center',
  display: 'grid',
  gridTemplateColumns: `${size} auto ${size}`,
  gridTemplateRows: '32% 32% 32%',
  gridColumnGap: gap,
  gridRowGap: '2%'
};

export const cardStyle = {
  border: '1px solid black',
  boxShadow: '0 0 5px #bbbbbb',
  padding: '12px',
  overflowY: 'hidden'
};

export const cardTitleStyle = {
  marginTop: '12px',
  textTransform: 'capitalize',
  fontSize: '1.2em'
};

export const imageHolderStyle = {
  display: 'inline-block',
  width: '150px',
  height: '150px',
  backgroundColor: '#eeeeee'
};

export const titleHolderStyle = {
  display: 'inline-block',
  marginTop: '12px',
  width: '80%',
  height: '20px',
  backgroundColor: '#eeeeee'
};
