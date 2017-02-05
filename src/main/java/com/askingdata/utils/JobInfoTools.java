package com.askingdata.utils;

import java.util.ArrayList;
import java.util.Collection;

import com.dangdang.ddframe.job.domain.JobBriefInfo;
import com.dangdang.ddframe.job.domain.JobBriefInfo.JobStatus;

public class JobInfoTools {
	
	public static Collection<JobBriefInfo> filterNormalJob(Collection<JobBriefInfo> jobBriefInfos){
		Collection<JobBriefInfo> immediate=new ArrayList<JobBriefInfo>();
		for(JobBriefInfo value:jobBriefInfos){
			if(value.getStatus().compareTo(JobStatus.OK)==0 && value.getCron()!=null){
				immediate.add(value);
			};
		}
		return immediate;
	}
	public static Collection<JobBriefInfo> filterAllCrashJob(Collection<JobBriefInfo> jobBriefInfos){
		Collection<JobBriefInfo> immediate=new ArrayList<JobBriefInfo>();
		for(JobBriefInfo value:jobBriefInfos){
			if(value.getStatus().compareTo(JobStatus.ALL_CRASHED)==0 || value.getCron()==null){
				immediate.add(value);
			};
		}
		return immediate;
	}
}
