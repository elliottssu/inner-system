package com.askingdata.web.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.ServerProperties.Session;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.Fields;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.CriteriaDefinition;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.askingdata.common.StringUtil;
import com.askingdata.shark.params.ProductFilter;
import com.askingdata.shark.params.ProductUpdate;
import com.askingdata.shark.po.Product;
import com.askingdata.shark.repository.BaseDataRepository;
import com.askingdata.shark.repository.ProductRepository;
import com.askingdata.shark.repository.SharkMongoConfig;

import lombok.Data;

/**
 * 
 * @author jy
 *
 */
@Service
public class TagCorrectedService {

	@Value("${shark.local}")
	private boolean local;

	private String tagUid;

	BaseDataRepository baseRepository;

	ProductRepository productRepository;

	@Autowired
	SharkMongoConfig mongoConfig;

	// MongoTemplate mongoTemplate;
	public Object getCategory() {
		try {
			return baseRepository.find("categoryLevel2");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

	public Object filterProducts(ProductFilter filter,String userName) {
		System.out.println(local);
		try {
			return productRepository.filterProducts(filter, userName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

	public Object updateProduct(ProductUpdate product, String user) {
		try {
			productRepository.updateProduct(product, user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

	/**
	 * 统计用户打的标签数量.
	 * <pre>
	 * {$match:{"userName":{"$ne":null}}},
	 * {$group:{"_id":{"userName":"$userName"},"count":{"$sum":1}}},
	 * {$project:{"userName":"$_id.userName","count":1}}
	 * </pre>
	 * @param userName 可选.不指定用户名时，显示所有用户已打的标签数
	 * @return 
	 */
	//@PreAuthorize("hasAuthority('超级管理员') or hasAuthority('管理员')")
	public List<uesrTagsCount> countUserTags(String userName) {
		// Query query = new Query();
		// query.addCriteria(Criteria.where(key))
		Criteria criteria = Criteria.where("userName").ne(null);
		if (!StringUtils.isBlank(userName)) {
			criteria.in(userName);
		}
		MatchOperation match = Aggregation.match(criteria);
		Aggregation agg = Aggregation.newAggregation(match, Aggregation.group("userName").count().as("count"),
				Aggregation.project("count").andExpression("$_id.userName", "userName"));
		System.out.println(criteria.toString());
		List<uesrTagsCount> list = productRepository.getMongoTemplate()
				.aggregate(agg, Product.class, uesrTagsCount.class).getMappedResults();
		return list;
	}

	@Data
	private class uesrTagsCount {
		private String userName;
		private Integer count;
	}

	public Object find(String goodsId) {
		return productRepository.find(goodsId);

	}

	@Autowired
	public void setBaseRepository(BaseDataRepository baseRepository) {
		MongoTemplate mongoTemplate;
		if (local) {
			if (StringUtil.isEmpty(tagUid)) {
				tagUid = "57b81c3d0e645fe41c8b4567";
			}
		} else {
			if (StringUtil.isEmpty(tagUid)) {
				tagUid = "57e4c2ad0cf2965873b1b989";
			}
		}
		try {
			mongoTemplate = mongoConfig.getMongoTemplate("sharkView_" + tagUid);
			baseRepository.setMongoTemplate(mongoTemplate);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(tagUid);
		this.baseRepository = baseRepository;
	}

	@Autowired
	public void setProductRepository(ProductRepository productRepository) {
		MongoTemplate mongoTemplate;
		if (local) {
			if (StringUtil.isEmpty(tagUid)) {
				tagUid = "57b81c3d0e645fe41c8b4567";
			}
		} else {
			if (StringUtil.isEmpty(tagUid)) {
				tagUid = "57e4c2ad0cf2965873b1b989";
			}
		}
		try {
			mongoTemplate = mongoConfig.getMongoTemplate("sharkCloud_" + tagUid);
			productRepository.setMongoTemplate(mongoTemplate);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.productRepository = productRepository;
	}

}
