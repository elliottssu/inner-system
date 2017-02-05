
    <link rel="stylesheet" href="css/bootstrap-tagsinput.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/themes/github.css">
    <link rel="stylesheet" href="css/powermanage/app.css">
<div class="page-heading">
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>用户</th>
                <th>删除角色</th>
                <th>添加角色</th>
            </tr>
        </thead>
        
        <tbody>
            <#list users as user>
            	<tr>
			        <td>${user.username}</td>
			        <input type="hidden" id="userId${user_index}" value="${user.id}">
					<td>
						<select multiple data-role="tagsinput">
							<#list user.roles as role>
							  <option value="${role.roleName}_${user_index}"></option>
							</#list>
						</select>
					</td>
					<td>
						<div class="dropdown">
						  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						    请选择角色
						    <span class="caret"></span>
						  </button>
						  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
						  <#list user.addRoles as r>
						  	<li><a href="#" onclick="submit2(${r.roleId},${user_index})">${r.roleName}</a></li>
						  </#list>
						  </ul>
						</div>
					</td>
			    </tr>
		    </#list>
        </tbody>
    </table>
</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js"></script>
    <script src="js/bootstrap-tagsinput.min.js"></script>
    <script src="js/powermanage/rainbow.min.js"></script>
    <script src="js/powermanage/generic.js"></script>
    <script src="js/powermanage/html.js"></script>
    <script src="js/powermanage/javascript.js"></script>
    <script src="js/powermanage/app.js"></script>
    <script src="js/powermanage/app_bs3.js"></script>
    
<script type="text/javascript">
function submit2(id,index){
var userId=$("#userId"+index).val();
post("addUserRole?roleId="+id+"&userId="+userId,"get",null,function(data){
    	$("html,body").animate({scrollTop:0},'fast');
        $("#main").html(data);
    	$(".main-content").css({
        	"height":"100%"
        })

    })
    
} 
$('select').on('itemRemoved', function(event) {
	//alert(1111);
	var str=event.item;
	var arr=str.split("_");
	var userId=$("#userId"+arr[1]).val();
	//alert(arr[0]);
	//alert(userId);


  post("deleteUserRole?roleName="+arr[0]+"&userId="+userId,"get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
	    $("#main").html(data);
		$(".main-content").css({
	    	"height":"100%"
	    })
	
	})
});
</script>
