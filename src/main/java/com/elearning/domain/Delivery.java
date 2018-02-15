package com.elearning.domain;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "delivery")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="delivery_id", nullable=false, updatable = false)
    private Long id;



    @Column(name = "week_delivery")
    private int weekDelivery;


    @Column(name = "time_slot")
    @NotNull(message = "The time slot is required")
    @Min(value = 1, message = "The minimun is 1")
    @Max(value = 2, message = "The maximun is 2")
    private int timeSlot = 1;



    @ManyToOne(targetEntity = Classroom.class)
    private Classroom classroom;

    @ManyToOne(targetEntity = Lecturer.class)
    private Lecturer lecturer;

    @ManyToOne(targetEntity = Course.class)
    private Course course;

    @ManyToOne(targetEntity = Semester.class)
    private Semester semester;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Classroom getClassroom() {
        return this.classroom;
    }

    public void setClassroom(Classroom classroom) {
        this.classroom = classroom;
    }

    public Lecturer getLecturer() {
        return lecturer;
    }

    public void setLecturer(Lecturer lecturer) {
        this.lecturer = lecturer;
    }

    public int getWeekDelivery() {
        return weekDelivery;
    }

    public void setWeekDelivery(int weekDelivery) {
        this.weekDelivery = weekDelivery;
    }

    public int getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(int timeSlot) {
        this.timeSlot = timeSlot;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Semester getSemester() {
        return semester;
    }

    public void setSemester(Semester semester) {
        this.semester = semester;
    }
}
