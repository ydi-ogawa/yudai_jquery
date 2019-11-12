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

  $('#toggle').on('click', function () {
    $(this).toggleClass('on');
  });

  $('.js-scroll').on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });

  $('.js-modal').on('click', function () {
    $('body').addClass('modal-open');
    $('.modal-content').fadeIn('slow');
    $('#modal-bg').fadeIn('slow');
  });

  $('.js-modal-close').on('click', function () {
    $('body').removeClass('modal-open');
    $('.modal-content').fadeOut(1000);
    $('#modal-bg').fadeOut(1000);
  });

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
