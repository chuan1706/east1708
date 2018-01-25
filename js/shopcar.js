 // 加减
 var minus =document.getElementById('second_1i');
 var add = document.getElementById('second_2i');
 //数量
 var oA = Number(document.getElementById('second_num').innerHTML);
// 小计
  var subtotal = document.getElementsByClassName('subtotal')[0];
  // 商品金额
 var pAdd = document.getElementsByClassName('product_add')[0];
 // 实付款
 var opay = document.getElementsByClassName('pay')[0];
//商品列表
var orow = document.getElementsByClassName('first_td');
//删除
var delect = document.getElementsByClassName('second_delect');
 //单价
var oparice = Number(document.getElementById('pr').innerHTML);

// console.log(oparice.innerHTML);

console.log(oA);

	add.onclick = function () {
		oA++;
		document.getElementById('second_num').innerHTML = oA;
		console.log(oA)
		var subtotalVal=subtotal.innerHTML;
		subtotalVal=oA*oparice;
		subtotal.innerHTML=subtotalVal;
		var opayVal=opay.innerHTML; 
		opay.innerHTML=subtotalVal;
		pAdd.innerHTML=subtotalVal

		
		// document.getElementsByClassName('product_add')[0].innerHTML = oA * 0;
		// document.getElementsByClassName('subtotal')[0].innerHTML = oA *;
		// document.getElementsByClassName('pay')[0].innerHTML = oA * oparice;
	}

	minus.onclick = function () {
		console.log(33);
			oA--
			if (oA<=1){
				oA = 1;
			}
			document.getElementById('second_num').innerHTML = oA;
			document.getElementsByClassName('product_add')[0].innerHTML = oA * oparice;
			document.getElementsByClassName('subtotal')[0].innerHTML = oA * oparice;
			document.getElementsByClassName('pay')[0].innerHTML = oA * oparice;
		}



	var lis=document.getElementById("top").children;
	console.log(1);
	var imgs=document.getElementById("img").children;
	console.log(2);
	for (var i = 0; i < lis.length; i++) {
		console.log(3);
		lis[i].index=i;
		lis[i].onmouseover=function(){
			console.log(i)
			for (var j = 0; j < lis.length; j++) {
				lis[j].className="";
				imgs[j].className="";
			}
			lis[this.index].className="red"
			imgs[this.index].className="zindex"
		}
	}


