package com.example.Final.dto;

import lombok.Getter;
import lombok.Setter;


public class UserDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;


// The main purpose of a DTO is to protect the data and transport it between 
//different parts of a system, providing a simple and consistent interface.
//Getters and Setter are set here
    public UserDto(Long id, String firstName, String lastName, String email, String password){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    public String getPassword() {
        return password;
    }
    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }
    public String password(){
        return password;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setPassword(String password){
        this.password = password;
    }
}
