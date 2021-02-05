package site.note.EONote.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.note.EONote.Models.Calendar;
import site.note.EONote.repositories.CalendarRepositories;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/calendar")
public class CalendarController {
    private final CalendarRepositories calendarRepositories;

    @Autowired
    public CalendarController(CalendarRepositories calendarRepositories) {
        this.calendarRepositories = calendarRepositories;
    }

    @GetMapping("/getNearWeek")
    public List<Calendar> getNearWeek(){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        String dataStr = dtf.format(now);
        int day = Integer.valueOf(dataStr.substring(8, 10));
        int month = Integer.valueOf(dataStr.substring(5, 7));
        System.out.println(day + "  " + month);
        return calendarRepositories.findTop7ByDayAfterOrMonthAfter(day, month);
    }
}
