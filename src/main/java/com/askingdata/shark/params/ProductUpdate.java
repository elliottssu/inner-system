package com.askingdata.shark.params;

import java.util.List;

import lombok.Data;


@Data
public class ProductUpdate {

	
	private String goodsId;
	
    private String categoryLevel1;
    
    private String categoryLevel2;
    
    private List<String> categorys;
    // -1 0 1 2   过滤  待处理  错误  正确
    private String tag1;
    // tag1 = 1    时才有意义  || 1  类目错误   2 捆绑销售   3类目错误+捆绑销售 (预留 没多大意义)
    private String tag2;
    
	//修正价格
	private double price;
	//过滤原因
	private String filterExcuse;
    
}