package com.askingdata.shark.service.currentuser;

import com.askingdata.shark.po.CurrentUser;


public interface CurrentUserService {

    boolean canAccessUser(CurrentUser currentUser, String userId);

}
