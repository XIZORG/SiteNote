package site.note.EONote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import site.note.EONote.Models.Calendar;
import site.note.EONote.Models.Ivent;

import java.util.ArrayList;

public interface IventRepositories extends JpaRepository<Ivent, Long> {
    ArrayList<Ivent> findTop7ByDayAfterOrMonthAfterAndUserId(int day, int month, Long id);
}
