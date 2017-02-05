package com.askingdata.shark.po;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "User")
public class User {

	@Id
    private String id;

    private String username;

    private String passwordHash;
    
    private List<Role> roles;
    
    private List<Authorization> authorizations;
    
    private List<RoleAuthorization> roleAuthorizations;
    
    private List<Role> addRoles;
    
    
    private String rolestr[];
    
    public User() {
		super();
	}

	public User(String id, String username, String passwordHash) {
		super();
		this.id = id;
		this.username = username;
		this.passwordHash = passwordHash;
	}

	public List<Role> getAddRoles() {
		return addRoles;
	}

	public void setAddRoles(List<Role> addRoles) {
		this.addRoles = addRoles;
	}

	public void setId(String id){
    	this.id=id;
    }
    
    public String getId() {
        return id;
    }



    public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public List<Authorization> getAuthorizations() {
		return authorizations;
	}

	public void setAuthorizations(List<Authorization> authorizations) {
		this.authorizations = authorizations;
	}


	public String[] getRolestr() {
		return rolestr;
	}

	public void setRolestr(String[] rolestr) {
		this.rolestr = rolestr;
	}

	public List<RoleAuthorization> getRoleAuthorizations() {
		return roleAuthorizations;
	}

	public void setRoleAuthorizations(List<RoleAuthorization> roleAuthorizations) {
		this.roleAuthorizations = roleAuthorizations;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;

		for(Role r:roles){
			for(Role rr:other.getRoles()){
				if(!r.getRoleName().equals(rr.getRoleName())){
					if(rr.getRoleName().equals("超级管理员") && rr.getRoleName().equals("管理员")){
						return false;
					}
					
				}
			}
		}
		return true;
	}

}
