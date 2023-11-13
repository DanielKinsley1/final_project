package com.example.Final.service.impl;

import com.example.Final.dto.UserDto;
import com.example.Final.entity.User;
import com.example.Final.exception.ResourceNotFoundException;
import com.example.Final.mapper.UserMapper;
import com.example.Final.repository.UserRepository;
import com.example.Final.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        return userDto;
    }



public User getUserById(Long id)
    {
        return userRepository.getUserById(id).orElseThrow(() -> new ResourceNotFoundException("User does not exist with given id" + id));

    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long Id, UserDto updatedUser) {
       User user = getUserById(Id);
       user.setFirstName(updatedUser.getFirstName());
       user.setLastName(updatedUser.getLastName());
       user.setEmail(updatedUser.getEmail());

       User updatedUserObj =  userRepository.save(user);
        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.getUserById(id).orElseThrow(() -> new ResourceNotFoundException("User does not exist with given id" + id));


        userRepository.deleteById(id);


    }




}
