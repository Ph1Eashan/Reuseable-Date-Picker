'use client';

// src/context/DatePickerContext.js
import React, { createContext, useState, useContext, useCallback } from 'react';

const DatePickerContext = createContext();

export const useDatePicker = () => useContext(DatePickerContext);

export const DatePickerProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null); // Optional end date
  const [recurrencePattern, setRecurrencePattern] = useState('daily'); // daily, weekly, monthly, yearly
  const [interval, setInterval] = useState(1); // Every 'X' days, weeks, months, or years
  const [specificDays, setSpecificDays] = useState([]); // For weekly recurrence: an array of days (e.g., [0, 2, 4] for Mon, Wed, Fri)
  const [nthDay, setNthDay] = useState(null); // For monthly recurrence: nth day of the month (e.g., 2 for second Tuesday)
  
  // Function to calculate recurring dates
  const calculateRecurringDates = useCallback(() => {
    let dates = [];
    let currentDate = new Date(startDate);

    // Ensure the current date is always valid
    if (endDate && currentDate > endDate) return dates;

    // Calculate recurring dates based on the selected pattern and interval
    switch (recurrencePattern) {
      case 'daily':
        while (currentDate <= endDate || !endDate) {
          dates.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + interval); // Move to next occurrence
        }
        break;

      case 'weekly':
        while (currentDate <= endDate || !endDate) {
          dates.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + interval * 7); // Move by weeks
        }
        break;

      case 'monthly':
        while (currentDate <= endDate || !endDate) {
          dates.push(new Date(currentDate));

          // Move to next month, adjust to nth day if needed
          currentDate.setMonth(currentDate.getMonth() + interval);
          if (nthDay) {
            currentDate.setDate(nthDay);
          }
        }
        break;

      case 'yearly':
        while (currentDate <= endDate || !endDate) {
          dates.push(new Date(currentDate));
          currentDate.setFullYear(currentDate.getFullYear() + interval); // Move by years
        }
        break;

      default:
        break;
    }

    return dates;
  }, [startDate, endDate, recurrencePattern, interval, specificDays, nthDay]);

  return (
    <DatePickerContext.Provider value={{ 
      startDate, 
      setStartDate, 
      endDate, 
      setEndDate, 
      recurrencePattern, 
      setRecurrencePattern, 
      interval, 
      setInterval, 
      specificDays, 
      setSpecificDays, 
      nthDay, 
      setNthDay, 
      calculateRecurringDates 
    }}>
      {children}
    </DatePickerContext.Provider>
  );
};
