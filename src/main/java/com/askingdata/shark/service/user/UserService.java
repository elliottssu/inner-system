package com.askingdata.shark.service.user;


import java.util.Collection;
import java.util.Optional;

import org.bson.types.ObjectId;

import com.askingdata.shark.po.User;
import com.askingdata.shark.po.UserCreateForm;

public interface UserService {

    User getUserById(String id);

    //Optional<User> getUserByEmail(String email);
    User getUserByUsername(String username);
    
    Collection<User> getAllUsers();

    void createUser(UserCreateForm form);

}
