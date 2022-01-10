import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkComponent } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  linkText: string;
}

const AuthFooter = ({ linkTo, asideText, linkText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      p={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginRight={5}
      className={classes.authHeader}
    >
      <Typography className={classes.accAside}>{asideText}</Typography>
      <Link component={LinkComponent} to={linkTo} color="inherit" className={classes.linkText}>
        {linkText}
      </Link>
    </Box>
  );
};

export default AuthFooter;
