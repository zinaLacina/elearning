package com.elearning.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "title")
public class Title implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="title_id", nullable=false, updatable = false)
    private Long id;

    @Column(name = "title_code")
    @NotNull(message = "The title code is required")
    @Size(min = 2, max = 10)
    private String titleCode;

    @Column(name = "title_name")
    @NotNull(message = "The title name is required")
    @Size(min = 2, max = 200)
    private String titleName;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitleCode() {
        return titleCode;
    }

    public void setTitleCode(String titleCode) {
        this.titleCode = titleCode;
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String titleName) {
        this.titleName = titleName;
    }
}
