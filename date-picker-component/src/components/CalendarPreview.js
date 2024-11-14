// src/components/CalendarPreview.js
export default function CalendarPreview({ recurringDates }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentMonth = new Date();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const startDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const calendarGrid = [...Array(startDayOfMonth)].concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mini Calendar Preview</h2>

      {/* Days of the week header */}
      <div className="grid grid-cols-7 gap-2 text-center mb-4">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-sm font-semibold text-gray-700">{day}</div>
        ))}
      </div>

      {/* Calendar grid with recurring dates */}
      <div className="grid grid-cols-7 gap-2">
        {calendarGrid.map((date, index) => {
          if (!date) return <div key={index} className="w-8 h-8"></div>;

          const isRecurring = recurringDates.some(
            (recurringDate) => recurringDate.getDate() === date
          );

          return (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex  items-center justify-center cursor-pointer transition-colors text-center ${
                isRecurring ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-transparent hover:bg-gray-200'
              }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
}
