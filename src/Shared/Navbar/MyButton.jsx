import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const MyButton = styled(Button)(() => ({
  backgroundColor: '#EB6753',
  padding : '8px 20px',
  color: 'white',
  '&:hover': {
    backgroundColor: '#EB6753 !important',
  },
}));

export default MyButton;