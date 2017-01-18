/**
 * Created by Administrator on 2016/11/10.
 */
//Ö´ĞĞunslider¶¯×÷
$(function(e) {
    var unslider = $('#ppt').unslider({
            speed:800,
            delay:500000,
            //complete:function(){},
            key:true,
            dots: true,
            fluid:false
        }),
        data = unslider.data('unslider');

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        data[fn]();
    });
});

