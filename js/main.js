$(document).ready(function(){
	//输入框
	$("body").on("focus", ".box-form .form-control", function(){
		var $parent = $(this).closest(".input-group");
		$(".input-group-focus").removeClass("input-group-focus");
		$(".error-title").css("visibility", "hidden");
		$parent.addClass("input-group-focus");
	});
	$("body").on("blur", ".box-form .form-control", function(){
		var $parent = $(this).closest(".input-group");
		$(".input-group-focus").removeClass("input-group-focus");
		$parent.addClass("input-group-focus");
		$(".error-title").css("visibility", "hidden");
		if($(this).val().length == 0){
			$parent.next(".error-title").css("visibility", "visible");
		}
	});
	//btn-circle
	$("body").on("mouseover", ".btn-circle", function(){
		$(this).addClass($(this).attr("data-hover"));
	}).on("mouseout", ".btn-circle", function(){
		$(this).removeClass($(this).attr("data-hover"));
	});
	//全部
	$("body").on("click", ".list-quanbu li a", function(){
		$(this).closest("li").addClass("active").siblings(".active").removeClass("active");
	});
	//checkbox
	$(".checkbox-custom :checkbox").each(function(){
		if($(this).prop("checked")){
			$(this).closest(".checkbox-custom").addClass("checkbox-custom-checked");
		}
	});
	$("body").on("click", ".checkbox-custom", function(){
		var $checkbox = $(this).find(":checkbox");
		if($checkbox.prop("checked")){
			$checkbox.removeProp("checked");
			$(this).removeClass("checkbox-custom-checked");
		}else{
			$checkbox.prop("checked", "checked");
			$(this).addClass("checkbox-custom-checked");
		}
	});
});