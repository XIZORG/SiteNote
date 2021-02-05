package site.note.EONote.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ivent {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long iventId;
    private Long userId;
    private int day, month, year;
    private String descriptionOfEvent;

    public Ivent(Long userId, int day, int month, int year, String descriptionOfEvent) {
        this.userId = userId;
        this.day = day;
        this.month = month;
        this.year = year;
        this.descriptionOfEvent = descriptionOfEvent;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getDescriptionOfEvent() {
        return descriptionOfEvent;
    }

    public void setDescriptionOfEvent(String descriptionOfEvent) {
        this.descriptionOfEvent = descriptionOfEvent;
    }

    public Ivent() {
    }
}
