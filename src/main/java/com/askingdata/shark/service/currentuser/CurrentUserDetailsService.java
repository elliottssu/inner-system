package com.askingdata.shark.service.currentuser;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.askingdata.shark.po.CurrentUser;
import com.askingdata.shark.po.User;
import com.askingdata.shark.service.user.UserService;

@Service
public class CurrentUserDetailsService implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CurrentUserDetailsService.class);
    private final UserService userService;

    @Autowired
    public CurrentUserDetailsService(UserService userService) {
        this.userService = userService;
    }

    //@Override
    public CurrentUser loadUserByUsername(String username) throws UsernameNotFoundException {
//        LOGGER.debug("Authenticating user with email={}", email.replaceFirst("@.*", "@***"));
//        User user = userService.getUserByEmail(email).orElseThrow(() -> new UsernameNotFoundException(String.format("User with email=%s was not found", email)));
    	User user = userService.getUserByUsername(username);

        return new CurrentUser(user);
    }

}
