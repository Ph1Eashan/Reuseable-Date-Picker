import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern, customization, setCustomization } = useDatePicker();

  // Handle changes in the recurrence pattern
  const handleRecurrenceChange = (e) => {
    setRecurrencePattern(e.target.value);
  };

  // Handle changes to customization (e.g., every X days/weeks)
  const handleCustomizationChange = (e) => {
    const { name, value } = e.target;
    setCustomization(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Recurrence Pattern</label>
      <select
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={recurrencePattern}
        onChange={handleRecurrenceChange}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {/* Customization for interval */}
      <label className="block mt-4 text-sm font-medium text-gray-700">Every X</label>
      <input
        type="number"
        name="interval"
        value={customization.interval}
        onChange={handleCustomizationChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        min="1"
      />

      {/* Option to select specific days of the week */}
      {recurrencePattern === 'weekly' && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select Specific Days</label>
          <input
            type="checkbox"
            value="Monday"
            checked={customization.specificDays.includes('Monday')}
            onChange={(e) => {
              const day = e.target.value;
              const newDays = e.target.checked
                ? [...customization.specificDays, day]
                : customization.specificDays.filter(d => d !== day);
              setCustomization(prevState => ({ ...prevState, specificDays: newDays }));
            }}
          /> Monday
          <input
            type="checkbox"
            value="Tuesday"
            checked={customization.specificDays.includes('Tuesday')}
            onChange={(e) => {
              const day = e.target.value;
              const newDays = e.target.checked
                ? [...customization.specificDays, day]
                : customization.specificDays.filter(d => d !== day);
              setCustomization(prevState => ({ ...prevState, specificDays: newDays }));
            }}
          /> Tuesday
          <input
            type="checkbox"
            value="Wednesday"
            checked={customization.specificDays.includes('Wednesday')}
            onChange={(e) => {
              const day = e.target.value;
              const newDays = e.target.checked
                ? [...customization.specificDays, day]
                : customization.specificDays.filter(d => d !== day);
              setCustomization(prevState => ({ ...prevState, specificDays: newDays }));
            }}
          /> Wednesday
          <input
            type="checkbox"
            value="Thursday"
            checked={customization.specificDays.includes('Thursday')}
            onChange={(e) => {
              const day = e.target.value;
              const newDays = e.target.checked
                ? [...customization.specificDays, day]
                : customization.specificDays.filter(d => d !== day);
              setCustomization(prevState => ({ ...prevState, specificDays: newDays }));
            }}
          /> Thursday
          <input
            type="checkbox"
            value="Friday"
            checked={customization.specificDays.includes('Friday')}
            onChange={(e) => {
              const day = e.target.value;
              const newDays = e.target.checked
                ? [...customization.specificDays, day]
                : customization.specificDays.filter(d => d !== day);
              setCustomization(prevState => ({ ...prevState, specificDays: newDays }));
            }}
          /> Friday
          <input
            type="checkbox"
            value="Saturday"
            checked={customization.specificDays.includes('Saturday')}
            onChange={(e) => {
              const day = e.target.value;
              const newDays = e.target.checked
                ? [...customization.specificDays, day]
                : customization.specificDays.filter(d => d !== day);
              setCustomization(prevState => ({ ...prevState, specificDays: newDays }));
            }}
          /> Saturday
          <input
            type="checkbox"
            value="Sunday"
            checked={customization.specificDays.includes('Sunday')}
            onChange={(e) => {
              const day = e.target.value;
              const newDays = e.target.checked
                ? [...customization.specificDays, day]
                : customization.specificDays.filter(d => d !== day);
              setCustomization(prevState => ({ ...prevState, specificDays: newDays }));
            }}
          /> Sunday
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
