package com.godie.phonebookchallenge.contact.service;

import com.godie.phonebookchallenge.contact.dao.ContactDao;
import com.godie.phonebookchallenge.contact.domain.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;

/**
 * Created by Diego Garcia on 8/31/19.
 */
@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactDao contactDao;

    @Override
    public Contact add(Contact contact) {
        return contactDao.save(contact);
    }

    @Override
    public Iterable<Contact> findAll() {
        return contactDao.findAll();
    }

    @Override
    public List<Contact> findByCriteria(String keyword) {
        return contactDao.findByCriteria(keyword);
    }

}