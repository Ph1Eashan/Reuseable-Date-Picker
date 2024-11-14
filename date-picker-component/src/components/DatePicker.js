'use client'
// src/components/DatePicker.js
import { useState, useEffect } from 'react';
import { useDatePicker } from '../context/DatePickerContext';
import DateRangeSelector from './DateRangeSelector';
import CalendarPreview from './CalendarPreview';

export default function DatePicker() {
  const {
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
    calculateRecurringDates,
  } = useDatePicker();

  const [recurringDates, setRecurringDates] = useState([]);

  useEffect(() => {
    // Calculate the recurring dates whenever the recurrence settings change
    const dates = calculateRecurringDates();
    setRecurringDates(dates);
  }, [startDate, endDate, recurrencePattern, interval, specificDays, nthDay, calculateRecurringDates]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Set Recurring Dates</h2>

      {/* Date Range Selector */}
      <DateRangeSelector />

      {/* Recurrence Pattern */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Recurrence Pattern</label>
        <select
          value={recurrencePattern}
          onChange={(e) => setRecurrencePattern(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Interval */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Interval (Every X)</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Specific Days (for weekly recurrence) */}
      {recurrencePattern === 'weekly' && (
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Specific Days</label>
          <input
            type="text"
            value={specificDays.join(', ')}
            onChange={(e) => setSpecificDays(e.target.value.split(',').map(Number))}
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g., 0 for Sunday, 1 for Monday"
          />
        </div>
      )}

      {/* Nth Day of the Month (for monthly recurrence) */}
      {recurrencePattern === 'monthly' && (
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Nth Day of the Month</label>
          <input
            type="number"
            value={nthDay || ''}
            onChange={(e) => setNthDay(Number(e.target.value))}
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g., 2 for the second day"
          />
        </div>
      )}

      {/* Show the mini calendar preview */}
      <CalendarPreview recurringDates={recurringDates} />
    </div>
  );
}
