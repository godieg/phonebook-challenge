package com.godie.phonebookchallenge.contact.web;

import com.godie.phonebookchallenge.contact.domain.Contact;
import com.godie.phonebookchallenge.contact.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

/**
 * API Rest Controller to manage contacts.
 * Created by Diego Garcia on 8/31/19.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    /**
     * API method to create new contacts.
     * @param contact
     * @return
     */
    @PostMapping
    ResponseEntity<Contact> add(@Valid @RequestBody Contact contact) {
        return ResponseEntity.ok( contactService.add(contact) );
    }

    /**
     * API method to get all current contacts.
     * @return
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Contact> findAll() {
        return contactService.findAll();
    }

    /**
     * API method to search for contacts by various criteria
     * @param query
     * @return
     */
    @GetMapping("/search")
    ResponseEntity<List<Contact>> search(@RequestParam String query) {
        return ResponseEntity.ok(contactService.findByCriteria(query));
    }

}
