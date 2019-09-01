package com.godie.phonebookchallenge.contact.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by Diego Garcia on 8/30/19.
 */
@Controller
public class HomeController {

    @GetMapping("/")
    public String homePage() {
        return "index";
    }

}
