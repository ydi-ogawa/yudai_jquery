// htmlを読み込んだ後で処理
$(function () {
  $('#js-click-btn').on('click', function () {
    $(this).addClass('large-btn');
  });

  // 昔は直接.clickを使っていたこともあったが、今はonで統一
  $('#js-hover-btn').on('mouseover', function () {
    $(this).addClass('opacity');
  }).on('mouseleave', function () {
    $(this).removeClass('opacity');
  })

  $('#js-show-btn').on('click', function () {
    $('#js-target-element').slideDown(1000);
  });

  $('#js-hide-btn').on('click', function () {
    $('#js-target-element').slideUp(1000);
  });

  // $('#js-add-btn').on('click', function () {
  // クリックした要素の前に追加
  // let beforeBtn = $('<li>').addClass('btn').text('ボタンの前');
  // $(this).before(beforeBtn);
  // $(this).before('<li class="btn">ここに追加</li>');
  // })

  // $('#js-add-btn2').on('click', function () {
  //   // クリックした要素の前に追加
  //   $(this).after('<li class="btn">ボタンの後ろに追加</li>');
  // })

  $('#js-add-btn2').on('click', function () {
    $(this).prepend("前");
    $(this).append("後");
  });

  $('.js-toggle').on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().slideToggle();
  });

  /* ハンバーガーメニュー */
  $('#toggle').on('click', function () {
    $(this).toggleClass('on');
  });
  // onクラスをつけると真ん中のバーは透明に、上下のバーは45度傾いている。

  $('.js-scroll').on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });
  // body,htmlはタグ、cssの設定によっては、うまく認識できない時があるので両方書いてある。

  // モーダル
  $('.js-modal').on('click', function () {
    $('body').addClass('modal-open');
    $('.modal-content').fadeIn('slow');
    $('#modal-bg').fadeIn('slow');
  });
  // スクロールできないようになっている

  $('.js-modal-close').on('click', function () {
    $('body').removeClass('modal-open');
    $('.modal-content').fadeOut(1000);
    $('#modal-bg').fadeOut(1000);
  });

  // // タブメニュー
  // $(".tab-nav a").on("click", function () {
  //   if ($(this).hasClass("active")) {
  //     // 処理をやめさせる
  //     return false;
  //   }
  //   // タブを押すとurlが変わっている
  //   // アンカーリンクを利用している

  //   // hrefだとurl全体が取得できるが、全ては不要なので、hash使用
  //   // #以降の値が出力できる
  //   console.log(this.hash);
  //   // これはjavascriptの描き方している。ドットで繋げているので

  //   // Javascript
  //   // .href => URL
  //   // .textContent => タグの中の文字列

  //   // タブメニューを初期化
  //   $(".tab-nav a").removeClass("active");
  //   $(this).addClass("active");

  //   // タブの中身を初期化
  //   $(".tab-content > div").removeClass("active");
  //   $(".tab-content > div")
  //     // filterは検索の意味
  //     .filter(this.hash)
  //     // filter('#tab02')だったら、tab02のみしか表示されない。
  //     // filterの中に条件を入れられる
  //     .addClass("active");

  //   return false;
  //   // これはなくても良い
  //   // この後に処理が書いてあれば書いたほうがいい？
  // });




  // タブメニュー 練習　タブ増やして
  $(".tab-nav a").on("click", function () {
    if ($(this).hasClass("active")) {
      return false;
    }

    console.log(this.hash);

    $(".tab-nav a").removeClass("active");
    $(this).addClass("active");

    $(".tab-content > div").removeClass("active");
    $(".tab-content > div")
      .filter(this.hash)

      .addClass("active");

    return false;

  });



  // スライダー
  let slideWidth = $(".slide").outerWidth();
  let slideNum = $(".slide").length;
  let slideWrapperWidth = slideWidth * slideNum;
  let currentSlide = 0;
  $(".slide-wrapper").css("width", slideWrapperWidth);

  //次へ
  $(".next-slider").on("click", function () {
    //最後のスライドだった場合
    if (currentSlide >= slideNum - 1) {
      return false;
    }
    currentSlide++;
    slide();
  });

  //前へ
  $(".prev-slider").on("click", function () {
    //最初のスライドだった場合
    if (currentSlide <= 0) {
      return false;
    }
    currentSlide--;
    slide();
  });

  function slide() {
    console.log(currentSlide * -slideWidth);
    $(".slide-wrapper")
      .stop()
      .animate({
        left: currentSlide * -slideWidth
      });
  }






























});
