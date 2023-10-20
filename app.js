$(document).ready(function () {
    $("#canvas").click(function () {
        window.addEventListener('click', () => {
            document.getElementById('video').muted = true
            document.getElementById('video').play();

            document.getElementById('audio').muted = false
            document.getElementById('audio').play();


        })

        $("#ting").trigger('play');
        $(".gift").hide('fade', 1200);
        $(".page1").hide('fade', 1500);
        setTimeout(() => {
            $('.page2').show();
            // $('#video').trigger('play');
            // $('#video').trigger('muted');

            setText()
        }, 2000);
    });



});


function setText() {
    $('#audio').trigger('play');
    let time = 2100;
    $('#box-text').empty();
    const textVN = `Anh sẽ không chúc em điều gì cả vì em xứng đáng được hưởng tất cả những điều tốt đẹp nhất trên đời này!`;
    const textEN = `Ngày 20/10 trọn niềm vui nhé! ♥ On women’s day!`;
    const strEnd = 'NBC'
    const arrStr = textVN.split(' ');
    const arrStr2 = textEN.split(' ');
    const arrStr3 = strEnd.split(' ');

    setTimeout(() => {
        arrStr.forEach(str => {
            time += 200;
            $('#box-text').append('<span>' + str + '&nbsp;</span>');
        });
        setTimeout(() => {
            time = 12000;
            $('#box-text').hide('slow');

            setTimeout(() => {
                time += 200;
                $('#box-text').empty();
                $('#box-text').show('slow');
                arrStr2.forEach(str => {
                    $('#box-text').append('<span>' + str + '&nbsp;</span>');
                });
            }, 600);

            setTimeout(() => {
                time += 200;
                $('#box-text').empty();
                $('#box-text').show('slow');
                arrStr3.forEach(str => {
                    $('#box-text').append('<span>' + str + '&nbsp;</span>');
                });
            }, 26000);

            setTimeout(() => {
                $(".gift").show('fade', 1200);
                $(".page1").show('fade', 1500);
                $('.page2').hide('fade', 300);
                document.getElementById('audio').stop();
            }, 30000);

        }, time);
    }, 500);
}