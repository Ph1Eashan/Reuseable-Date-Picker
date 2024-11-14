// src/components/DateRangeSelector.js
import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const DateRangeSelector = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useDatePicker();

  return (
    <div className="mb-6 space-y-4">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Start Date</label>
        <input
          type="date"
          value={startDate.toISOString().slice(0, 10)}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">End Date (optional)</label>
        <input
          type="date"
          value={endDate ? endDate.toISOString().slice(0, 10) : ''}
          onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default DateRangeSelector;
