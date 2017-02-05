package com.askingdata;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.askingdata.common.AES;
import com.google.common.collect.Lists;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
/**
 * 
 * @author lizengfa
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
//@Import(SharkMongoConfig.class)
public class ApplicationMain implements CommandLineRunner{
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	public static void main(String[] args) {
		AES.init();
		SpringApplication.run(ApplicationMain.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	}
}
