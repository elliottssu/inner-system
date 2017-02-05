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
import com.askingdata.shark.po.SaveUserRole;
import com.askingdata.shark.po.User;
import com.askingdata.shark.po.UserRole;

@Component("SaveUserRoleRepository2")
public class SaveUserRoleRepository extends MongoRepositoryImpl<SaveUserRole> {
	


}
