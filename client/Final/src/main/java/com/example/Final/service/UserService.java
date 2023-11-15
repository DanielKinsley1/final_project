package com.example.Final.service;

import com.example.Final.dto.UserDto;
import com.example.Final.entity.User;
import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);

     public User getUserById(Long id);

     List<UserDto> getAllUsers();

     UserDto updateUser(Long UserId, UserDto updatedUser);

     void deleteUser(Long id);

     public User getUserByEmailAndPassword(String email, String password);


}
