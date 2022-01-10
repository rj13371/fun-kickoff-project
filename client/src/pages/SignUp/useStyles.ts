import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      fontSize: 40,
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
