package com.askingdata.shark.repository;

import java.util.List;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.po.User;

@Component("UserRepository2")
public class UserRepository extends MongoRepositoryImpl<User> {
	
//	public List<User> find(String key,String value){
//		return this.mongoTemplate.find(new Query(Criteria.where(key).is(value)), this.getEntityClass());
//	}
//	
//	public PageUtil<User> findByPage( int pageNum, int pageSize, Query query){
//		
//	    long count=this.count(query);
//		PageUtil<User> page=new PageUtil<User>(pageNum, (int)count, pageSize, 5);
//		query.skip(page.getStartRow());
//		query.limit(page.getPageSize());
//		page.setResults(this.mongoTemplate.find(query, this.getEntityClass()));
//		//query.with(new Sort(Direction.DESC,"name"));
//		return page;
//	}

	public User findUserByUsername(String username) {
		
		Query query=new Query();
		query.addCriteria(Criteria.where("username").is(username));
		User u=findOne(query);
		return u;
	}


	public void saveUser(User user) {
		this.mongoTemplate.insert(user);
	}

	public User findUserById(String id) {
		Query query=new Query();
		query.addCriteria(Criteria.where("id").is(id));
		return findOne(query);
	}

	public List<User> findAllUser() {
		return findAll();
	}


	public User findUserByUserName(String username) {
		Query query=new Query();
		query.addCriteria(Criteria.where("username").is(username));
		return findOne(query);
	}

}
