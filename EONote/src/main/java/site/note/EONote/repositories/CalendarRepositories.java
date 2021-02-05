package site.note.EONote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import site.note.EONote.Models.Calendar;

import java.util.ArrayList;

public interface CalendarRepositories extends JpaRepository<Calendar, Long> {
    ArrayList<Calendar> findTop7ByDayAfterOrMonthAfter(int day, int month);
}
