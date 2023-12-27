"use client";

import { CustomDate } from '@/api/appointment';
import React from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  enabledDates?: CustomDate[],
  disabled?: boolean,
  selectedDate: Date | undefined,
  setSelectedDate: (date: Date | undefined) => void,
}

export const CustomDatePicker: React.FC<Props> = ({ disabled, enabledDates, selectedDate, setSelectedDate }) => {
  const isDateEnabled = (date: Date) => {
    const currentDate = new Date().setHours(0, 0, 0, 0);

    if (date.setHours(0, 0, 0, 0) >= currentDate) {
      for (const enabledDate of enabledDates || []) {
        if (new Date(enabledDate.name).setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)) {
          return true;
        }
      }
    }
    return false
  };

  return (
    <DatePicker
      disabled={disabled}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date!)}
      filterDate={isDateEnabled}
      nextMonthButtonLabel=">"
      previousMonthButtonLabel="<"
    />
  );
};