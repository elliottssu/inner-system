package com.askingdata.shark.repository;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.po.BaseData;


@Component
public class BaseDataRepository extends MongoRepositoryImpl<BaseData>{
	
	
	public BaseData find(String key){
		//
		Query q = new Query(Criteria.where("key").is(key));
		return this.findOne(q);
	}
	
}
