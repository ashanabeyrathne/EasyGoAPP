import React from 'react'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import { Grid, makeStyles, Paper, TextField}from '@material-ui/core';
import Button from '@material-ui/core/Button';
import  {FormControl} from '@material-ui/core';


const useStyle = makeStyles (theme =>({
    root: {
        '& .MuiFormControl-root': {
            width: '200%',
            margin:theme.spacing(2),
           
        }

    }
}))


function PredictForm() {

       const [selectedDate, setSelectedDate] = React.useState(
           new Date ("2020-09-11T12:00:00")
       )

       const handleDateChange = (date) => {
           setSelectedDate(date)
       }

       
       const classes = useStyle();

    return (
<div>
 

    <FormControl className={classes.root} action="{{ url_for('predict')}}"method="post">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Paper>
      <Grid container>
     <KeyboardDatePicker 
        disableToolbar
        variant='outlined'
        format='MM/dd/yyyy'
        margin='normal'
        id='date-picker'
        label='Date'
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{'aria-label': 'change date'}}
        />

        <KeyboardTimePicker
        margin='normal'
        id='time-picker'
        label='Time'
        value={selectedDate}
        onChange={handleDateChange}
        keyboardButtonProps={{'aria-label':'change date'}}

          />
         <TextField
           variant="outlined"
           label="Traffic"
           
           />
            <TextField
           variant="outlined"
           label="Peak/Off-Peak"
           
           />
            <TextField
           variant="outlined"
           label="Route"
           
           />
           <TextField
           variant="outlined"
           label="Passengers"
           
           />

           <Button 
            type="submit"
            variant="contained"
            color="primary"
         
            
          >
            Predict
           </Button>
           

           </Grid>
           </Paper>
         </MuiPickersUtilsProvider>
           </FormControl>


</div>

    );
}

export default PredictForm;