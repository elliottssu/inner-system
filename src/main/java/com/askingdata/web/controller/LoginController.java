package com.askingdata.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.askingdata.shark.po.User;
import com.askingdata.shark.repository.UserRepository;

import java.io.PrintWriter;
import java.util.Objects;
import java.util.Optional;

@Controller
public class LoginController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
    @Autowired
    private UserRepository userRepository;
//    @RequestMapping(value = "/login", method = RequestMethod.GET)
//    public ModelAndView getLoginPage(@RequestParam Optional<String> error) {
//    	System.out.println("88888888888888888888888888888 "+error);
//        LOGGER.debug("Getting login page, error={}", error);
//        return new ModelAndView("login", "error", error);
//    }
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String getLoginPage1(@RequestParam Optional<String> error,Model model) {
        model.addAttribute("error", error);
        return "login";
    }
    
    
}
