$(document).ready(function() {
	//输入框
	$("body").on("focus", ".box-form .form-control", function() {
		var $parent = $(this).closest(".input-group");
		$(".input-group-focus").removeClass("input-group-focus");
		$(".error-title").css("visibility", "hidden");
		$parent.addClass("input-group-focus");
	});
	$("body").on("blur", ".box-form .form-control", function() {
		var $parent = $(this).closest(".input-group");
		$(".input-group-focus").removeClass("input-group-focus");
		$parent.addClass("input-group-focus");
		$(".error-title").css("visibility", "hidden");
		if ($(this).val().length == 0) {
			$parent.next(".error-title").css("visibility", "visible");
		}
	});
	//btn-circle
	$("body").on("mouseover", ".btn-circle", function() {
		$(this).addClass($(this).attr("data-hover"));
	}).on("mouseout", ".btn-circle", function() {
		$(this).removeClass($(this).attr("data-hover"));
	});
	//全部
	$("body").on("click", ".list-quanbu li a", function() {
		$(this).closest("li").addClass("active").siblings(".active").removeClass("active");
	});
	//checkbox
	$(".checkbox-custom :checkbox").each(function() {
		if ($(this).prop("checked")) {
			$(this).closest(".checkbox-custom").addClass("checkbox-custom-checked");
		}
	});
	$("body").on("click", ".checkbox-custom", function() {
		var $checkbox = $(this).find(":checkbox");
		if ($checkbox.prop("checked")) {
			$checkbox.removeProp("checked");
			$(this).removeClass("checkbox-custom-checked");
		} else {
			$checkbox.prop("checked", "checked");
			$(this).addClass("checkbox-custom-checked");
		}
	});
	//活动类详细页slide
	(function() {
		$(".slide-hd").each(function() {
			slide($(this));
		});
		$(".slide-hd .body li:eq(0)").trigger("mouseover");
		function slide($point) {
			var $slide = $point;
			var $list = $slide.find(".body>ul");
			var $itemList = $list.find("li");
			var $left = $slide.find(".btn-left");
			var $right = $slide.find(".btn-right");
			var itemWidth = $itemList.eq(0)[0].clientWidth + 22;
			var width = $itemList.length * itemWidth;
			var num = parseInt($slide.attr("data-num"));
			var bShowBig = $slide.attr("data-showbig") == "true" ? true : false;
			$list.css("width", width + "px");
			if ($itemList.length <= num) {
				$list.css({
					"left": "50%",
					"marginLeft": -width / 2 + "px"
				});
			} else {
				$left.on("click", function() {
					if (!$list.is(":animated")) {
						$list.find("li:last").prependTo($list);
						$list.css("marginLeft", -itemWidth + "px");
						$list.animate({
							"marginLeft": 0 + "px"
						}, function() {
							$list.find("li").eq(0).trigger("mouseover");
						});
					}
				});
				$right.on("click", function() {
					if (!$list.is(":animated")) {
						$list.animate({
							"marginLeft": -itemWidth + "px"
						}, function() {
							$list.find("li").eq(0).appendTo($list);
							$list.css("marginLeft", "0px");
							$list.find("li").eq(0).trigger("mouseover");
						});
					}
				});
			}
			$("body").on("mouseover", ".slide-hd .body li", function() {
				var $this = $(this);
				var $point = $this.closest(".slide-hd").siblings(".slide-hd-point");
				if ($point.length == 1 && bShowBig) {
					$this.addClass("selected").siblings(".selected").removeClass("selected");
					$point.find("img").prop("src", $this.find("img").prop("src"));
				}
			});
		};
	})();
	//评论
	$("body").on("click", ".box-star img", function(){
		var $this = $(this);
		var $parent = $this.closest(".box-star");
		var index = $this.index();
		var url = $this.prop("src");
		url = url.replace(/grey/, "orange");
		$parent.find("img").each(function(){
			if($(this).index() <= index){
				$(this).prop("src", url);
			}else{
				$(this).prop("src", url.replace(/orange/, "grey"));
			}
		});
	});
});
var GLOBAL = GLOBAL || {};
GLOBAL.Methods = GLOBAL.Methods || {};
//事件绑定
GLOBAL.Methods.eventUtil = {
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	removeHandler: function() {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.deathEvent) {
			element.deathEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	}
};
//回到顶部
GLOBAL.returnTop = function() {
	var sBack = '<div id="returnBack"></div>';
	$("body").append(sBack);
	var $back = $("#returnBack");
	$back.bind("click", function() {
		$('body,html').animate({
			scrollTop: 0
		}, 200, function() {
			$back.fadeOut(500);
		});
	});

	GLOBAL.Methods.eventUtil.addHandler(window, "scroll", function() {
		var top = document.documentElement.scrollTop || document.body.scrollTop;;
		if (top > 0) {
			$back.fadeIn(500);
		} else {
			$back.fadeOut(500);
		}
	});
};
GLOBAL.returnTop();