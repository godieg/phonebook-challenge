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

    @Query(value="SELECT * FROM contacts c WHERE c.firstname LIKE %:keyword% " +
            "OR c.lastname LIKE %:keyword% " +
            "OR c.phone LIKE %:keyword%", nativeQuery=true)
    List<Contact> findByCriteria(@Param("keyword") String keyword);
}
