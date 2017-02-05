package com.askingdata.web.controller;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author lizengfa
 *
 */
@Slf4j
@Controller

public class SideMenuController {

    @RequestMapping(value="/configuration",method = RequestMethod.GET)
    public String loadConfigPage(){
        return "config/configmain";
    }

    @RequestMapping(value="/createTable",method = RequestMethod.GET)
    public String createTable(){
        return "templateTable/tablemain";
    }
    //调度管理
    @RequestMapping(value="/dispatch",method = RequestMethod.GET)
    public String dispatch(){
        return "dispatch/dispatch";
    }
    @RequestMapping(value="/dispatchManage",method = RequestMethod.GET)
    public String dispatchManage(){
        return "dispatch/dispatch-manage";
    }
    @RequestMapping(value="/dispatchResoure",method = RequestMethod.GET)
    public String dispatchResoure(){
        return "dispatch/dispatch-resoure";
    }
    @RequestMapping(value="/dispatchRebuild",method = RequestMethod.GET)
    public String dispatchRebuild(){
        return "dispatch/dispatch-rebuild";
    }

    @RequestMapping(value="/automation",method = RequestMethod.GET)
    public String automation(){
        return "automation/automation";
    }

    @RequestMapping(value="/tag",method = RequestMethod.GET)
    public String tag(){
        return "tag/bullTag";
    }
}