package com.godie.phonebookchallenge.contact.service;

import com.godie.phonebookchallenge.contact.dao.ContactDao;
import com.godie.phonebookchallenge.contact.domain.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Diego Garcia on 8/31/19.
 */
@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactDao contactDao;

    @Override
    public void add(Contact contact) {

        contactDao.save(contact);

    }
}
