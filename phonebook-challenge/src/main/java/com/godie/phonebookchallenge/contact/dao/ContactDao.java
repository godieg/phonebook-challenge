package com.godie.phonebookchallenge.contact.dao;

import com.godie.phonebookchallenge.contact.domain.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Diego Garcia on 8/31/19.
 */
@Repository
public interface ContactDao extends CrudRepository<Contact, Long> {

}
