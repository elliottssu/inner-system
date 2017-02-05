package com.askingdata.utils;

import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperationContext;

import com.mongodb.DBObject;

public class CustomAggregationOperation implements AggregationOperation {

	private DBObject operation;

	public CustomAggregationOperation(DBObject operation) {
		this.operation = operation;
	}

	@Override
	public DBObject toDBObject(AggregationOperationContext context) {
		// TODO Auto-generated method stub
		return context.getMappedObject(operation);
	}

}
