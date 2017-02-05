package com.askingdata.shark.params;

import lombok.Data;


@Data
public class ProductFilter {

	
	
    private String categoryLevel1;
    
    private String categoryLevel2;
    
    private String platform;
    private String category;
    
    private String tag1;
    
    private String tag2;
    
    private String page;
    
    private String pageSize;
    
    private String searchKey;
    
    private String searchValue;
    
    private int isAll;//是否显示全部
}