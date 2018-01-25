(function($){
    $(function(){
        window.onload=function(){
            var oSearform=document.forms['search-form'];
             console.log(oSearform);
            var aSearcontent=document.getElementsByClassName("text")[0];
            console.log(aSearcontent)
            var oSearch=document.getElementsByClassName('search_show')[0];
            console.log(aSearcontent)
            aSearcontent.onfocus=function(){
                this.value="";
                document.getElementsByClassName('search_show')[0].style.display='block';
            }
            aSearcontent.onblur=function(){
                document.getElementsByClassName('search_show')[0].style.display='none';
            }

            aSearcontent.oninput=function(){
                var aValue=this.value;
                console.log(this.value)
                if(aValue!=''){
                    var oScript=document.createElement('script');
                    oScript.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+aValue+'&json=1&p=3&sid=1465_21114_18560_17001_25177_22157&req=2&csor=1&cb=callback&_=1512220474794'
                    document.body.appendChild(oScript);
                }
            };
            function callback(data){
                console.log(data);
                data.s.forEach((v)=>{
                var oLi=document.createElement('li');
                oLi.innerHTML=v;
                // v=document.getElementsByClassName("text")[0].innerHTML;
                oSearch.appendChild(oLi);
                });
            }
            window.callback = callback;
        }
    });
})(jQuery);