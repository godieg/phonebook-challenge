package com.godie.phonebookchallenge.contact.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

/**
 * Created by Diego Garcia on 8/31/19.
 */
@Entity(name = "contacts")
public class Contact implements Serializable {

    private static final long serialVersionUID = 9146262620729858213L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "firstname", nullable = false)
    @NotEmpty(message = "First Name is required")
    private String firstName;

    @Column(name = "lastname",nullable = false)
    @NotEmpty(message = "Last Name is required")
    private String lastName;

    @Column(name = "phone", nullable = false)
    @NotEmpty(message = "Phone is required")
    private String phone;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}
