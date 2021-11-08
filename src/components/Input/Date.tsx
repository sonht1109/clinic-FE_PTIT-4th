import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import Text from './Text';
import styled from 'styled-components';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { Locale } from 'date-fns';

export const dayPickerData = {
  currentYear: new Date().getFullYear(),
  fromMonth: new Date(1950, 0),
  toMonth: new Date(new Date().getFullYear() + 10, 11),
};

function parseDate(str: string, format: string, locale: Locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date: Date, format: string, locale: Locale) {
  return dateFnsFormat(date, format, { locale });
}

const {fromMonth, toMonth, currentYear} = dayPickerData;

// year month picker
function YearMonthForm({ date, localeUtils, onChange }: any) {
  const months = localeUtils.getMonths();
  // const t_month = useTranslations('global.select.month');

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i++) {
    years.push(i);
  }

  const handleChange = (e: any) => {
    const { year, month } = e.target.form;
    onChange(new Date(year?.value || currentYear, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month: string, i: number) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

export default function DatePicker(props: any) {
  const [month, setMonth] = useState(new Date());

  return (
    <SDatePicker>
      <DayPickerInput
        {...props}
        component={Text}
        format="dd/MM/y"
        hideOnDayClick
        formatDate={formatDate}
        parseDate={parseDate}
        inputProps={{
          readOnly: true,
        }}
        dayPickerProps={{
          ...props?.dayPickerProps,
          fromMonth,
          toMonth,
          month,
          captionElement: ({ date, localeUtils }) => (
            <YearMonthForm
              {...{ date, localeUtils }}
              onChange={(month: Date) => {
                setMonth(month);
              }}
            />
          ),
        }}
      />
    </SDatePicker>
  );
}

const SDatePicker = styled.div`
  .DayPickerInput {
    width: 100%;
  }
  .DayPicker-Caption {
    & > select {
      margin-right: 5px;
      padding: 5px;
    }
  }
`;