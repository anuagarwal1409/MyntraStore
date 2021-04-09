import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Grid, Typography } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({

  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  
}));

export default function ReturnOtions() {
  const classes = useStyles();
  const [option, setOption] = React.useState('');
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <div>
      <Grid container>
      <Grid xs={6}>
      <InputLabel id="demo-customized-select-label" style={{color:"#fb56c1", fontWeight:'bold', paddingTop: '7px'}}>RETURN</InputLabel>
      </Grid>
      <Grid xs={6}>
      <FormControl size={'medium'}>

        <Select
          
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={option}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Store'}>
            <Typography>
              Store
            </Typography>
            </MenuItem>
          <MenuItem value={'Home Collection'}>Home Collection</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
    </div>
  );
}
