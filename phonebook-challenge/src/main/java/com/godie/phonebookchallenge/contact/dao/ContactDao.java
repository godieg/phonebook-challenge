package com.godie.phonebookchallenge.contact.dao;

import com.godie.phonebookchallenge.contact.domain.Contact;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface that implemeted the CrudRepository to use the basic database operations
 * https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html
 * https://docs.spring.io/spring-data/data-commons/docs/1.6.1.RELEASE/reference/html/repositories.html
 * Created by Diego Garcia on 8/31/19.
 */
@Repository
public interface ContactDao extends CrudRepository<Contact, Long> {

    /**
     * Method to search contacts for fist name, last name or phone.
     * @param keyword
     * @return
     */
    @Query(value="SELECT * FROM contacts c WHERE c.firstname LIKE %:keyword% " +
            "OR c.lastname LIKE %:keyword% " +
            "OR c.phone LIKE %:keyword%", nativeQuery=true)
    List<Contact> findByCriteria(@Param("keyword") String keyword);
}
