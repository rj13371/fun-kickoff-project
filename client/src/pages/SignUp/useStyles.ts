import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 40,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 1000,
  },
}));

export default useStyles;
