package com.godie.phonebookchallenge.contact.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Diego Garcia on 8/30/19.
 */
@Controller
public class HomeController {

    @GetMapping("/")
    public String homePage() {
        return "contact";
    }

}
