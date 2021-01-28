package site.note.EONote.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.note.EONote.Models.Calendar;
import site.note.EONote.Models.RegisterPerson;
import site.note.EONote.repositories.CalendarRepositories;
import site.note.EONote.repositories.IventRepositories;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/calendar")
public class CalendarController {
    private CalendarRepositories calendarRepositories;
    private IventRepositories iventRepositories;

    @Autowired
    public CalendarController(CalendarRepositories calendarRepositories, IventRepositories iventRepositories) {
        this.calendarRepositories = calendarRepositories;
        this.iventRepositories = iventRepositories;
    }

    @GetMapping("/getNearWeek")
    public List<Calendar> getNearWeek(){
        return calendarRepositories.findTop7ByMonth(1);
    }
}
