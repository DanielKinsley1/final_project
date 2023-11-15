package com.example.Final.mapper;

import com.example.Final.dto.UserDto;
import com.example.Final.entity.User;



public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
            user.getId(),
            user.getFirstName(),
            user.getLastName(),
            user.getEmail(),
            user.getPassword()

        );
    }

    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                userDto.getPassword()

        );
    }
}
