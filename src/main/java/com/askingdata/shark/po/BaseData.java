package com.askingdata.shark.po;

import java.util.List;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


/**
 * 
 * @author jy
 * 
 * 用于获取基础数据,爆款二级分类列表和一些常用下拉菜单列表
 *
 */

@Data
@Document(collection = "baseData")
public class BaseData {
	
	@Id
    private String id;
	
	private String key;
	
	private List<Object> values;

}
