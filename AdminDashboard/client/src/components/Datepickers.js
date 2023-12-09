import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';

export default function Datepickers() {
  const [value, setValue] = useState(dayjs(new Date())); // Set initial value to current time
  const [exitvalue, setexitValue] = useState(dayjs().add(50, 'minute')); // Set initial value to current time
  console.log(exitvalue.hour());
  console.log(exitvalue.minute());
  localStorage.setItem('hour',JSON.stringify(exitvalue.hour()))
  localStorage.setItem('min',JSON.stringify(exitvalue.minute()))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'TimePicker']}>
        <TimePicker
          label="Entry Time"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          readOnly
        />
        <TimePicker
          label="Exit Time"
          value={exitvalue}
          onChange={(newexitValue) => setexitValue(newexitValue)}

        />
        
      </DemoContainer>
    </LocalizationProvider>
  );
}
