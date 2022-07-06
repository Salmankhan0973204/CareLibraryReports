import { Grid } from '@mui/material';
import * as React from 'react';

interface IDashboardProps {
   
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  return (<>
  <Grid item lg={12} container spacing={2}>
    <Grid item lg={3}>
        <h1  style={{backgroundColor:'yellow'}}  className='cards'>hello</h1>
    </Grid>
    <Grid item lg={3}>
        <h1 style={{backgroundColor:'red'}}  className='cards'>hello</h1>
    </Grid>
    <Grid item lg={3}>
        <h1  style={{backgroundColor:'yellow'}}  className='cards'>hello</h1>
    </Grid>
    <Grid item lg={3}>
        <h1 style={{backgroundColor:'red'}}  className='cards'>hello</h1>
    </Grid>

  </Grid>


  </>)
};

export default Dashboard;
