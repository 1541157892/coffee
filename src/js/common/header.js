require('jquery');
let text = `
    <div class="header__wrapper common__clearfix">
        <div class="common__width--2 col-xs-12 common__left"></div>
        <div class="common__width--8 col-xs-12 header__content common__left">
            <!-- 页面 logo animation -->
            <div style="visibility: hidden; opacity: 0; animation-delay: .8s; animation-duration: .8s" class="header__logo common__text--center animation" animation-name="flipInY">
                <img src="../images/header-logo.png">
            </div>
            <div class="header__hr"></div>
            <!-- 导航栏 animation -->
            <div class="header__ul">
                <ul style="visibility: hidden; opacity: 0; animation-delay: .8s; animation-duration: .8s" class="animation" animation-name="fadeInLeft">
                    <li><a href="../../index.html">首页</a></li>
                    <li><a href="./about.html">关于我们</a></li>
                    <li><a href="./product.html">饮品及美食</a></li>
                    <li><a href="./news.html">新闻动态</a></li>
                    <li><a href="./joinUs.html">人才招聘</a></li>
                </ul>
            </div>
            <div class="base__container">
                <div class="container__img--transparent common__text--center">
                    <img src="../images/header-theme.png">
                </div>
            </div>
            <!-- 代言词 animation -->
            <div class="base__text">
                <div class="text__container">
                    <div style="visibility: hidden; opacity: 0; animation-delay: .8s; animation-duration: .8s" class="text__wrapper animation" animation-name="flipInY">
                        <strong class="text__title">消磨时光 / 回味印象</strong>
                    </div>
                </div>
            </div>
            <!-- 代言词 -> English -->
            <div class="base__text">
                <div class="text__container">
                    <div style="visibility: hidden; opacity: 0; animation-delay: .8s; animation-duration: .8s" class="text__wrapper animation" animation-name="flipInY">
                        <span class="text__title--english">PASS THE TIME, AFTERTASTE IMPRESSION</span>
                    </div>
                </div>
            </div>
            <div class="base__container">
                <div class="container__img--transparent">
                    <img src="../images/header-theme.png">
                </div>
            </div>
        </div>
        <div class="common__width--2 col-xs-12 common__right"></div>
    </div>`

$('.header').html(text);
require('../animation.js');