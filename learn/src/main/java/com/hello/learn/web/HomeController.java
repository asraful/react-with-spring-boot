package com.hello.learn.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @GetMapping("/api/hello")
    @ResponseBody
    public String home() {
        return "Hello from server";
    }

    @GetMapping("/api/endpoints")
    @ResponseBody
    public String getEndpoints() {
        String temp = "{name:'zone', city:'New York', endpoint:'example.com'}";
        return temp;
    }

}
