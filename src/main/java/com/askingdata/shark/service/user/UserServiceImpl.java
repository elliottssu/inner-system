package com.askingdata.shark.service.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.askingdata.shark.po.Authorization;
import com.askingdata.shark.po.Role;
import com.askingdata.shark.po.RoleAuthorization;
import com.askingdata.shark.po.User;
import com.askingdata.shark.po.UserCreateForm;
import com.askingdata.shark.po.UserRole;
import com.askingdata.shark.repository.AuthorizationRepository;
import com.askingdata.shark.repository.RoleAuthorizationRepository;
import com.askingdata.shark.repository.RoleRepository;
import com.askingdata.shark.repository.UserRepository;
import com.askingdata.shark.repository.UserRoleRepository;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
	private UserRepository userRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AuthorizationRepository authorizationRepository;
    @Autowired
    private RoleAuthorizationRepository roleAuthorizationRepository;

    @Override
    public User getUserById(String id) {
        return userRepository.findUserById(id);
    }

    @Override
    public User getUserByUsername(String username) {
    	User u=userRepository.findUserByUsername(username);
    	List<UserRole> userRoles=userRoleRepository.findUserRoleByUserId(u.getId());
//    	for(UserRole ur:userRoles){
//    		System.out.println(ur.getRoleId()+"      roleId");
//    	}
    	List<Role> roles=new ArrayList<Role>();
    	for(UserRole ur:userRoles){
    		Role role=roleRepository.findRoleByRoleId(ur.getRoleId());
    		roles.add(role);
    	}
    	String[] rolestr = new String[roles.size()];
    	for(int i=0;i<roles.size();i++){
    		rolestr[i]=roles.get(i).getRoleName();
    	}
    	u.setRolestr(rolestr);
    	u.setRoles(roles);
    	List<RoleAuthorization> allRoleAuthorization=new ArrayList<RoleAuthorization>();
    	
    	for(UserRole ur:userRoles){
    		List<RoleAuthorization> ras=roleAuthorizationRepository.findRoleAuthorizationByRoleId(ur.getRoleId());
    		allRoleAuthorization.addAll(ras);
    	}
    	
    	List<RoleAuthorization> newAllAuthorization=new ArrayList<RoleAuthorization>();
    	for(RoleAuthorization a:allRoleAuthorization){
    		if(!newAllAuthorization.contains(a)){
    			newAllAuthorization.add(a);
    		}
    	}
    	u.setRoleAuthorizations(newAllAuthorization);
    	List<Authorization> ras=authorizationRepository.findAuthorizationByRoleId();
    	
    	for(RoleAuthorization ra:allRoleAuthorization){
    		for(Authorization a:ras){
        		if(a.getMid().equals(ra.getMid())&&a.getPid().equals(ra.getPid())){
        			a.setFlag("1");
        			ra.setMenuname(a.getName());
        			ra.setOnclick(a.getOnclick());
        			ra.setIsImg(a.getIsImg());
        		}
        	}
    	}
    	u.setAuthorizations(ras);
    	System.out.println(u);
        return u;
    }
    @Override
    public Collection<User> getAllUsers() {
        return userRepository.findAllUser();
    }

    @Override
    public void createUser(UserCreateForm form) {
        User user = new User();
        user.setUsername(form.getUsername());
        user.setPasswordHash(new BCryptPasswordEncoder().encode(form.getPassword()));
        userRepository.saveUser(user);
    }
    
    public static void main(String[] args) {
		System.out.println(new BCryptPasswordEncoder().encode("Ogz@i*L8"));
//		System.out.println(new BCryptPasswordEncoder().encode("111"));
	}



}
