package com.askingdata.shark.repository;

import java.util.List;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.po.Role;

@Component("RoleRepository3")
public class RoleRepository extends MongoRepositoryImpl<Role> {
	
	public Role findRoleByRoleId(String roleId) {
		Query query=new Query();
		query.addCriteria(Criteria.where("roleId").is(roleId));
		Role role=findOne(query);
		
		return role;
	}

	public List<Role> findRoleByUserId(String id) {
		Query query=new Query();
		query.addCriteria(Criteria.where("userId").is(id));
		return this.find(query);
	}

	public List<Role> findRoleByRoleId2(String roleId) {
		Query query=new Query();
		query.addCriteria(Criteria.where("roleId").is(roleId));
		return this.find(query);
	}

	public Role findRoleByRoleName(String roleName) {
		Query query=new Query();
		query.addCriteria(Criteria.where("roleName").is(roleName));
		return this.findOne(query);
	}



}
