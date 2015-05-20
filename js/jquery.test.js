/**
 * Created by pursuer on 15-3-13.
 */
;(function($){
    $.fn.extend({
        test:function(options){
            var len =$(this).find('.cnt').length;
            var sld = 0;/*已选择数目*/
            var curIndex = 0;
            $('.currentIndex').text(curIndex+1);
            $('.total-qut').text(len);
            setProgress(curIndex);
            //console.log(len);
            $('.ch-radio').click(function(){
                if(!$(this).parents("div.cnt").hasClass("selected")){
                    select(this);
                }
                if(curIndex+1<=len){
                    curIndex++;
                    setProgress(curIndex);
                }

            });
            function select(ele){
                ele= $(ele)? $(ele):ele;
                ele.parents("div.cnt").addClass("selected");
                sld++;
            };
            //下一题
            $('#next').click(function(){
                if(sld>curIndex) {
                    curIndex++;
                    setProgress(curIndex)
                }
            });
            //上一题
            $('#prev').click(function(){
                sld--;
                if(curIndex>0) {
                    curIndex--;
                    setProgress(curIndex);
                }
            });
            //当前题显示
            function setProgress(index){
                if(index<len){
                    $('.progress .progress-bar').css('width',(index)/len*100+'%');
                    $('.progress .progress-bar').attr('aria-valuenow',(index)/len*100);
                    $('.progress .progress-bar').text(index+'/'+len);
                    $('.currentIndex').text(index+1);
                    checkBtn();
                    $('.cnt').eq(index).show().siblings('.cnt').hide();
                }else if(index==len){
                    $('.progress .progress-bar').text(index+'/'+len);
                    $('.progress .progress-bar').attr('aria-valuenow',(index)/len*100);
                    $('.progress .progress-bar').css('width',(index)/len*100+'%');
                }
            }
            function checkBtn(){
                console.log(curIndex);
                console.log('sld='+sld);

                if(curIndex<=0){
                    $("#prev").addClass("noprev");
                }else{
                    $("#prev").removeClass("noprev");
                }
                if(sld>=curIndex+1){
                    $("#next").removeClass("nonext");
                }
                else{
                    $("#next").addClass("nonext");
                }
                console.log('len='+len);
                if(sld==len){
                    $('.test-result').show();
                }
            }
        }
    });

})(jQuery);