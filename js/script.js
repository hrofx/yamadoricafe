alert( '※このWebサイトは架空サイトです' );


// ライトボックス
lightbox.option({
    'alwaysShowNavOnTouchDevices': false,
    'albumLabel': "%1 枚目（全 %2 枚中）",
    'disableScrolling': true,
    'fadeDuration': 600,
    'fitImagesInViewport': true,
    'imageFadeDuration': 600,
    'positionFromTop': 50,
    'resizeDuration': 700,
    'showImageNumberLabel': true,
    'wrapAround': true
})


//ナビゲーションをクリックした時にハンバーガーメニューを閉じる
//JavaScriptバージョン

// ナビゲーションの中にある全てのa要素を取得
const elements = document.querySelectorAll('#gnav a');
// チェックボックスのinput要素を取得
const input = document.getElementById('menu-btn-check');

// 取得した全てのa要素をひとつずつ順番に処理する
Array.prototype.forEach.call(elements, element => {
  // a要素をクリックしたとき
  element.onclick = function () {
    // チェックボックスをOFFにする
    input.checked = false;
  };
});


// 画像をスライド表示
$(document).ready(function(){
  $(".regular").slick({
    // infinite: true,
    fade: true,
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
    dots: true  // ドットインジケーターの表示
  });
});


