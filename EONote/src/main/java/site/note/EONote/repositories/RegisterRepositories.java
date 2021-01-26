package site.note.EONote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import site.note.EONote.Models.RegisterPerson;

public interface RegisterRepositories extends JpaRepository<RegisterPerson, Long> {
    RegisterPerson findByLogin(String login);
    RegisterPerson findByLoginOrEmailOrTelephone(String login, String email, String password);
}
