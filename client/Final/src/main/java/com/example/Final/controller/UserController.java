package com.example.Final.controller;

import com.example.Final.dto.UserDto;
import com.example.Final.entity.User;
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
// @CrossOrigin("*")
@CrossOrigin(origins = "http://localhost:3000") // crosses over into frontend to allow data to be pulled
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    private UserRepository userRepository;

    @PostMapping("save")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        // UserDto savedUser = UserService.createUser(userDto);
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // Build Get All Users API
    @GetMapping // may need to add a mapping here ex. @GetMapping("/add")
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
}
