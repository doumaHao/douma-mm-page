//共同头部
var Common_top = React.createClass({
    render: function(){
        return(
            <div id="top">
                <div className="index-top">
                    <div className="top-left">
                        <div className="book-select"></div>
                    </div>
                    <div className="top-mid"></div>
                    <div className="top-right">
                        <div className="set"></div>
                    </div>
                </div>
            </div>
        );
    }
});

//内容
var This_content = React.createClass({
    render: function(){
        return(
            <div id="content">
                <div className="context">
                    <div className="month-pay">
                        <div className="left">
                            <span className="text">本月收入</span>
                <span className="price">
                    <span className="price-yuan">3215</span>
                    <span className="price-dian">.</span>
                    <span className="price-fen">53</span>
                </span>
                        </div>
                        <div className="right">
                            <span className="text">本月支出</span>
                <span className="price">
                    <span className="price-yuan">1536</span>
                    <span className="price-dian">.</span>
                    <span className="price-fen">78</span>
                </span>
                        </div>
                    </div>
                    <div className="day-pay">
                        <div className="left">
                            <span className="text">今日收入</span>
                <span className="price">
                    <span className="price-yuan">3215</span>
                    <span className="price-dian">.</span>
                    <span className="price-fen">53</span>
                </span>
                        </div>
                        <div className="right">
                            <span className="text">今日支出</span>
                <span className="price">
                    <span className="price-yuan">1536</span>
                    <span className="price-dian">.</span>
                    <span className="price-fen">78</span>
                </span>
                        </div>
                    </div>
                    <div id="edit_switch" className="write-pay">
                        <img src="../../img/write/write-1.png" alt=""/>
                        <span id="edit_switch_text" className="write-pay-text">记一笔</span>
                    </div>
                    <div id="pay_list" className="pay-list">
                        <p className="title">
                            <span className="type">种类</span>
                            <span className="price">金额</span>
                            <span className="save">节省</span>
                            <span className="bak">备注</span>
                        </p>
                        <p>
                            <span className="type">早点费</span>
                            <span className="price">5.5</span>
                            <span className="save">多花0.5元</span>
                            <span className="bak">今天过生日</span>
                        </p>
                        <p>
                            <span className="type">烟钱</span>
                            <span className="price">8.5</span>
                            <span className="save">节省1.5</span>
                            <span className="bak">省钱买房子</span>
                        </p>
                    </div>
                    <div id="pay_input" className="pay-input pay-input-downHide">
                        <div id="select_type" className="left">
                            <img src="../../img/icon/icon2-type.png" alt=""/>
                            <span>记账种类</span>
                        </div>
                        <div className="right">
                            <div className="right-top">
                                <img src="../../img/icon/icon2-price.png" alt=""/>
                                <span>金额</span>
                                <input type="text"/>
                            </div>
                            <div className="right-bot">
                                <img src="../../img/icon/icon2-bak.png" alt=""/>
                                <span>备注</span>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

//共同底部
var Common_footer = React.createClass({
    render: function(){
        return(
            <div id="footer">
                <div className="footer">
                    <div className="part book-in">
                        <img src="../../img/icon/icon-bookin.png" alt=""/>
                        <span>记账</span>
                    </div>
                    <div className="part statistics">
                        <img src="../../img/icon/icon-statistics.png" alt=""/>
                        <span>统计</span>
                    </div>
                    <div className="part worth">
                        <img src="../../img/icon/icon-worth.png" alt=""/>
                        <span>身价</span>
                    </div>
                    <div className="part friend">
                        <img src="../../img/icon/icon-friend.png" alt=""/>
                        <span>朋友圈</span>
                    </div>
                    <div className="part other">
                        <img src="../../img/icon/icon-other.png" alt=""/>
                        <span>更多</span>
                    </div>
                </div>
            </div>
        );
    }
});

//隐藏部分
var This_hide = React.createClass({
    render: function(){
        return(
            <div id="select_type_hideDiv" className="douma-show douma-show-right2left">
                <div className="title">
                    <div className="text"></div>
                    <div className="close-btn douma-hide"></div>
                </div>
                <div className="content">
                    <div className="tabs">
                        <div id="book_in_type_tab" className="tab on">支出类型</div>
                        <div id="book_out_type_tab" className="tab">收入类型</div>
                    </div>
                    <div id="book_in_type" className="select-type select-type-on">
                        <div className="life-icon breakfast"></div>
                        <div className="life-icon accident"></div>
                        <div className="life-icon drinks"></div>
                        <div className="life-icon electricity"></div>
                        <div className="life-icon ktv"></div>
                        <div className="life-icon leisure"></div>
                        <div className="life-icon lunch"></div>
                        <div className="life-icon medicine"></div>
                    </div>
                    <div id="book_out_type" className="select-type">
                        <div className="life-icon t2-gongzi"></div>
                        <div className="life-icon t2-budongchan"></div>
                        <div className="life-icon t2-licaichanpin"></div>
                        <div className="life-icon t2-yiwaishouru"></div>
                    </div>
                </div>
            </div>
        );
    }
});

//该画面
var THIS_PAGE = React.createClass({
    render: function(){
        return(
            <div>
                <Common_top/>
                <This_content/>
                <Common_footer/>
                <This_hide/>
            </div>
        );
    },
    componentDidMount: function(){

        //douma.js调用初始化设置
        doumajs_init_func();

        //原本记一笔左右内容
        var org_content_pay_input_left = $("#pay_input").find(".left").clone();
        var org_content_pay_input_right = $("#pay_input").find(".right").clone();
        //记一笔和就这笔切换
        $("#edit_switch").click(function(){
            var edit_switch = $("#edit_switch");
            //显示记一笔账
            if(edit_switch.attr("class") === "write-pay"){
                edit_switch.attr("class", "write-pay-edit")
                $("#edit_switch_text").text("就这笔");
                $("#pay_list").addClass("pay-list-upHide");
                $("#pay_input").show();
                //再次记录记一笔账初始状态
                org_content_pay_input_left = $("#pay_input").find(".left").clone();
                org_content_pay_input_right = $("#pay_input").find(".right").clone();
            }
            //显示今日账目列表
            else {
                edit_switch.attr("class", "write-pay")
                $("#edit_switch_text").text("记一笔");
                $("#pay_input").hide();
                $("#pay_list").removeClass("pay-list-upHide");
                //记账模块数据还原
                $("#pay_input").html("").append(org_content_pay_input_left).append(org_content_pay_input_right);
                org_content_pay_input_left.click(function(){
                    select_type_click_func();
                });
            }
        });

        //支出类型和收入类型切换
        $("#book_in_type_tab").click(function(){
            $("#book_in_type_tab").addClass("on");
            $("#book_out_type_tab").removeClass("on");
            $("#book_in_type").show();
            $("#book_out_type").hide();
        });
        $("#book_out_type_tab").click(function(){
            $("#book_in_type_tab").removeClass("on");
            $("#book_out_type_tab").addClass("on");
            $("#book_in_type").hide();
            $("#book_out_type").show();
        });

        //记账类型原本html
        var org_content_select_type = $("#select_type").html();
        //点击记账类型
        $("#select_type").click(function(){
            select_type_click_func();
        });
        var select_type_click_func = function(){
            $("#select_type_hideDiv").doumaShowHide("show");
        };

        //点击支出类型图标选择该支出类型
        $("#book_in_type").find(".life-icon").click(function(){
            var clone = $(this).clone();
            clone.css("margin-bottom", "0px");
            $("#select_type").html("").append(clone);
            $("#select_type_hideDiv").doumaShowHide("hide");
        });
        //点击收入类型选择该收入类型
        $("#book_out_type").find(".life-icon").click(function(){
            var clone = $(this).clone();
            clone.css("margin-bottom", "0px");
            $("#select_type").html("").append(clone);
            $("#select_type_hideDiv").doumaShowHide("hide");
        });
    }
});

ReactDOM.render(
    <THIS_PAGE/>,
    document.getElementById("container")
);