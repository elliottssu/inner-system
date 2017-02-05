package com.askingdata.web.controller;

import org.bson.types.ObjectId;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.askingdata.shark.po.Role;
import com.askingdata.shark.po.SaveUserRole;
import com.askingdata.shark.po.User;
import com.askingdata.shark.po.UserCreateForm;
import com.askingdata.shark.po.UserRole;
import com.askingdata.shark.po.validator.UserCreateFormValidator;
import com.askingdata.shark.repository.RoleRepository;
import com.askingdata.shark.repository.SaveUserRoleRepository;
import com.askingdata.shark.repository.UserRepository;
import com.askingdata.shark.repository.UserRoleRepository;
import com.askingdata.shark.service.user.UserService;

import javax.validation.Valid;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Controller
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
    private final UserService userService;
    private final UserCreateFormValidator userCreateFormValidator;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;
    @Autowired
    private SaveUserRoleRepository saveUserRoleRepository;
    @Autowired
    public UserController(UserService userService, UserCreateFormValidator userCreateFormValidator) {
        this.userService = userService;
        this.userCreateFormValidator = userCreateFormValidator;
    }

    @InitBinder("form")
    public void initBinder(WebDataBinder binder) {
        binder.addValidators(userCreateFormValidator);
    }

    @PreAuthorize("@currentUserServiceImpl.canAccessUser(principal, #id)")
    @RequestMapping("/user/{id}")
    public ModelAndView getUserPage(@PathVariable String id) {
        return new ModelAndView("user", "user", userService.getUserById(id));
    }

    
    @PreAuthorize("hasAuthority('超级管理员') or hasAuthority('管理员')")
    @RequestMapping(value = "/user/manager", method = RequestMethod.GET)
    public ModelAndView getUserCreatePage(Model model) {
    	
    	
    	//添加角色下拉列表
    	UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext()
    		    .getAuthentication()
    		    .getPrincipal();

    	String username=userDetails.getUsername();
    	User user=userRepository.findUserByUsername(username);
    	List<UserRole> userRoles=userRoleRepository.findUserRoleByUserId(user.getId());
    	List<Role> roles=new ArrayList<Role>();
    	for(UserRole ur:userRoles){
    		Role r=roleRepository.findRoleByRoleId(ur.getRoleId());
    		roles.add(r);
    	}
    	
    	List<Role> allRole=roleRepository.findAll();
    	List<Role> roles2=new ArrayList<Role>();
    	for(Role allr:allRole){
    		for(Role r:roles){
    			if(r.getRoleId().equals("1")){
        			if(Integer.parseInt(allr.getRoleId())>Integer.parseInt(r.getRoleId())){
        				if(!roles2.contains(allr)){
        					roles2.add(allr);
        				}
        			}
        		}
    			if(r.getRoleId().equals("2")){
        			if(Integer.parseInt(allr.getRoleId())>Integer.parseInt(r.getRoleId())){
        				if(!roles2.contains(allr)){
        					roles2.add(allr);
        				}
        			}
        		}
    		}
    	}
    	
    	
    	List<User> users=userRepository.findAllUser();
    	for(User u:users){
    		List<UserRole> userRoles2=userRoleRepository.findUserRoleByUserId(u.getId());
    		List<Role> rs=new ArrayList<Role>();
    		for(UserRole ur:userRoles2){
    			Role role=roleRepository.findRoleByRoleId(ur.getRoleId());
    			rs.add(role);
    			
    		}
    		u.setRoles(rs);
    		u.setAddRoles(roles2);
    	}
    	//如果是超级管理员
    	
    	//如果是管理员，要去掉超级管理
    	for(Role r:roles){
    		System.out.println(r.getRoleName());
    		System.out.println(r.getRoleId());
    	}
    	
    	System.out.println(roles.contains(new Role("1","超级管理员")));
    	if(!roles.contains(new Role("1","超级管理员"))){
    		User u=new User();
    			List<Role> rss=new ArrayList<Role>();
    			rss.add(new Role("1","超级管理员"));
    		u.setRoles(rss);

    		if(users.contains(u)){
				users.remove(u);
			}

		}
    	
    	if(!roles.contains(new Role("1","超级管理员"))){

    		User u2=new User();
				List<Role> rss2=new ArrayList<Role>();
				rss2.add(new Role("2","管理员"));
			u2.setRoles(rss2);
			System.out.println(users.contains(u2)+"   999999999999999999999");
			if(users.contains(u2)){
				users.remove(u2);
			}
		}
    	
    	model.addAttribute("users", users);
    	//model.addAttribute("roles2", roles2);
        return new ModelAndView("powermanage/userRole");
    }
    @PreAuthorize("hasAuthority('超级管理员') or hasAuthority('管理员')")
    @RequestMapping(value = "/deleteUserRole", method = RequestMethod.GET)
    public String deleteUserRole(UserRole userRole) {
    	Role role=roleRepository.findRoleByRoleName(userRole.getRoleName());
    	ObjectId objid=new ObjectId(userRole.getUserId());
    	userRoleRepository.removeUserRoleByUserIdAndRoleId(objid,role.getRoleId());
        return "redirect:/user/manager";
    }
    @PreAuthorize("hasAuthority('超级管理员') or hasAuthority('管理员')")
    @RequestMapping(value = "/addUserRole", method = RequestMethod.GET)
    public String addUserRole(String roleId,String userId) {
    	ObjectId id=new ObjectId(userId);
    	SaveUserRole sur=new SaveUserRole();
    	sur.setUserId(id);
    	sur.setRoleId(roleId);
    	//System.out.println(userRole.getRoleId()+"    777777777777777777777777777777777777777777777777777777777777777777    "+userRole.getUserId());
    	saveUserRoleRepository.save(sur);
        return "redirect:/user/manager";
    }
    
    @PreAuthorize("hasAuthority('超级管理员') or hasAuthority('管理员')")
    //@PreAuthorize("hasAuthority('SUPER')")
    @RequestMapping(value = "/user/save", method = RequestMethod.POST)
    public String handleUserCreateForm(@Valid @ModelAttribute("form") UserCreateForm form) {
//        LOGGER.debug("Processing user create form={}, bindingResult={}", form, bindingResult);
//        if (bindingResult.hasErrors()) {
//            // failed validation
//            return "user_create";
//        }
        try {
            userService.createUser(form);
        } catch (Exception e) {
//            // probably email already exists - very rare case when multiple admins are adding same user
//            // at the same time and form validation has passed for more than one of them.
//            LOGGER.warn("Exception occurred when trying to save the user, assuming duplicate email", e);
        	e.printStackTrace();
//            bindingResult.reject("email.exists", "Email already exists");
            return "userRegist";
        	
        }
        return "redirect:/login";
    }

    @RequestMapping(value = "/checkUsername", method = RequestMethod.GET)
    public @ResponseBody void ajaxCheckUsername(@RequestParam String username,PrintWriter pw){
		if(StringUtils.hasText(username)){
			if(validIsExistingUsername(username)){
				//return ResponseCode.success.ordinal();
				pw.print("1");
			}else{
				pw.print("0");
			}
				//return ResponseCode.notUnique.ordinal();		
		}else{
			//return ResponseCode.IllegalValue.ordinal();
			pw.print("2");
		}
		
	}

    //======================================================================
	/**
	 * valid username is or is not existing
	 * @param username
	 * @return
	 */
	private boolean validIsExistingUsername(String username){
		
		User existUser = userRepository.findUserByUserName(username);
		if(Objects.nonNull(existUser))
			return false;
		
		return true;
		
	}
}
