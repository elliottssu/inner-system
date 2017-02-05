package com.askingdata.shark.po;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userRole")
public class UserRole {

	private String userId;
	private String roleId;
	
	
	private String roleName;//删除 role的时候用
	
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	
}
