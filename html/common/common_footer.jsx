//共同底部
var Common_footer = React.createClass({
    render: function(){
        return(
            <div id="footer">
                <div className="footer">
                    <div className="part book-in on">
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
    },

    componentDidMount: function(){
        //点击底部菜单改变选中状态
        $("#footer").find(".part").click(function(){
            $("#footer").find(".part").removeClass("on");
            $(this).addClass("on");
        });
    }
});