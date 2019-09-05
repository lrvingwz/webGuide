;
(function(global) {
	"use strict";
	var MySlider = function(element, sildercCon, imgWidth, pageCon, btnLeft, btnRight, time, autoPlay) {
		this.element = document.querySelector(element) || document.querySelector(".slider");
		this.imgWidth = imgWidth || this.element.offsetWidth;
		this.sildercCon = document.querySelector(sildercCon) || document.querySelector(".slider-container");
		this.pageCon = document.querySelector(pageCon) || document.querySelector(".slider-pagecon") || null;
		this.btnLeft = document.querySelector(btnLeft) || document.querySelector(".slider-btn-left") || null;
		this.btnRight = document.querySelector(btnRight) || document.querySelector(".slider-btn-right") || null;
		this.time = time || 3000;
		this.autoPlay = autoPlay == undefined ? true : false;
		this.index = 0;
		this.pageArr = [];
		this.timeId;
		this.startPlay();

	};
	MySlider.prototype = {
		constractor: this,
		startPlay: function() {
			var that = this;
			this.init();
			this.pagination();
			this.btnRight.onclick = function() {
				that.goRight();
			};
			this.btnLeft.onclick = function() {
				that.goLeft();
			};
			if (this.autoPlay == true) {
				this.loop();
			}
			console.log()
		},
		init: function() {
			var imgLi = this.sildercCon.getElementsByTagName("li");
			if (this.pageCon) {
				for (var i = 0; i < imgLi.length; i++) {
					var pageLi = document.createElement("li");
					pageLi.setAttribute("index", i);
					this.pageCon.appendChild(pageLi);
					this.pageArr.push(pageLi);
				};
				this.pageArr[0].className = "current";
			}
			var imgLiLast = imgLi[0].cloneNode(true);
			this.sildercCon.appendChild(imgLiLast);
		},
		animate: function(element,target) {
			clearInterval(element.timeId);
			element.timeId = setInterval(function() {
				var current = element.offsetLeft;
				var step = 10;
				step = (target - current) > 0 ? step : -step;
				current += step;
				if (Math.abs(target - current) > Math.abs(step)) {
					element.style.left = current + "px";
				} else {
					element.style.left = target + "px";
					clearInterval(element.timeId);
				}
			}, 10);
		},
		pagination: function() {
			var that = this;
			if (this.pageCon) {
				for (var i = 0; i < this.pageArr.length; i++) {
					this.pageArr[i].onclick = function() {
						this.index = this.getAttribute("index");
						for (var j = 0; j < that.pageArr.length; j++) {
							that.pageArr[j].className = "";
						}
						this.className = "current";
						that.animate(that.sildercCon, -that.imgWidth * this.index);
					}
				};
			}
		},
		goRight: function() {
			if (this.index > this.pageArr.length - 1) {
				this.index = 0;
				this.sildercCon.style.left = 0 + "px";
			}
			this.index++;
			this.animate(this.sildercCon, -this.imgWidth * this.index);
			if (this.index == this.pageArr.length) {
				this.pageArr[this.index - 1].className = "";
				this.pageArr[0].className = "current";
			} else {
				for (var i = 0; i < this.pageArr.length; i++) {
					this.pageArr[i].className = "";
				}
				this.pageArr[this.index].className = "current";
			}
		},
		goLeft: function() {
			if (this.index == 0) {
				this.index = this.pageArr.length;
				this.sildercCon.style.left = -this.imgWidth * this.index + "px";
			}
			this.index--;
			this.animate(this.sildercCon, -this.imgWidth * this.index);
			for (var i = 0; i < this.pageArr.length; i++) {
				this.pageArr[i].className = "";
			}
			this.pageArr[this.index].className = "current";
		},
		loop: function() {
			var that = this;
			clearInterval(this.timeId);
			this.timeId = setInterval(function() {
				that.goRight();
			}, this.time);
			this.element.onmouseover = function() {
				clearInterval(that.timeId);
			};
			this.element.onmouseleave = function() {
				var tt = that;
				that.timeId = setInterval(function() {
					tt.goRight();
				}, that.time);
			}
		}
	}

	if (typeof module !== 'undefined' && module.exports) module.exports = MySlider;
	if (typeof define === 'function') define(function() {
		return MySlider;
	});
	global.MySlider = MySlider;

})(this);
