$(document).ready(function () {
    $("#canvas").click(function () {
        $("#ting").trigger('play');
        $(".gift").hide('fade', 1200);
        $(".page1").hide('fade', 1500);
        setTimeout(() => {
            $('.page2').show('fade');
            $('#video').trigger('play');
            setText()
        }, 1500);
    });
});


function setText() {
    $('#audio')[0].play();
    let time = 3000;

    const textVN = `Vào ngày Quốc tế phụ nữ chúc mọi thứ tốt đẹp nhất sẽ đến với bạn Chúc bạn một 8/3 hạnh phúc!`;
    const textEN = `♥ On women’s day what can I wish for, but the very best for you! Happy Women’s Day!`;

    const arrStr = textVN.split(' ');
    const arrStr2 = textEN.split(' ');
    arrStr.forEach(str => {
        time += 200;
        $('#box-text').append('<span>' + str + '&nbsp;</span>');
    });
    setTimeout(() => {
        time = 20000;
        $('#box-text').hide('slow');

        setTimeout(() => {
            time += 200;
            $('#box-text').empty();
            $('#box-text').show('slow');
            arrStr2.forEach(str => {
                $('#box-text').append('<span>' + str + '&nbsp;</span>');
            });
        }, 1700);

        setTimeout(() => {
            $(".gift").show('fade', 1200);
            $(".page1").show('fade', 1500);
            $('.page2').hide('fade', 300);
        }, time);

    }, time);
}