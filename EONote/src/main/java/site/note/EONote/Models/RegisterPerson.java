package site.note.EONote.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RegisterPerson {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String login, password;
    private String email, telephone;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public RegisterPerson(String login, String password, String email, String telephone) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.telephone = telephone;
    }

    @Override
    public String toString() {
        return "{" +
                "login:'" + login + '\'' +
                ", password:'" + password + '\'' +
                ", email:'" + email + '\'' +
                ", telephone:'" + telephone + '\'' +
                '}';
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public RegisterPerson(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public RegisterPerson() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
