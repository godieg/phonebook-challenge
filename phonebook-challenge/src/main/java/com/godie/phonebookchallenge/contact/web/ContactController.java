package com.godie.phonebookchallenge.contact.web;

import com.godie.phonebookchallenge.contact.domain.Contact;
import com.godie.phonebookchallenge.contact.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Diego Garcia on 8/31/19.
 */
@RestController
@RequestMapping(path = "/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void add(@RequestBody Contact contact) {
        contactService.add(contact);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Contact> findAll() {
        return contactService.findAll();
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public List<Contact> findByQuery(@RequestParam String query) {
        return contactService.findByQuery(query);
    }

}
