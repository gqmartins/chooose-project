namespace WorkdayNet;

public class WorkdayCalendar : IWorkdayCalendar
{
    private int _startHours;
    private int _startMinutes;
    private int _stopHours;
    private int _stopMinutes;
    private decimal _workdayMinutes;
    private readonly List<DateTime> _oneTimeHolidays = new();
    private readonly List<DateTime> _recurringHolidays = new();

    public DateTime GetWorkdayIncrement(DateTime startDate, decimal incrementInWorkdays)
    {
        var increment = incrementInWorkdays > 0;
        var currentDate = ResetStartDay(startDate, increment);
        var totalMinutesToIncrement = incrementInWorkdays * _workdayMinutes;

        while(true)
        {
            if (IsHoliday(currentDate) || IsWeekend(currentDate))
            {
                currentDate = RestartDay(currentDate, increment);
                continue;
            }

            var remaningMinutesInDay = GetRemainingMinutes(currentDate, increment);
            if (increment)
            {
                if (remaningMinutesInDay > totalMinutesToIncrement)
                {
                    return currentDate.AddMinutes((double) totalMinutesToIncrement);
                }
                else
                {
                    totalMinutesToIncrement -= remaningMinutesInDay;
                }
            }
            else
            {
                if (remaningMinutesInDay < (totalMinutesToIncrement * -1))
                {
                    totalMinutesToIncrement += remaningMinutesInDay;
                }
                else
                {
                    return currentDate.AddMinutes((double) totalMinutesToIncrement);
                }
            }

            currentDate = RestartDay(currentDate, increment);
        }
    }

    public void SetHoliday(DateTime date) => _oneTimeHolidays.Add(date);

    public void SetRecurringHoliday(int month, int day) => _recurringHolidays.Add(new DateTime(DateTime.Now.Year, month, day));

    public void SetWorkdayStartAndStop(int startHours, int startMinutes, int stopHours, int stopMinutes)
    {
        _startHours = startHours;
        _startMinutes = startMinutes;
        _stopHours = stopHours;
        _stopMinutes = stopMinutes;
        _workdayMinutes = GetWordayMinutes(startHours, startMinutes, stopHours, stopMinutes);
    }

    private static decimal GetWordayMinutes(int startHours, int startMinutes, int stopHours, int stopMinutes)
    {
        var startDate = GetDateTimeWithSpecificTime(startHours, startMinutes);
        var endDate = GetDateTimeWithSpecificTime(stopHours, stopMinutes);

        var span = endDate.Subtract(startDate);
        return (decimal) span.TotalMinutes;
    }

    private static DateTime GetDateTimeWithSpecificTime(int hour, int minute) => DateTime.Today.AddHours(hour).AddMinutes(minute);

    private DateTime ResetStartDay(DateTime date, bool increment)
    {
        if (date.Hour > _stopHours || date.Hour == _stopHours && date.Minute > _stopMinutes)
        {
            if (increment)
            {
                var tomorrow = date.AddDays(1);
                return new DateTime(tomorrow.Year, tomorrow.Month, tomorrow.Day, _startHours, _startMinutes, 0);
            }
            else
            {
                return new DateTime(date.Year, date.Month, date.Day, _stopHours, _stopMinutes, 0);
            }
        }
        else if (date.Hour < _startHours || date.Hour == _startHours && date.Minute < _startMinutes)
        {
            if (increment)
            {
                return new DateTime(date.Year, date.Month, date.Day, _startHours, _startMinutes, 0);
            }
            else
            {
                var tomorrow = date.AddDays(-1);
                return new DateTime(tomorrow.Year, tomorrow.Month, tomorrow.Day, _stopHours, _stopMinutes, 0);
            }
        }

        return date;
    }

    private DateTime RestartDay(DateTime date, bool increment)
    {
        var dayToIncrement = increment ? 1 : -1;
        var tomorrow = date.AddDays(dayToIncrement);

        var newDateStartHours = increment ? _startHours : _stopHours;
        var newDateStartMinute = increment ? _startMinutes : _startMinutes;

        return new DateTime(tomorrow.Year, tomorrow.Month, tomorrow.Day, newDateStartHours, newDateStartMinute, 0);
    }

    private bool IsHoliday(DateTime current) => 
        _oneTimeHolidays.FirstOrDefault(holiday => current.Day == holiday.Day && current.Month == holiday.Month && current.Year == holiday.Year) != default ||
        _recurringHolidays.FirstOrDefault(holiday => current.Day == holiday.Day && current.Month == holiday.Month) != default;

    private static bool IsWeekend(DateTime current) => current.DayOfWeek == DayOfWeek.Saturday || current.DayOfWeek == DayOfWeek.Sunday;

    private decimal GetRemainingMinutes(DateTime currentDate, bool increment)
    {
        if (increment)
        {
            var endOfDay = new DateTime(currentDate.Year, currentDate.Month, currentDate.Day, _stopHours, _stopMinutes, 0);
            var span = endOfDay.Subtract(currentDate);
            return (decimal) span.TotalMinutes;
        }
        else
        {
            var startOfDay = new DateTime(currentDate.Year, currentDate.Month, currentDate.Day, _startHours, _startMinutes, 0);
            var span = currentDate.Subtract(startOfDay);
            return (decimal) span.TotalMinutes;
        }
    }
}
