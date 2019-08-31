package com.godie.phonebookchallenge.contact.dao;

import com.godie.phonebookchallenge.contact.domain.Contact;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Diego Garcia on 8/31/19.
 */
@Repository
public interface ContactDao extends CrudRepository<Contact, Long> {

    // extends Repository<Contact, Long>

    /*Contact save(Contact contact);

    Iterable<Contact> findAll();

    List<Contact> findByQuery(String query);*/

    @Query(value="select * from Contact c where c.firstname like %:keyword% or c.lastname like %:keyword%", nativeQuery=true)
    List<Contact> findByQuery(@Param("keyword") String keyword);

}
