package com.elearning.domain;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "semester")
public class Semester implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="semester_id", nullable=false, updatable = false)
    private Long id;

    @Column(name="semester_code", nullable=false)
    @NotNull(message = "The semester code is required")
    @Size(min = 1, max = 30)
    private String semesterCode;

    @Column(name="semester_name")
    @NotNull(message = "The semester code is required")
    @Size(min = 1, max = 100)
    private String semesterName;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSemesterCode() {
        return semesterCode;
    }

    public void setSemesterCode(String semesterCode) {
        this.semesterCode = semesterCode;
    }

    public String getSemesterName() {
        return semesterName;
    }

    public void setSemesterName(String semesterName) {
        this.semesterName = semesterName;
    }
}

