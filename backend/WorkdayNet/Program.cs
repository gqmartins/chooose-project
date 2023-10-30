using WorkdayNet;

IWorkdayCalendar calendar = new WorkDayCalendarMilliseconds();

calendar.SetWorkdayStartAndStop(8, 0, 16, 0);
calendar.SetRecurringHoliday(5, 17);
calendar.SetHoliday(new DateTime(2004, 5, 27));

var format = "dd-MM-yyyy HH:mm";

var startDates = new List<DateTime>()
{
    new DateTime(2004, 5, 24, 18, 5, 0),
    new DateTime(2004, 5, 24, 19, 3, 0),
    new DateTime(2004, 5, 24, 18, 3, 0),
    new DateTime(2004, 5, 24, 8, 3, 0),
    new DateTime(2004, 5, 24, 7, 3, 0),
};

var increments = new List<decimal>() { -5.5m, 44.723656m, -6.7470217m, 12.782709m, 8.276628m };

for(var i = 0; i < startDates.Count; ++i)
{
    var start = startDates[i];
    var increment = increments[i];

    var incrementedDate = calendar.GetWorkdayIncrement(start, increment);

    Console.WriteLine(start.ToString(format) + " with an addition of " + increment + " work days is " + incrementedDate.ToString(format));
}

Console.ReadLine();