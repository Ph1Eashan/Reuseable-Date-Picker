import "../app/globals.css"
import { DatePickerProvider } from '../context/DatePickerContext';
import DatePicker from '../components/DatePicker';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My App</title>
      </head>
      <body>
        <DatePickerProvider>
          <DatePicker/>
          {/* {children} Render any page-specific content inside the body */}
        </DatePickerProvider>
      </body>
    </html>
  );
}