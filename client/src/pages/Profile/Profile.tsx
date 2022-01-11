import React, { ReactElement, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/useAuthContext';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//not sure how to pass in our mongoose schemas into the User interface
interface Profile {
  first_name?: string;
  last_name?: string;
  description?: string;
  location?: string;
  Availability?: [from: Date, to: Date];
  gender?: string;
}

interface Props {
  Profile: Profile;
}

export default function Profile({}: Props): ReactElement {
  const [profile, setProfile] = useState<Profile>({});

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    if (loggedInUser) {
      console.log(loggedInUser);
    }
  }, [loggedInUser]);

  return (
    <Grid maxHeight={500} container direction="column" spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box maxHeight={500} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Box height="100%" maxHeight={500} width="100%" maxWidth={600} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography component="h1" variant="h3">
                  Profile
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
