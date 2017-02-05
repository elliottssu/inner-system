package com.askingdata.shark.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.po.MenuNum;

@Component("MenuNumRepository")
public class MenuNumRepository extends MongoRepositoryImpl<MenuNum> {
	


	public void removeUserRoleByUserIdAndRoleId(ObjectId userId, String roleId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		query.addCriteria(Criteria.where("roleId").is(roleId));
		this.remove(query);
	}

	public MenuNum findNum() {
		Query query = new Query();
		query.addCriteria(Criteria.where("menuId").is("menuId"));
		return this.findOne(query);
	}

	public void updateNum(int i) {
		Query query = new Query();
		query.addCriteria(Criteria.where("menuId").is("menuId"));
		i++;
		Update update = Update.update("menuNum", i+"");
		update(query, update);
		
	}

}
