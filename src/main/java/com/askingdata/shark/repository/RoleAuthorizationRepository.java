package com.askingdata.shark.repository;

import java.util.List;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.po.RoleAuthorization;

@Component("RoleAuthorizationRepository2")
public class RoleAuthorizationRepository extends MongoRepositoryImpl<RoleAuthorization> {
	

	public List<RoleAuthorization> findRoleAuthorizationByRoleId(String roleId) {
		Query query=new Query();
		query.addCriteria(Criteria.where("roleId").is(roleId));
		return this.find(query);
	}

	public void deleteRoleAuthorizationByRoleId(String roleId) {
		Query query=new Query();
		query.addCriteria(Criteria.where("roleId").is(roleId));
		//remove(query);
		this.mongoTemplate.remove(query, RoleAuthorization.class);
	}

	public void saveRoleAuthorization(RoleAuthorization ra) {
		this.save(ra);
	}

}
