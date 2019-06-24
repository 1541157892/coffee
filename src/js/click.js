let $tab_item = $('.tab__item');
let $item_li = $tab_item.find($('.item__li'));

let $content_block = $('.content__block');

let $block_ul = $('.block__ul');
let $block_li = $block_ul.find($('.block__li'));

// 实现点击功能
$tab_item.on('click', 'li', function(e) {
    let _this = $(this);
    let index = _this.index();

    // 实现 class 的切换
    $('.tab__li--active').removeClass('tab__li--active');
    _this.addClass('tab__li--active');

    // 实现选项卡切换
    $('.content__block--show').removeClass('content__block--show');
    $content_block.eq(index).addClass('content__block--show');
})

// 实习移入移出功能
$block_ul.on('mouseenter', 'li', function() {
    let img = $(this).find($('img'));
    img.css('transform', 'scale(1.1)');
})
$block_ul.on('mouseleave', 'li', function() {
    let img = $(this).find($('img'));
    img.css('transform', 'scale(1)');
})