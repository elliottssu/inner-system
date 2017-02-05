package com.askingdata.shark.po;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "authorization")
public class Authorization {

	private String mid;//权限code  主键id
	private String pid;//父级，如果是根节点为0
	private String name;
	private String isParent;//是否是父节点
	private String isMenu;//是否是系统菜单结构
	private String onclick;
	private String isImg;
	private String flag="0";
	
	
	
	public String getIsImg() {
		return isImg;
	}
	public void setIsImg(String isImg) {
		this.isImg = isImg;
	}
	public String getMid() {
		return mid;
	}
	public void setMid(String mid) {
		this.mid = mid;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public String getIsParent() {
		return isParent;
	}
	public void setIsParent(String isParent) {
		this.isParent = isParent;
	}
	public String getIsMenu() {
		return isMenu;
	}
	public void setIsMenu(String isMenu) {
		this.isMenu = isMenu;
	}
	

	public String getOnclick() {
		return onclick;
	}
	public void setOnclick(String onclick) {
		this.onclick = onclick;
	}
	@Override
	public String toString() {
		return "Authorization [mid=" + mid + ", pid=" + pid + ", name=" + name
				+ ", isParent=" + isParent + ", isMenu=" + isMenu + ", flag="
				+ flag + "]";
	}
	
	
}
