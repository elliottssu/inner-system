package com.askingdata.web.controller;

import java.security.Principal;
import java.util.Objects;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ServerProperties.Session;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.askingdata.common.ResultData;
import com.askingdata.common.StringUtil;
import com.askingdata.constant.ErrorMessage;
import com.askingdata.constant.ResultCode;
import com.askingdata.shark.params.ProductFilter;
import com.askingdata.shark.params.ProductUpdate;
import com.askingdata.web.service.TagCorrectedService;

/**
 * 
 * @author jy
 *
 */
@Slf4j
@RestController
@RequestMapping("/tags")
public class TagCorrectedController {
	
	
	@Autowired
	TagCorrectedService tagService;

	
	/**
	 * 获取分页
	 * @return
	 */
	@RequestMapping(value="/categorys",method = RequestMethod.GET)
	public ResultData getCategory(){
		ResultData resultData = new ResultData();
		resultData.setCode(ResultCode.SUCCESS);
		resultData.setMsg(ErrorMessage.NULL);
		resultData.setData(tagService.getCategory());
		return resultData;
	}
	
	/**
	 * 加载商品数据
	 * @param filter
	 * @return
	 */
	@RequestMapping(value="/filter/products",method = RequestMethod.POST)
	public ResultData filterProducts(@RequestBody ProductFilter filter, Principal principal){
		String userName = principal.getName();
		ResultData resultData = new ResultData();
		if(Objects.isNull(filter)){
			resultData.setCode(ResultCode.PARAM_ERROR);
			resultData.setMsg("参数不能为null");
			resultData.setData(null);
			return resultData;
		}
		if(StringUtil.anyEmpty(filter.getCategoryLevel1(),filter.getTag1())){
			resultData.setCode(ResultCode.PARAM_ERROR);
			resultData.setMsg("参数不能为null");
			resultData.setData(null);
			return resultData;
		}
		
		if(!filter.getTag1().matches("-1|[0123]")){
			resultData.setCode(ResultCode.PARAM_ERROR);
			resultData.setMsg("tag1 参数错误");
			resultData.setData(null);
			return resultData;
		}
		
		if(filter.getTag1().equals("1")){
			if(StringUtil.isEmpty(filter.getTag2())){
				resultData.setCode(ResultCode.PARAM_ERROR);
				resultData.setMsg("参数不能为null");
				resultData.setData(null);
				return resultData;
			}
			if(!filter.getTag2().matches("[123]")){
				resultData.setCode(ResultCode.PARAM_ERROR);
				resultData.setMsg("tag2 参数错误");
				resultData.setData(null);
				return resultData;
			}
		}
		
		if(!StringUtil.isEmpty(filter.getSearchKey())){
			if(!filter.getSearchKey().matches("goodsId|goodsName|brand|shopName|categoryName")){
				resultData.setCode(ResultCode.PARAM_ERROR);
				resultData.setMsg("搜索关键字错误");
				resultData.setData(null);
				return resultData;
			}
			if(StringUtil.isEmpty(filter.getSearchValue())){
				resultData.setCode(ResultCode.PARAM_ERROR);
				resultData.setMsg("搜索值不能为空");
				resultData.setData(null);
				return resultData;
			}
		}
		
		
		
		resultData.setCode(ResultCode.SUCCESS);
		resultData.setMsg(ErrorMessage.NULL);
		resultData.setData(tagService.filterProducts(filter, userName));
		return resultData;
	}
	
	@RequestMapping(value="/products",method = RequestMethod.PUT)
	public ResultData updateProduct(@RequestBody ProductUpdate product,Principal principal){
		ResultData resultData = new ResultData();
		String user = principal.getName();
		if(Objects.isNull(product)){
			resultData.setCode(ResultCode.PARAM_ERROR);
			resultData.setMsg("参数不能为null");
			resultData.setData(null);
			return resultData;
		}
		if(StringUtil.anyEmpty(product.getGoodsId(),product.getTag1())){
			resultData.setCode(ResultCode.PARAM_ERROR);
			resultData.setMsg("参数不能为null");
			resultData.setData(null);
			return resultData;
			
		}
		
		if(!StringUtil.isEmpty(product.getCategoryLevel1())){
			
			if(StringUtil.isEmpty(product.getCategoryLevel1())){
				resultData.setCode(ResultCode.PARAM_ERROR);
				resultData.setMsg("请确认二级类目");
				resultData.setData(null);
				return resultData;
			}
			
		}
		
		if(!product.getTag1().matches("-1|[012]")){
			resultData.setCode(ResultCode.PARAM_ERROR);
			resultData.setMsg("tag1 参数错误");
			resultData.setData(null);
			return resultData;
		}
		
		if(product.getTag1().equals("1")){
			if(StringUtil.anyEmpty(product.getTag2())){
				resultData.setCode(ResultCode.PARAM_ERROR);
				resultData.setMsg("参数不能为null");
				resultData.setData(null);
				return resultData;
			}
			if(!product.getTag2().matches("[123]")){
				resultData.setCode(ResultCode.PARAM_ERROR);
				resultData.setMsg("tag2 参数错误");
				resultData.setData(null);
				return resultData;
			}
		}
		
		
		
		
		resultData.setCode(ResultCode.SUCCESS);
		resultData.setMsg(ErrorMessage.NULL);
		resultData.setData(tagService.updateProduct(product,user));
		return resultData;
	}
	
	@RequestMapping(value="/products/{goodsId}",method = RequestMethod.GET)
	public ResultData getProduct(@PathVariable String goodsId){
		ResultData resultData = new ResultData();
		
		if(StringUtil.isEmpty(goodsId)){
			resultData.setCode(ResultCode.PARAM_ERROR);
			resultData.setMsg("参数不能为null");
			resultData.setData(null);
			return resultData;
		}

		resultData.setCode(ResultCode.SUCCESS);
		resultData.setMsg(ErrorMessage.NULL);
		resultData.setData(tagService.find(goodsId));
		return resultData;
	}
	

	@RequestMapping(value = "/products/count", method = RequestMethod.GET)
	public ResultData countUserTags(String userName) {
		ResultData resultData = new ResultData();
		resultData.setCode(ResultCode.SUCCESS);
		resultData.setMsg(ErrorMessage.NULL);
		resultData.setData(this.tagService.countUserTags(userName));
		return resultData;
	}


	

	

	

	
	  
	

	

	

	


}
