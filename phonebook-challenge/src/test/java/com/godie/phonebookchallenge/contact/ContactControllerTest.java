package com.godie.phonebookchallenge.contact;

import com.godie.phonebookchallenge.contact.domain.Contact;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

/**
 * Created by Diego Garcia on 9/1/19.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = { Application.class }, webEnvironment
        = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class ContactControllerTest {

    private static final String API_ROOT = "http://localhost:8080/api/contact";

    @Test
    public void whenGetAllContacts_thenOK() {
        final Response response = RestAssured.get(API_ROOT);
        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
    }

    @Test
    public void whenCreateContact_thenOk()  {
        final Contact contact = new Contact();
        contact.setFirstName("Diego");
        contact.setLastName("Garcia");
        contact.setPhone("99887799");

        final Response response = RestAssured.given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(contact)
                .post(API_ROOT);
        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
    }

    @Test
    public void whenInvalidContact_thenBadRequest() {
        final Contact contact = new Contact();

        final Response response = RestAssured.given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(contact)
                .post(API_ROOT);
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getStatusCode());
    }

    @Test
    public void whenGetSearchContact_thenOK() {
        final Response response = RestAssured.given()
                .param("query", "")
                .get(API_ROOT + "/search");
        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
    }

    @Test
    public void whenGetSearchContactWithoutParam_thenBadRequest() {
        final Response response = RestAssured.given()
                .get(API_ROOT + "/search");

        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getStatusCode());
    }

}
