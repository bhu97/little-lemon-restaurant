import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Order from './Order';
export default function MainPage() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 4 }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems='center'>
          <Grid item xs>
            <Typography gutterBottom variant='h4' component='div'>
              Our Signature Menu
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant='h6' component='div'>
              starting from $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color='text.secondary' variant='body2'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider variant='middle' />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant='body1'>
          Popular cuisines
        </Typography>
        <Stack direction='row' spacing={1}>
          <Chip label='Pizza' />
          <Chip color='primary' label='Burger' />
          <Chip label='Rolls' />
          <Chip label='Salad' />
          <Chip label='Noodles' />
          <Chip label='Lasagna' />
          <Chip label='Pasta' />
        </Stack>
      </Box>
      <br />
      <Order />
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  );
}
