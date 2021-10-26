$(document).ready(function() {
    /*
     * menu
     */
     $('.material-icons').on('click', function(event) {
        $('.menu').stop(true).slideToggle('fast');
        event.preventDefault();
        /* Act on the event */
    }); 
     $(window).resize(function() {
        sW = window.innerWidth;
        if(sW>640){
            $(".menu").css('display', 'block');
        }
        else{
            $(".menu").css('display', 'none');    
        }
    });
         $(window).resize(function() {
        sW = window.innerWidth;
        if(sW>640){
     $('.menu li').on('click', function() {
        $('.menu').stop(true).css('display', 'none');
    });
 }});
    /*
     * Slideshow
     */
    // slideshow クラスを持った要素ごとに処理を実行
    $('#slideshow').each(function () {

        var $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;             // 現在のスライドを示すインデックス

        // 1 番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 4000 ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 4000);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }
    });
     /*
     * button-hover
     */
     $('.button-01 , .button-02')
     .on('mouseover', function(){
        $(this).find('> span')
        .stop(true).animate({width: '100%'}, 300, 'easeOutQuad');
    })
     .on('mouseout', function(){
        $(this).find('> span')
        .stop(true).animate({width: '0%'}, 300, 'easeOutQuad');
    });
     /*
     * top-hover
     */
//スムーススクロールでページトップへ
$('#top-button, #top-button-footer').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 700);
    return false;
});
     /*
     * scroll
     */
     ScrollReveal().reveal('.scroll-bottom', { 
      duration: 800, 
      origin: 'bottom', 
      distance: '50px',
      reset: true,
      viewFactor: 0.1,
      reset: false
  });
     ScrollReveal().reveal('.scroll-button', { 
      duration: 300, 
      scale: 0.1,
      reset: true,
      viewFactor: 0.1,
      reset: false
  });
 });