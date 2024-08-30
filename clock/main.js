window.onload = function(){
				// 下面两个循环为设置每个数字的旋转角度并将其摆正
				const li_list = document.getElementsByClassName('num');
				for(let i=0;i<li_list.length;i++){
					li_list[i].style.transform = "rotate("+(i+1)*30 + "deg"+")";
				}
				const span_list = document.getElementsByTagName('span');
				for(let i=0;i<span_list.length;i++){
					span_list[i].style.transform = "rotate(-"+(i+1)*30 + "deg"+")";
				}
				//调用更新指针的函数
				update_pointer();
				
				//获取当前时间并让时钟的指针每隔一段时间旋转对应的角度
				function update_pointer(){
					var date = new Date();
					var hour = date.getHours();
					var min = date.getMinutes();
					// sec为精确到毫秒的秒数,如52.753
					var sec = date.getSeconds() + date.getMilliseconds()/1000;
					var hour_pointer = document.getElementById("hour");
					var min_pointer = document.getElementById("min");
					var sec_pointer = document.getElementById("sec");
					sec_pointer.style.transform = "translate(-50%,20px) rotate("+(sec)*6 + "deg"+")";
					min_pointer.style.transform = "translateX(-50%) rotate("+(min+sec/60)*6 + "deg"+")";
					hour_pointer.style.transform = "translateX(-50%) rotate("+(hour-12)*30 + "deg"+")";
					console.log("当前时间",date);
					// 设置1000/60毫秒后执行操作,此处是一个递归，也可以使用setInterval()
					setTimeout(update_pointer,1000/60);
				}			
			}


