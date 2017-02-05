package com.askingdata.shark.po;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sideMenu")
public class SideMenu {

	private String menuId;
	private String menuName;
	
	
	public String getMenuId() {
		return menuId;
	}
	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	
	
}
