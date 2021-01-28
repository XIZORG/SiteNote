package site.note.EONote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import site.note.EONote.Models.Calendar;

import java.util.ArrayList;
import java.util.List;

public interface CalendarRepositories extends JpaRepository<Calendar, Long> {
    ArrayList<Calendar> findTop7ByMonth(int month);
}
