import { useMemo, useState } from "react";
import moment from "moment";

import { useBlur } from "hooks";
import { Calendar } from "styles/input";

interface Props {
  date?: string;
  minimumDate?: moment.MomentInput;
  maximumDate?: moment.MomentInput;
  onChoose: (date: string) => any;
  onClose: () => any;
}

export const CalendarInput = ({
  date,
  minimumDate = moment(),
  maximumDate = moment().add(15, "years"),
  onChoose,
  onClose,
}: Props) => {
  const [selectedDate, setSelectedDate] = useState(
    date
      ? moment(date).startOf("month").format()
      : moment().startOf("month").format()
  );
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < 42; i++) {
      const day = moment(selectedDate).day(0).add(i, "days").format();
      days.push(day);
    }
    return days;
  }, [selectedDate]);
  const calendarMonths = useMemo(() => {
    const months = [];
    const initialMonth = moment(selectedDate).startOf("year");
    for (let i = 0; i < 12; i++) {
      months.push(initialMonth.clone());
      initialMonth.add(1, "month");
    }
    const finalMonths = [];
    for (const month of months) {
      if (
        month.isSameOrAfter(moment(minimumDate).startOf("month")) &&
        month.isBefore(moment(maximumDate).endOf("month"))
      ) {
        finalMonths.push(month);
      }
    }
    return finalMonths;
  }, [minimumDate, maximumDate, selectedDate]);
  const calendarYears = useMemo(() => {
    const years = [];
    const currentYear = moment()
      .year(Number(moment(minimumDate).format("YYYY")))
      .startOf("month");
    while (currentYear.isBefore(maximumDate)) {
      years.push(currentYear.clone());
      currentYear.add(1, "year");
    }
    return years;
  }, [minimumDate, maximumDate]);

  const containerRef = useBlur(() => onClose());
  const monthsDropdownRef = useBlur(() => setShowMonthPicker(false));
  const yearsDropdownRef = useBlur(() => setShowYearPicker(false));

  return (
    <Calendar.OverlayContainer ref={(ref) => (containerRef.current = ref)}>
      <Calendar.HeaderContainer>
        <Calendar.PrevMonthButton
          onClick={() => {
            const nextMonth = moment(selectedDate)
              .subtract(1, "month")
              .format();
            setSelectedDate(nextMonth);
          }}
        />

        <div style={{ flex: 1 }} />

        <Calendar.DateToggle
          onClick={() => setShowMonthPicker(!showMonthPicker)}
        >
          {moment(selectedDate).format("MMM").toUpperCase()}
          {showMonthPicker && (
            <Calendar.DateDropdown
              ref={(ref) => (monthsDropdownRef.current = ref)}
            >
              {calendarMonths.map((calendarMonth) => {
                return (
                  <Calendar.DateOption
                    key={calendarMonth.format()}
                    onClick={() => {
                      setSelectedDate(calendarMonth.format());
                      setTimeout(() => setShowYearPicker(false), 100);
                    }}
                  >
                    {calendarMonth.format("MMM").toUpperCase()}
                  </Calendar.DateOption>
                );
              })}
            </Calendar.DateDropdown>
          )}
        </Calendar.DateToggle>

        <Calendar.DateToggle onClick={() => setShowYearPicker(!showYearPicker)}>
          {moment(selectedDate).format("YYYY")}
          {showYearPicker && (
            <Calendar.DateDropdown
              ref={(ref) => (yearsDropdownRef.current = ref)}
            >
              {calendarYears.map((calendarYear) => (
                <Calendar.DateOption
                  key={calendarYear.format("YYYY")}
                  onClick={() => {
                    setSelectedDate(calendarYear.format());
                    setTimeout(() => setShowYearPicker(false), 100);
                  }}
                >
                  {calendarYear.format("YYYY")}
                </Calendar.DateOption>
              ))}
            </Calendar.DateDropdown>
          )}
        </Calendar.DateToggle>

        <div style={{ flex: 1 }} />

        <Calendar.NextMonthButton
          onClick={() => {
            const nextMonth = moment(selectedDate).add(1, "month").format();
            setSelectedDate(nextMonth);
          }}
        />
      </Calendar.HeaderContainer>
      <Calendar.CalendarBody>
        <Calendar.WeekdayHeaders>
          {calendarDays.slice(0, 7).map((calendarDay) => (
            <Calendar.WeekdayLabel key={calendarDay}>
              {moment(calendarDay).format("dd")}
            </Calendar.WeekdayLabel>
          ))}
        </Calendar.WeekdayHeaders>
        <Calendar.DateGrid>
          {calendarDays.map((day, index) => {
            const isOnTheRange =
              moment(day).isSameOrAfter(moment(minimumDate).startOf("day")) &&
              moment(day).isSameOrBefore(moment(maximumDate).endOf("day"));
            const dayNumber = moment(day).format("D");
            const isCurrentMonth =
              moment(day).format("M") === moment(selectedDate).format("M");
            const isSelected =
              moment(date).startOf("day").format() ===
              moment(day).startOf("day").format();
            return (
              <Calendar.DateCell
                key={index}
                onClick={() => {
                  const newDate = moment(day).format();
                  onChoose(newDate);
                  setSelectedDate(newDate);
                }}
                muted={!isCurrentMonth}
                selected={isSelected}
                style={{
                  opacity: isOnTheRange ? 1 : 0.25,
                  pointerEvents: isOnTheRange ? "all" : "none",
                  filter: isOnTheRange ? "none" : "blur(2px)",
                }}
              >
                {dayNumber}
              </Calendar.DateCell>
            );
          })}
        </Calendar.DateGrid>
      </Calendar.CalendarBody>
    </Calendar.OverlayContainer>
  );
};
