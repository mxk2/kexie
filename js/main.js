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
});