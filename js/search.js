// var oSearchForm    = document.forms['search-form'];
// 		var oSearchContent = oSearchForm.elements['search-content'];

// 		// 缓存输入框默认的内容
// 		var sDefaultVal   = oSearchContent.value;


// 		// 输入框获得焦点，清空内容
// 		oSearchContent.onfocus = function () {
// 			if(this.value === sDefaultVal) {
// 				this.value = '';
// 			}
// 		};
// 		// 输入框失去焦点，恢复内容
// 		oSearchContent.onblur = function () {
// 			if(this.value === '') {
// 				this.value = sDefaultVal;
// 			}
// 		};




	
        //if($(this).val() !== ''){
            //     $.getJSON('//www.dfmeibao.com/getLucenceStr.jhtml?keyword='+$(this).val(),function(Data){
            //          //清空ul
            //          $('.s_search').html('');
            //          //新建li存放数据
            //         Data.s.forEach((v,k)=>{
            //             // console.log(v['RecordDatas'])
            //                 // console.log(k.HintInfo)
            //             $('.s_search').append('<li> <a href="javascript:;">'+ v + '</a></li>');
            //          })
            //     })
            // }
 function addZero(num){
            //此方法为处理一位数字的时候添零补齐两位
            return num<10?"0"+num:num;
        }
        function remind(){
            var str="2018-3-19 13:53:00";
            str=str.replace(/[-]/g,"/");
            var oDate1=document.getElementById('date1');
            var oDate2=document.getElementById('date2');
            var oHour1=document.getElementById('hour1');
            var oHour2=document.getElementById('hour2');
            var oMinute1=document.getElementById('minute1');
            var oMinute2=document.getElementById('minute2');
            var oSecond1=document.getElementById('second1');
            var oSecond2=document.getElementById('second2');
            //注：以上为获取元素，以下为计算时间
            var spanTimeNow =new Date().getTime();//当前时间距离1970年1月1日午夜之间的毫秒数
            var spanTimeTarget= Date.parse(str);//目标时间距离1970年1月1日午夜之间的毫秒数
            var spanTime=spanTimeTarget-spanTimeNow;
            var date=addZero(Math.floor(spanTime/(1000*60*60*24)));
            var hour=addZero(Math.floor(spanTime/(1000*60*60)-date*24));
            var minute=addZero(Math.floor(spanTime/(1000*60)-date*24*60-hour*60));
            var second=addZero(Math.floor(spanTime/1000-date*24*60*60-hour*60*60-minute*60));
            //注：将获得的时间添加到指定位置
            oDate1.innerHTML=date.toString().substr(0,1);
            oDate2.innerHTML=date.toString().substr(1,1);
            oHour1.innerHTML=hour.toString().substr(0,1);
            oHour2.innerHTML=hour.toString().substr(1,1);
            oMinute1.innerHTML=minute.toString().substr(0,1);
            oMinute2.innerHTML=minute.toString().substr(1,1);
            oSecond1.innerHTML=second.toString().substr(0,1);
            oSecond2.innerHTML=second.toString().substr(1,1);
        }
        // window.setInterval(function(){
        //     remind();
        // },6000)
        window.setInterval(remind,1000);





