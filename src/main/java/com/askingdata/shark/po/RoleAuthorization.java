package com.askingdata.shark.po;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roleAuthorization")
public class RoleAuthorization {

	private String roleId;
	private String mid;
	private String pid;
	private String isMenu;
	private String menuname;
	private String onclick;
	private String isImg;
	
	
	
	public String getIsImg() {
		return isImg;
	}
	public void setIsImg(String isImg) {
		this.isImg = isImg;
	}
	public String getOnclick() {
		return onclick;
	}
	public void setOnclick(String onclick) {
		this.onclick = onclick;
	}
	public String getMenuname() {
		return menuname;
	}
	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}
	public String getIsMenu() {
		return isMenu;
	}
	public void setIsMenu(String isMenu) {
		this.isMenu = isMenu;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
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
	//注意这里重写了equals方法  
    @Override  
    public boolean equals(Object obj){  
        if(obj == null){  
            return false;  
        }else {           
                if(this.getClass() == obj.getClass()){  
                	RoleAuthorization u = (RoleAuthorization) obj;  
                    if(this.getMid().equals(u.getMid())&&this.getPid().equals(u.getPid())){  
                        return true;  
                    }else{  
                        return false;  
                    }  
                  
            }else{  
                return false;  
            }  
        }             
    } 
	
}
