package com.example.Final.controller;

import com.example.Final.dto.UserDto;
import com.example.Final.entity.User;
import com.example.Final.exception.ResourceNotFoundException;
import com.example.Final.repository.UserRepository;
import com.example.Final.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {

    //annotation is placed on the constructor of the class, which is commonly used for constructor injection
    @Autowired
    private UserService userService;
    private UserRepository userRepository;

    //The method is annotated with @PostMapping("save"), indicating that it handles HTTP POST requests for the "/save" API.
    @PostMapping("save")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        // UserDto savedUser = UserService.createUser(userDto);
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    //The method calls userService.getUserById(id) to retrieve a User based on the provided ID
    @GetMapping("{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // Build Get All Users API
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);

    }

    // Build Update User REST API
    @PostMapping("{id}")
    public ResponseEntity<UserDto> updatedUser(@PathVariable("id") Long userId, @RequestBody UserDto updatedUser) {
        UserDto userDto = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(userDto);
    }

    // Build Delete Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully!>}");
    }

    
    //Logging in users API
    //The method is mapped to the "/login" endpoint using @PostMapping("login")
    //It attempts to retrieve a user from the userService based on the provided email and password using userService.getUserByEmailAndPassword(user.getEmail(), user.getPassword()) 
    //If the user is not found (loginData == null), it throws a ResourceNotFoundException with the message "invalid username or password".
    //If an exception occurs during the process, it catches the exception (catch(Exception e)) and returns a ResponseEntity with the exception message and HttpStatus.CONFLICT
    //If the authentication is successful, it returns a ResponseEntity with the retrieved user and HttpStatus.OK
    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody User user) {
        // UserDto savedUser = UserService.createUser(userDto);
        try {
        User loginData = userService.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
        if (loginData == null) {
            throw new ResourceNotFoundException("invalid username or password");
        }
        return new ResponseEntity<>(loginData, HttpStatus.OK);
    } catch(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT); 
    }
    }
}
