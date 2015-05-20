/**
 * Created by pursuer on 15-1-8.
 */
$(function(){
    if($('.navbar-toggle')){
        $('.navbar-toggle').leanModal({
                top:0,
                overlay:0,
                closeButton:".hidemodal"
            }
        );
    }
   if($('.edit_Accout')){
       $('.edit_Accout').leanModal({
               top:0,
               overlay:0,
               closeButton:".hidemodal"
           }
       );
   }
    if($('#addAccount')){
        $('#addAccount').leanModal({
                top:0,
                overlay:0,
                closeButton:".hidemodal"
            }
        );
    }
    if($('#add_question')){
        $('#add_question').leanModal({
                top:0,
                overlay:0.45,
                closeButton:".hidemodal"
            }
        );
    }
    /*添加测试*/
    $('#add_test').on('click',function(){
        $('.test-box').hide();
        $('.test-cont').show();
        $('.user-cont').trigger("change");
    });
    /*添加测试结果*/
    $('#add_testResult').on('click',function(){
        $('.user-cont').trigger("change");
        $('#test_result_table tbody').append('<tr>\n' +
        '<td>3</td>\n'+
        '<td><input class="result form-control"/></td>\n'+
        '<td><input type="text" size="1"/>到<input type="text" size="1"/></td>\n'+
        '<td><a class="colorBrown">编辑</a>｜<a class="colorBrown">删除</a></td>'+
        '</tr>');
    });

    $('.login-title .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    /*个人中心侧边栏高度*/
    $('.user-cont').change(function(){
       var $userCenterSlideHeight = $(this).outerHeight();
        $('.userCenter-slide').height($userCenterSlideHeight);
    }).change();
    //个人中心手机的导航弹出框
    if($('#phoneNav-radius')){
        $('#phoneNav-radius').leanModal({
            top:110,
            overlay:0.45,
            closeButton:".hidemodal"
        });
    }
    //个人中心我的帐户切换
    $('.info-Nav ul li').click(function(){
        //给当前元素添加active样式
        $(this).addClass('active').siblings().removeClass('active');
        //当前元素索引
        var index =$('.info-Nav ul li').index(this);
        //给当前元素添加active样式，并且隐藏其他元素
        $('.userInfoCont>li').removeClass('active').eq(index).addClass('active');
    });
    $('#import').click(function(){
        $('.info-box').hide();
        $('.img-change').show();
    });
    var percentage = $("#percentage").find("option:selected").val();
    console.log(percentage);
    $("#percentage").change(function () {
        percentage = $("#percentage").find("option:selected").val();
        consultPriceObj.each(function(){
            $(this).text(function(){
                var totalPrice= $(this).prev().text();
                var consultPrice = parseFloat(totalPrice)*(1-parseFloat(percentage)/100);
                return consultPrice.toFixed(2);
            });
        });
    });
    var consultPriceObj = $('.consult-table  .consult-price');
    consultPriceObj.each(function(){
        $(this).text(function(){
           var totalPrice= $(this).prev().text();
            var consultPrice = parseFloat(totalPrice)*(1-parseFloat(percentage)/100);
           return consultPrice.toFixed(2);
        });
    });
    $("#checkAll").click(function() {
        console.log(this.checked);
        if($(this).is(":checked")){
            $(".consult-table input").each(function() {
                $(this).prop('checked',true);
                console.log($(this).attr('checked'));
            });
        }else{
            $(".consult-table input").each(function() {
                $(this).prop('checked',false);
                console.log($(this).removeAttr('checked'));

            });
        }
    });
});