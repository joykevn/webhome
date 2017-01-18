/**
 * Created by Administrator on 2016/10/10.
 */
$(function(){
    //定义变量
    var legendArr=['2015年','2016年'];
    var xData=['装机总容量','火电装机容量','风电装机容量','光伏装机容量','水电装机容量','其他'];
    var data1=[24987,16610,7975,330,67,24];
    var data2=[28689,38659,9117,560,1167,4424];
    //生成echarts
    require.config({
        paths: {
            echarts: './js/echarts/build/dist'
        }
    });
    // Step:4 require echarts and use it in the callback.
    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/map'
        ],
        function (ec) {
            //--- 折柱 ---
            var myChart = ec.init($('#main')[0]);
            myChart.setOption({
                tooltip : {
                    show:true,
                    trigger: 'axis'
                },
                legend: {
                    data:legendArr
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : xData
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitArea : {show : true}
                    }
                ],
                series : [
                    {
                        name:legendArr[0],
                        type:'bar',
                        itemStyle:{
                            normal: {
                                color: '#00f',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 12
                                    }
                                }
                            }
                        },
                        data:data1
                    },
                    {
                        name:legendArr[1],
                        type:'bar',
                        itemStyle:{
                            normal: {
                                color: '#f00',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 12
                                    }
                                }
                            }
                        },
                        data:data2
                    }
                ]
            });
        }
    );
});
//执行unslider动作
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
