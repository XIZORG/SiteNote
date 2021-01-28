package site.note.EONote.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Calendar {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private Boolean iventPresent;
    private int day, month, year, weekDay;
    private String descriptionOfEvent;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getWeekDay() {
        return weekDay;
    }

    public void setWeekDay(int weekDay) {
        this.weekDay = weekDay;
    }

    public Calendar() {
    }

    public Boolean getIventPresent() {
        return iventPresent;
    }

    public void setIventPresent(Boolean iventPresent) {
        this.iventPresent = iventPresent;
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
}
