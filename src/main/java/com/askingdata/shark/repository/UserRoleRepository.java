package com.askingdata.shark.repository;

import java.util.Collection;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.po.Role;
import com.askingdata.shark.po.User;
import com.askingdata.shark.po.UserRole;

@Component("UserRoleRepository2")
public class UserRoleRepository extends MongoRepositoryImpl<UserRole> {
	
	public List<UserRole> findUserRoleByUserId(String id) {
		ObjectId objid=new ObjectId(id);
		Query query=new Query();
		query.addCriteria(Criteria.where("userId").is(objid));
		List<UserRole> list=find(query);

		return list;
	}

	public void removeUserRoleByUserIdAndRoleId(ObjectId userId, String roleId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		query.addCriteria(Criteria.where("roleId").is(roleId));
		this.remove(query);
	}

}
