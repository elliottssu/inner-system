package com.askingdata.shark.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.Objects;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.askingdata.common.PageUtil;
import com.askingdata.common.StringUtil;
import com.askingdata.persist.mongo.MongoRepositoryImpl;
import com.askingdata.shark.params.ProductFilter;
import com.askingdata.shark.params.ProductUpdate;
import com.askingdata.shark.po.Product;


@Component
public class ProductRepository extends MongoRepositoryImpl<Product>{

	public MongoTemplate getMongoTemplate() {
		return this.mongoTemplate;
	}
	
	public Object filterProducts(ProductFilter filter, String userName){
//		Query q = new Query(Criteria.where("key").is(key));
//		return this.findOne(q);
		Query q = new Query();
		Criteria cr = new Criteria("categoryLevel1").is(filter.getCategoryLevel1());
		q.addCriteria(cr);
		String searchKey = filter.getSearchKey();
		if(!StringUtil.isEmpty(searchKey)){
//			Criteria search = new Criteria();
//			search.orOperator(Criteria.where("brand").regex(keywork, "ig")
//					,Criteria.where("goodsName").regex(keywork, "ig")
//					,Criteria.where("goodsId").regex(keywork, "ig")
//					,Criteria.where("categoryName").regex(keywork, "ig")
//					,Criteria.where("shopName").regex(keywork, "ig"));
			q.addCriteria(Criteria.where(searchKey).regex(filter.getSearchValue(), "ig"));
		}
		if(!StringUtil.isEmpty(filter.getCategoryLevel2())){
			q.addCriteria(Criteria.where("categoryLevel2").is(filter.getCategoryLevel2()));
			
			if(!StringUtil.isEmpty(filter.getCategory())){
				q.addCriteria(Criteria.where("categorys").is(filter.getCategory()));
			}
		}
		if (!StringUtils.isBlank(filter.getPlatform())) {
			q.addCriteria(Criteria.where("platform").is(filter.getPlatform()));
		}
		//是否显示全部.
		if (filter.getIsAll() == 0) {
			q.addCriteria(Criteria.where("userName").is(userName));
		}
		
		int tag1 = 3;
		int tag2 = 1 ;
		try {
			tag1 = Integer.parseInt(filter.getTag1());
			if(tag1 == 1) {
				tag2 = Integer.parseInt(filter.getTag2());
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		Criteria or = new Criteria();
		
		if(tag1 == 0 ){
			or.orOperator(Criteria.where("tag1").is(tag1),Criteria.where("tag1").exists(false));
		} else{
			
			if(tag1 != 3){
				or.and("tag1").is(tag1);
			}
			
		}
		
		q.addCriteria(or);
		
		if(tag1 == 1) {
			q.addCriteria(Criteria.where("tag2").is(tag2));
		}
		
		int num = 1;
		int pageSize = 10;
		try {
			
			num = Integer.parseInt(filter.getPage());
			pageSize = Integer.parseInt(filter.getPageSize());
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		Long rowCount = this.mongoTemplate.count(q,this.getEntityClass());
		PageUtil<Product> page = new PageUtil<Product>(num, rowCount, pageSize, 10);
		
		q.with(new Sort(Direction.ASC,"id"));
		q.skip((num-1)*pageSize);
		q.limit(pageSize);
		System.out.println("query:"+q);
		page.setResults(this.mongoTemplate.find(q,this.getEntityClass()));
		return page;
		
		
	}
	
	
	public void updateProduct(ProductUpdate product,String user){
		//
//		Query q = new Query(Criteria.where("key").is(key));
//		return this.findOne(q);
		Query q = new Query(Criteria.where("goodsId").is(product.getGoodsId()));
		Update update = new Update();
		if(!StringUtil.isEmpty(product.getCategoryLevel1())){
			update.set("categoryLevel1", product.getCategoryLevel1());
			update.set("categoryLevel2", product.getCategoryLevel2());
			if(Objects.isNull(product.getCategorys())||product.getCategorys().size()==0){
				update.set("categorys", new ArrayList<String>());
			}else{
				update.set("categorys", product.getCategorys());
			}
		}
		
		
		update.set("tag1", Integer.parseInt(product.getTag1()));
		if(product.getTag1().equals("-1")){
			update.set("filterExcuse", product.getFilterExcuse());
		}else if (product.getTag1().equals("1")){
			update.set("tag2", Integer.parseInt(product.getTag2()));
			if(product.getTag2().equals("2")){
				update.set("price", product.getPrice());
			}
		}
		
		update.set("userName", user);
		update.set("modTime",new Date());
		this.mongoTemplate.updateFirst(q, update, this.getEntityClass());
	}
	
	public Product find(String goodsId){
		//
		Query q = new Query(Criteria.where("goodsId").is(goodsId));

		return this.mongoTemplate.findOne(q, this.getEntityClass());
	}
	
	
	
}
