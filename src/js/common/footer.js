require('jquery');
let text = `
            <div class="footer__main common__clearfix">
                <div class="common__width--1 common__left"></div>
                <div class="common__width--10 common__left">
                    <div class="main__page base__text common__text--center">
                        <div class="text__container">
                            <div class="text__wrapper">
                                <p class="page__wrapper">
                                    <a href="javascript:void(0)" class="page__index common__left"><span>首页</span></a>
                                    <span class="page__other common__left">
                                        &nbsp; |&nbsp;
                                        <a href="javascript:void(0)">产品中心</a>
                                        &nbsp;|&nbsp;
                                        <a href="javascript:void(0)">新闻动态</a>
                                        &nbsp;|&nbsp;
                                        <a href="javascript:void(0)">关于我们</a>
                                    </span>
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="common__width--1 common__right"></div>
            </div>
            `
$('.footer').html(text);