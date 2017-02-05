package com.askingdata.shark.repository;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.google.common.collect.Lists;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
/**
 * mongodb configuration
 * FIXME
 * @author lizengfa
 *
 */

@Setter
@Getter
@Configuration
@ConfigurationProperties(prefix = "mongo",locations = "classpath:mongo.properties") 
//@PropertySource("mongo.properties")
public class SharkMongoConfig extends AbstractMongoConfiguration{
	
	private String testMongo;
	
	@Value("${shark.local}")
	private boolean local;
	
	@Value("${shark.test}")
	private boolean test;

	private String host;
	
	private int port;
	
	private String hostSlave1;
	
	private int portSlave1;
	
    private String hostSlave2;
	
	private int portSlave2;
	
	private String seed1;
	
	private String seed2;
	
	private String replSetName;
	
	private String database;
	
	private String username;
	
	private String password;
	
	private int connectionsPerHost;//TODO don't know load fol. property whether or not,need check it later.
	
	private int threadsAllowedToBlockForConnectionMultiplier;
	
	private int connectTimeout;
	
	private int maxWaitTime;
	
	private boolean autoConnectRetry;
	
	private boolean socketKeepAlive;
	
    private int	socketTimeout;
    
    private boolean slaveOk;
    
    private MongoClient client;
	
	@Override
	protected String getDatabaseName() {
		return database;
	}

	@Override
//	@Bean
	public Mongo mongo() throws Exception {
		System.out.println("local");
		System.out.println("local:"+local);
		System.out.println("test:"+test);
		if(local){//本地
			MongoCredential credential = MongoCredential.createCredential(username, database, password.toCharArray());
			List<MongoCredential> list = Lists.newArrayList();
			//TODO auth failed,but added right username and password
//			list.add(credential); 
			ServerAddress serverAddress = new ServerAddress(host, port);
			ServerAddress serverAddress2 = new ServerAddress(hostSlave1,portSlave1);
			ServerAddress serverAddress3 = new ServerAddress(hostSlave1,portSlave1);
			List<ServerAddress> addresses = Lists.newArrayList();
			addresses.add(serverAddress);
			addresses.add(serverAddress2);
			addresses.add(serverAddress3);
			client = new MongoClient(addresses,list);
			return this.client;
		}else{//阿里云
			
			if(test){
				List<MongoCredential> credentials = new ArrayList<MongoCredential>();
				credentials.add(MongoCredential.createScramSha1Credential(username,
						"admin", password.toCharArray()));
				System.out.println(testMongo);
				ServerAddress server1 = new ServerAddress(testMongo, 3717);
				
				MongoClientURI connectionString = new MongoClientURI("mongodb://"
						+ username + ":" + password + "@" + server1  + "/"
						+ "admin");
//				List<ServerAddress> addresses = Lists.newArrayList();
//				addresses.add(server1);
				client =new MongoClient(connectionString);
				return this.client;
				
			}else{
				
				List<MongoCredential> credentials = new ArrayList<MongoCredential>();
				credentials.add(MongoCredential.createScramSha1Credential(username,
						"admin", password.toCharArray()));
				ServerAddress server1 = new ServerAddress(seed1, 3717);
				ServerAddress server2 = new ServerAddress(seed1, 3717);
				List<ServerAddress> addresses = Lists.newArrayList();
				addresses.add(server1);
				addresses.add(server2);
				MongoClientOptions options = MongoClientOptions.builder()
						.requiredReplicaSetName(replSetName).socketTimeout(30000)
						.connectionsPerHost(1).build();
				client =new MongoClient(addresses, credentials,options);
				return this.client;
				
			}
			
			
		}
		
	}
	
//	@Bean
//	public MongoTemplate mongoTemplate(Mongo mongo) throws Exception {
//		// TODO Auto-generated method stub
//		return new MongoTemplate(mongo,database);
//	}
	/**
	 * 根据uid获取关联sharkView_uid的MongoTemplate
	 * @param uid
	 * @return
	 * @throws Exception
	 */
	public MongoTemplate getMongoTemplateByUid(String uid) throws Exception{
        MongoTemplate mongoTemplate =new MongoTemplate(this.client,"sharkView_"+uid);
		return mongoTemplate;
	}
	
	/**
	 * 根据databaseName获取关联databaseName的MongoTemplate
	 * @param databaseName
	 * @return
	 * @throws Exception
	 */
	public MongoTemplate getMongoTemplate(String databaseName) throws Exception {
		MongoTemplate mongoTemplate = new MongoTemplate(this.client, databaseName);
		return mongoTemplate;
	}
}
