package com.askingdata.shark.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.po.Authorization;

@Component("AuthorizationRepository2")
public class AuthorizationRepository extends MongoRepositoryImpl<Authorization> {
	


//	public Authorization findAuthorizationByRoleId(String mid,String pid) {
//		Query query=new Query();
//		query.addCriteria(Criteria.where("mid").is(mid));
//		query.addCriteria(Criteria.where("pid").is(pid));
//		query.with(new Sort(Direction.ASC,"mid"));
//		return this.findOne(query);
//	}
	
	public List<Authorization> findAuthorizationByRoleId() {
		Query query=new Query();
		query.with(new Sort(Direction.ASC,"mid"));
		return this.find(query);
	}
}
