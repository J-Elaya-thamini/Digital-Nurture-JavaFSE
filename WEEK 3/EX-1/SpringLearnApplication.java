package com.cognizant.spring_learn;

import java.util.List;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    // Logger object
    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) throws Exception {

        // Starts the Spring Boot application
        SpringApplication.run(SpringLearnApplication.class, args);

        // Calls the method to display the date
        displayDate();
        //displayCountry();
        //beanScopeDemo();
        displayCountryList();
    }

    public static void displayDate() throws Exception {

        LOGGER.info("START");

        // Load the Spring XML configuration file
        ApplicationContext context =
                new ClassPathXmlApplicationContext("date-format.xml");

        // Get the SimpleDateFormat bean from the Spring container
        SimpleDateFormat format =
                context.getBean("dateFormat", SimpleDateFormat.class);

        // Convert the String into a Date object
        Date date = format.parse("31/12/2018");

        // Print the date using Logger
        LOGGER.debug("Date : {}", date);

        LOGGER.info("END");
    }
    public static void displayCountry() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);

        LOGGER.info("Country : {}", country);
    }
    public static void beanScopeDemo() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country c1 = context.getBean("country", Country.class);
        Country c2 = context.getBean("country", Country.class);

        LOGGER.info("Country 1 : {}", c1);
        LOGGER.info("Country 2 : {}", c2);

        LOGGER.info("Are both objects same? {}", c1 == c2);
    }
    @SuppressWarnings("unchecked")
    public static void displayCountryList() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        List<Country> countries =
                (List<Country>) context.getBean("countryList");

        LOGGER.info("Country List:");

        for (Country country : countries) {
            LOGGER.info("{}", country);
        }
    }
}