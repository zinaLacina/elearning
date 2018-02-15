package com.elearning.domain;


import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "enroll")
public class Enroll implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="enroll_id", nullable=false, updatable = false)
    private Long id;

    @ManyToOne(targetEntity = Delivery.class)
    private Delivery delivery;

    @ManyToOne(targetEntity = Student.class)
    private Student student;

    @Column(name = "grade")
    @Size(min = 1, max = 2)
    private String grade;

    @Column(name = "enroll_date")
    private LocalDate enrollDate = LocalDate.now();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public LocalDate getEnrollDate() {
        return enrollDate;
    }

    public void setEnrollDate(LocalDate enrollDate) {
        this.enrollDate = enrollDate;
    }
}
