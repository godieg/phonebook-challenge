package com.godie.phonebookchallenge.contact.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by Diego Garcia on 8/31/19.
 */
@Configuration
@EnableJpaRepositories("com.godie.phonebookchallenge.contact.dao")
@EntityScan("com.godie.phonebookchallenge.contact.domain")
public class JpaConfig {

}
