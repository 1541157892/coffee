const animation = $('.animation');

function show(option) {
    $(animation).eq(option.index).css({
        'visibility': 'visible',
        'animation-name': option.addClassName
            // 'animation-name': 'fadeInLeft'
    });
    $(animation).eq(option.index).on('animationstart', function() {
        $(this).animate({ 'opacity': '1' }, 800, 'linear');
    })
}

function isView() {
    choose(animation);
    return function() {
        choose(animation);
    }
}

function choose(animation) {
    let maxShowPhase = $(window).height() + $(document).scrollTop();
    // 将当前窗口展示出来的元素 记录
    let enterView = animation.filter((index, ele) => {
            ele = $(ele);
            let eleTop = ele.offset().top;
            let eleTopHeight = eleTop + ele.height();
            let minShowPhase = $(document).scrollTop();
            return eleTopHeight > minShowPhase && eleTop < maxShowPhase;
        })
        // 整理需要进行动画的DOM，并开始执行动画
    $.each(enterView, (index, ele) => {
        let options = {
            index: $.inArray(ele, animation),
            addClassName: $(ele).attr('animation-name')
        }
        show(options);
    })
}


$(document).on('scroll', isView());