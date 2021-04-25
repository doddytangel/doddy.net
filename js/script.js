// event pada saat link di klik
$('.page-scroll').on('click', function(){

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen yg bersangkutan
    var elemenTujuan = $(tujuan);

    // pindah scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top -  50
    }, 1250, 'swing');

});