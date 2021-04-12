import React, { useState, useEffect } from 'react';
import { DateInput, TimeInput, Select } from 'neetoui';
import { DatePicker } from "@blueprintjs/datetime";
import * as dayjs from "dayjs";

const DEFAULT_DATE_FORMAT = "MM-DD-YYYY";

const REMINDERS = [
  {
    id: 1,
    label: '5 Mins Before'
  },
  {
    id: 2,
    label: '10 Mins Before'
  },
  {
    id: 3,
    label: '1 Hour Before'
  },
  {
    id: 4,
    label: '2 Hours Before'
  },
]

const DateTimePicker = ({ task, setTask }) => {

  const { dueDate } = task;

  const { date, time, reminder } = dueDate || {};
  
  const minDate = dayjs("1960-01-01", "YYYY-MM-DD").toDate();
  const maxDate = dayjs("2050-01-01", "YYYY-MM-DD").toDate();
  const format = DEFAULT_DATE_FORMAT;

  const handleChange = (key, value) => {
    setTask({
      ...task,
      dueDate: {
        ...dueDate,
        [key]: value
      }
    })
  }

  return (
    <div className="grid w-full grid-cols-2 gap-6 pt-2 pb-6">
      <div className="flex flex-col items-stretch justify-start space-y-6">
        <DateInput
          label="Due Date"
          placeholder="01/01/2000"
          value={dayjs(date).toDate()}
          inputProps={{
            onChange: (e) => {
              const value = e.target.value;
              if (dayjs(value).isValid()) {
                handleChange('date', dayjs(value).toDate(DEFAULT_DATE_FORMAT))
              }
            }
          }}
          popoverProps={{
            isOpen: false
          }}
        />
        <TimeInput
          label="Time"
          placeholder="12:00"
          value={time}
          onChange={(time) => handleChange('time', time)}
        />
        <Select
          label="Reminder"
          placeholder="None"
          value={REMINDERS.find(item => item.id === reminder )}
          options={REMINDERS}
          onChange={(selected) => handleChange('reminder', selected.id)}
        />
      </div>
      <DatePicker
        value={dayjs(date).toDate()}
        minDate={minDate}
        maxDate={maxDate}
        formatDate={format}
        parseDate={(inputStr) =>
          inputStr
            ? dayjs(inputStr, format, true).isValid()
              ? dayjs(inputStr, format, true)
              : false
            : null
        }
        className="flex flex-row items-center justify-center"
        onChange={(date) => handleChange('date', dayjs(date).toDate(DEFAULT_DATE_FORMAT))}
      />
    </div>
  )
}

export default DateTimePicker
