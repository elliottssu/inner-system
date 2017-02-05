package com.askingdata.shark.po;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;


/**
 * 
 * @author jy
 * 
 * 
 *
 */

@Data
@Document(collection = "productsTag")
public class Product {
	
	@Id
    private String id;
	
	private String goodsId;
	
	private String goodsName;
	
	private String platform;
	
	private String img;
	
	private String url;
	
	private String brand;
	
	private String shopName;
	
	private String categoryLevel1;
	
	private String categoryLevel2;
	
	private List<String> categorys;
	
	// -1 0 1 2   过滤  待处理  错误  正确
	private Integer tag1;
	// tag1 = 1    时才有意义  || 1  类目错误   2 捆绑销售   3类目错误+捆绑销售 (预留 没多大意义)
	private Integer tag2;
	//修正价格
	private double price;
	//过滤原因
	private String filterExcuse;
	
	private String userName;

	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
//	@Field("modTime")
	private Date modTime;

}
