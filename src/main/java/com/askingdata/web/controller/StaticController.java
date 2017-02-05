package com.askingdata.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.askingdata.common.ModelAndViewBuilder;


@Controller
public class StaticController extends WebMvcConfigurerAdapter {
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/login").setViewName("login");
		registry.addViewController("/index").setViewName("index");
		registry.addViewController("/loginPage").setViewName("loginPage");
		registry.addViewController("/indexPage").setViewName("indexPage");
        registry.addViewController("/userRegist").setViewName("userRegist");
        registry.addViewController("/table").setViewName("table");
        registry.addViewController("/charData").setViewName("charData");
        registry.addViewController("/test").setViewName("test");
        registry.addViewController("/email").setViewName("email");
        registry.addViewController("/emailok").setViewName("emailok");
        registry.addViewController("/forgetPwd").setViewName("forgetPwd");
		registry.addViewController("/createtable").setViewName("createtable");

        registry.addViewController("/jy").setViewName("jy");


        registry.addViewController("/404").setViewName("400");
        registry.addViewController("/500").setViewName("500");
    }
	
	@RequestMapping(method = RequestMethod.GET,value="/test/testPage")
	public ModelAndView testPage() {
		
		return ModelAndViewBuilder.build("test/testPage");
	}
	
	@RequestMapping(method = RequestMethod.GET,value="/store/sell")
	public ModelAndView storeSell() {
		
		return ModelAndViewBuilder.build("store/sell");
	}
	
	@RequestMapping(method = RequestMethod.GET,value="/store/area")
	public ModelAndView storeArea() {
		
		return ModelAndViewBuilder.build("store/area");
	}


}
