package com.elearning.domain;


import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name = "classroom")
public class Classroom implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="classroom_id", nullable=false, updatable = false)
    private Long id;

    @Column(name = "classroom_name")
    @NotNull(message = "The name of the classroom is required")
    private String classroomName;

    @Column(name = "floor_number")
    @NotNull(message = "Floor number is required")
    @Min(value = 0, message = "The minimun is 0")
    @Max(value = 10, message = "The maximun is 10")
    private int floorNumber = 3;

    @Column(name = "classroom_capacity")
    @NotNull(message = "The classroom capacity is required")
    @Min(value = 20, message = "The minimun is 20")
    @Max(value = 50, message = "The maximun is 50")
    private int classroomCapacity = 20;

    @Column(name = "is_active")
    private boolean isActive = true;

    public int getFloorNumber() {
        return floorNumber;
    }

    public void setFloorNumber(int floorNumber) {
        this.floorNumber = floorNumber;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getClassroomName() {
        return classroomName;
    }

    public void setClassroomName(String classroomName) {
        this.classroomName = classroomName;
    }
}
