<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <span id="show">${roleName}</span>
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
  <#list roles as au>
    <li><a href="#" onclick="submit(${au.roleId})">${au.roleName}</a></li>
  </#list>
  </ul>
</div>



<div class="page-heading">

	    <table class="table table-bordered table-hover">
	        <thead>
	            <tr>
	                <th>父</th>
	                <th>子</th>
	            </tr>
	        </thead>
	        <tbody>
	        <input type="hidden" id="roleIdqq" name="roleId" value="${roleId}"/>
	        <#assign flag=1 />
	            <#list ras as au>
		            
		            	<#if au.isParent == "1">
						    <#if flag == 2>
						        <td>
						        	<tr>
						        		<#assign flag=1 />
							</#if>
							<tr>
								<td>
									${au.name}
								</td>
					   
						<#else>
							<#if flag == 1>
								<td>
									<#assign flag=2 />
							</#if>
							<#if au.flag=="1">
								<input type="checkbox" class="check" checked="checked" name="selectoper" value="${au.pid}_${au.mid}" id="${au.pid}_${au.mid}" onClick='goSelect(this.id)'>${au.name}
							<#else>
								<input type="checkbox" class="check" name="selectoper" value="${au.pid}_${au.mid}" id="${au.pid}_${au.mid}" onClick='goSelect(this.id)'>${au.name}
							</#if>
						</#if>
			    </#list>
			    </td></tr>
	        </tbody>
	        
	    </table>
	    
	</div>
	<input class="btn btn-default" onclick="submitUpdate()" type="submit" value="提交">
	
	
	
	<div class="form-inline">
	  <div class="form-group">
	    <label for="exampleInputName2">添加侧边菜单项</label>
	    <input type="text" id="nameId" class="form-control" id="exampleInputName2" name="name" >
	  </div>
	  <button type="submit" onclick="addSideMenu()" class="btn btn-default">添加</button>
	</div>



	 <script type="text/javascript" src="js/page.js"></script>
<script type="text/javascript" >
   function submit(id){
   		post("setAuthorization?roleId="+id,"get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
   }  
   
   function addSideMenu(id){
   		var name=$("#nameId").val();
   		post("addSideMenu?name="+name,"get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
   } 
   
   function submitUpdate(){
   		if($("#show").html()=="请选择角色"){
   			alert("没有选择角色");
   		}
   		var roleId=$("#roleIdqq").val();
   		//var menuname=$("#menuname").serialize();
   		var selectoper=$(".check").serialize();
   		post("updateRoleAuthorization?roleId="+roleId+"&"+selectoper,"get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
   }
   

		
		
		//权限：全部选中/不选中
		function checkAllOper(oper){
			$("input[type='checkbox'][name='selectoper']").attr("checked",oper.checked);
		}
		//用户：全部选中/不选中
		function checkAllUser(user){
			$("input[type='checkbox'][name='selectuser']").attr("checked",user.checked);
		}
		//选中复选框，触发事件
		function goSelect(id){
		//alert(id);
			//按照_符号分隔
			var array = id.split("_");
			if(array[0] == array[1]){//此时说明操作的（父）节点
				//选中父
				if($("#"+id)[0].checked){
					//子都选中
					$("input[type='checkbox'][name='selectoper'][id^='"+array[0]+"']").attr("checked",true);
				}
				//取消父
				else{
					//子都取消
					$("input[type='checkbox'][name='selectoper'][id^='"+array[0]+"']").attr("checked",false);
				}
			}
			else{//说明此时操作的子设置中的一个(子)
				//当选中子设置中的一个，则父一定被选中
				if($("#"+id)[0].checked){
					$("input[type='checkbox'][name='selectoper'][id^='"+array[0]+"'][id$='"+array[0]+"']").attr("checked",true);
				}
				//当取消子设置中的一个
				else{
					//先查找子设置的对象
					var $check = $("input[type='checkbox'][name='selectoper'][id^='"+array[0]+"']:not([id$='"+array[0]+"'])");
					//遍历子设置的对象
					/**
					 * flag:用于判断当前子设置的对象是否有被选中
					 *   * flag=false，子对象都没有被选中，此时父要被取消
					 *   * flag=true，子对象中至少有一个被选中，此时不做任何操作
					 */
					var flag = false;
					$check.each(function(index,domEle){
						if(domEle.checked){
							flag = true;
							return false;
						}
					})
					if(!flag){
						$("input[type='checkbox'][name='selectoper'][id^='"+array[0]+"'][id$='"+array[0]+"']").attr("checked",false);
					}
				}
			}
		}
</script>