export const appStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  minHeight: '100vh',
  color: 'inherit',
  textAlign: 'center',
};

export const inputStyles: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  outline: 'none',
  width: '80%',
  maxWidth: '400px',
};

export const buttonStyles: React.CSSProperties = {
  borderRadius: '8px',
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontWeight: '500',
  fontFamily: 'inherit',
  backgroundColor: '#1a1a1a',
  color: 'rgba(255, 255, 255, 0.87)',
  cursor: 'pointer',
  transition: 'border-color 0.25s',
  margin: '10px 8px 8px 0',
};

export const buttonCompleteStyles: React.CSSProperties = {
  ...buttonStyles,
  backgroundColor: '#4caf50',
  color: '#ffffff',
};

export const buttonDeleteStyles: React.CSSProperties = {
  ...buttonStyles,
  backgroundColor: '#f44336',
  color: '#ffffff',
};

export const itemStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
  maxWidth: '400px',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '5px',
  background: '#ffffff',
  color: '#242424',
  textAlign: 'left',
};
