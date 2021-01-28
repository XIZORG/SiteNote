package site.note.EONote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import site.note.EONote.Models.Ivent;

public interface IventRepositories extends JpaRepository<Ivent, Long> {
}
