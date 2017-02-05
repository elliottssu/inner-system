package com.askingdata.shark.service.currentuser;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.askingdata.shark.po.CurrentUser;
import com.askingdata.shark.po.Role;

@Service
public class CurrentUserServiceImpl implements CurrentUserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CurrentUserDetailsService.class);

    @Override
    public boolean canAccessUser(CurrentUser currentUser, String userId) {
        LOGGER.debug("Checking if user={} has access to user={}", currentUser, userId);
//        return currentUser != null&& (currentUser.getRole() == Role.ADMIN || currentUser.getId().equals(userId+""));
        return currentUser != null&& (currentUser.getId().equals(userId+""));
        //return true;
    }

}
