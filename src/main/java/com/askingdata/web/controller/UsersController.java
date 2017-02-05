package com.askingdata.web.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.askingdata.common.ResultData;
import com.askingdata.constant.ErrorMessage;
import com.askingdata.constant.ResultCode;
import com.askingdata.shark.po.Authorization;
import com.askingdata.shark.po.MenuNum;
import com.askingdata.shark.po.Role;
import com.askingdata.shark.po.User;
import com.askingdata.shark.po.UserRole;
import com.askingdata.shark.repository.AuthorizationRepository;
import com.askingdata.shark.repository.MenuNumRepository;
import com.askingdata.shark.repository.RoleAuthorizationRepository;
import com.askingdata.shark.repository.RoleRepository;
import com.askingdata.shark.repository.UserRepository;
import com.askingdata.shark.repository.UserRoleRepository;
import com.askingdata.shark.service.user.UserService;

@Controller
public class UsersController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UsersController.class);
    private final UserService userService;
    @Autowired
    private AuthorizationRepository authorizationRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;
    @Autowired
    private RoleAuthorizationRepository roleAuthorizationRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    MenuNumRepository menuNumRepository;
    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }
    
	@RequestMapping(value="/users/loginsuccess",method = RequestMethod.GET)
	public @ResponseBody ResultData loginSuccess(){
		
		ResultData resultData = new ResultData();
		resultData.setCode(ResultCode.SUCCESS);
		resultData.setMsg(ErrorMessage.NULL);
		System.out.println(resultData);
		return resultData;
	}
	
	@RequestMapping(value="/users/loginfail",method = RequestMethod.GET)
	public @ResponseBody ResultData loginFail(){
		
		ResultData resultData = new ResultData();
		resultData.setCode(ResultCode.ERROR);
		resultData.setMsg(ErrorMessage.NULL);
		System.out.println(resultData);
		return resultData;
	}
    @PreAuthorize("hasAuthority('超级管理员')")
    @RequestMapping(value="/powerManage",method = RequestMethod.GET)
    public ModelAndView getUsersPage(Model model) {
    	List<Authorization> ras=authorizationRepository.findAuthorizationByRoleId();

    	List<Role> roles=roleRepository.findAll();
    	model.addAttribute("roles", roles);
    	model.addAttribute("roleId", "1");
    	model.addAttribute("roleName", "请选择角色");
        return new ModelAndView("powermanage/powerManage", "ras", ras);
    }
    @PreAuthorize("hasAuthority('超级管理员')")
    @RequestMapping(value = "/addSideMenu", method = RequestMethod.GET)
    public String addSideMenu(Authorization authorization) {
    	MenuNum num=menuNumRepository.findNum();
    	if(num==null){
    		MenuNum mu=new MenuNum();
    		mu.setMenuId("menuId");
    		mu.setMenuNum("55");
    		menuNumRepository.save(mu);
    		
    		authorization.setMid("yyz"+55);
        	authorization.setPid("yyy");
        	authorization.setIsParent("0");
        	authorization.setIsMenu("1");
        	authorization.setOnclick("");
        	authorizationRepository.save(authorization);
        	menuNumRepository.updateNum(55);
        	
    	}else{
    		int i=Integer.parseInt(num.getMenuNum());
    		authorization.setMid("yyz"+i);
        	authorization.setPid("yyy");
        	authorization.setIsParent("0");
        	authorization.setIsMenu("1");
        	authorization.setOnclick("");
        	authorizationRepository.save(authorization);
        	menuNumRepository.updateNum(i);
    	}
    	
    	
        return "redirect:/powerManage";
    }
}
