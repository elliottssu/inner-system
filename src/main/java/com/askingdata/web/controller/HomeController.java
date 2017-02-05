package com.askingdata.web.controller;

import java.util.*;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.askingdata.shark.po.*;
import com.askingdata.shark.repository.*;

@Controller
public class HomeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);
    @Autowired
    private AuthorizationRepository authorizationRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private RoleAuthorizationRepository roleAuthorizationRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;
    
    @RequestMapping("/index")
    public String getHomePage() {
        return "index";
    }
    @RequestMapping("/register")
    public String register() {
        return "userRegist";
    }
    @RequestMapping("/show")
    public String show() {
        return "powermanage/authorization";
    }

    @RequestMapping(value = "/setAuthorization", method = RequestMethod.GET)
    public ModelAndView getLoginPage1(String roleId,Model model) {
    	List<RoleAuthorization> rass=roleAuthorizationRepository.findRoleAuthorizationByRoleId(roleId);
    	Role role=roleRepository.findRoleByRoleId(roleId);
    	List<Authorization> ras=authorizationRepository.findAuthorizationByRoleId();
    	
    	for(RoleAuthorization ra:rass){
    		for(Authorization a:ras){
        		if(a.getMid().equals(ra.getMid())&&a.getPid().equals(ra.getPid())){
        			a.setFlag("1");
        		}
        	}
    	}
    	
//    	UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext()
//    		    .getAuthentication()
//    		    .getPrincipal();
//
//    	String username=userDetails.getUsername();
//    	User user=userRepository.findUserByUsername(username);
//    	List<UserRole> userRoles=userRoleRepository.findUserRoleByUserId(user.getId());
//    	List<Role> roles=new ArrayList<Role>();
//    	for(UserRole ur:userRoles){
//    		Role r=roleRepository.findRoleByRoleId(ur.getRoleId());
//    		roles.add(r);
//    	}
    	List<Role> roles=roleRepository.findAll();

    	model.addAttribute("roles", roles);
    	model.addAttribute("roleId", roleId);
    	model.addAttribute("roleName", role.getRoleName());
    	return new ModelAndView("powermanage/powerManage", "ras", ras);
    }
    @PreAuthorize("hasAuthority('超级管理员')")
    @RequestMapping(value = "/updateRoleAuthorization", method = RequestMethod.GET)
    public ModelAndView updateRoleAuthorization(String selectoper[],String roleId,String menuname[],Model model) {
    	roleAuthorizationRepository.deleteRoleAuthorizationByRoleId(roleId);
    	Role role=roleRepository.findRoleByRoleId(roleId);
    	System.out.println(selectoper);
    	if(selectoper!=null){
    		for(String str:selectoper){
        		String arr[]=str.split("_");
        		RoleAuthorization ra=null;
        		if(arr[0].equals("yyy")){
        			ra=new RoleAuthorization();
            		ra.setMid(arr[1]);
            		ra.setPid(arr[0]);
            		ra.setRoleId(roleId);
            		ra.setIsMenu("1");
        		}else{
        			ra=new RoleAuthorization();
            		ra.setMid(arr[1]);
            		ra.setPid(arr[0]);
            		ra.setRoleId(roleId);
            		ra.setIsMenu("0");
        		}
        		roleAuthorizationRepository.saveRoleAuthorization(ra);
        	}
    	}
    	
    	
    	
    	
    	
    	List<RoleAuthorization> rass=roleAuthorizationRepository.findRoleAuthorizationByRoleId(roleId);
    	
    	List<Authorization> ras=authorizationRepository.findAuthorizationByRoleId();
    	
    	for(RoleAuthorization ra:rass){
    		for(Authorization a:ras){
        		if(a.getMid().equals(ra.getMid())&&a.getPid().equals(ra.getPid())){
        			a.setFlag("1");
        		}
        	}
    	}
    	
    	
//    	UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext()
//    		    .getAuthentication()
//    		    .getPrincipal();
//
//    	String username=userDetails.getUsername();
//    	User user=userRepository.findUserByUsername(username);
//    	List<UserRole> userRoles=userRoleRepository.findUserRoleByUserId(user.getId());
//    	List<Role> roles=new ArrayList<Role>();
//    	for(UserRole ur:userRoles){
//    		Role r=roleRepository.findRoleByRoleId(ur.getRoleId());
//    		roles.add(r);
//    	}
    	List<Role> roles=roleRepository.findAll();
    	model.addAttribute("roles", roles);
    	model.addAttribute("roleId", roleId);
    	model.addAttribute("roleName", role.getRoleName());
    	return new ModelAndView("powermanage/powerManage", "ras", ras);
    }
    

}
