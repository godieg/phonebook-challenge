package com.godie.phonebookchallenge.contact.service;

import com.godie.phonebookchallenge.contact.domain.Contact;

import java.util.List;

/**
 * Created by Diego Garcia on 8/31/19.
 */
public interface ContactService {

    void add(Contact contact);

    Iterable<Contact> findAll();

    List<Contact> findByCriteria(String keyword);

}
