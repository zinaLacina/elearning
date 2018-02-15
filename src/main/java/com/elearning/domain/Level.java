package com.elearning.domain;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Table(name = "level")
public class Level implements Serializable{
    private static final long serialVersionUID = 902783495L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="level_id", nullable=false, updatable = false)
    private Long id;

    @Column(name="level_name")
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
