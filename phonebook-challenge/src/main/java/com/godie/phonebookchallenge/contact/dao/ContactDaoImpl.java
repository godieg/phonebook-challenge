package com.godie.phonebookchallenge.contact.dao;

import com.godie.phonebookchallenge.contact.domain.Contact;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by Diego Garcia on 8/31/19.
 */
// @Repository
public class ContactDaoImpl  {

    @PersistenceContext
    private EntityManager em;

    // @Override
    @Transactional
    public Contact save(Contact contact) {
        if (contact.getId() == null) {
            em.persist(contact);
            return contact;
        } else {
            return em.merge(contact);
        }
    }

    // @Override
    @Transactional
    public Iterable<Contact> findAll() {
        TypedQuery query = em.createQuery("SELECT c FROM Contact c", Contact.class);

        return query.getResultList();
    }

    // @Override
    @Transactional
    public List<Contact> findByQuery(String query) {

        StringBuilder sqlQuery = new StringBuilder(100)
                .append("SELECT c ")
                .append("FROM Contact c ")
                .append("WHERE ")
                .append(" ( c.firstName LIKE :query ")
                .append(" OR c.lastName LIKE :query ")
                .append(" OR c.phone LIKE :query ) ")
                ;

        TypedQuery typedQuery = em.createQuery(sqlQuery.toString(), Contact.class);

        // typedQuery.setParameter("query", "%" + query + "%");
        typedQuery.setParameter("query", "%" + query + "%");

        return typedQuery.getResultList();
    }
}
