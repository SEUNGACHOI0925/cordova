$(document).ready(function () {
    $('#btnLoad1').click(function () {
        $.ajax({
            url: 'intro.xml',
            type: 'get',
            dataType: 'xml',
            timeout: 10000,
            success: function (xmlData) {
                var tagList = "";
                $(xmlData).find('student').each(function () {
                    tagList += "<li>" + $(this).find('gradepoint').text() + "</li>";
                });
                $('#listArea').empty();
                $('#listArea').append(tagList);
                $('#listArea').listview('refresh');
            },
            error: function () {
                $("#listArea").html("<p>intro.xml을 로드하는 중 오류 발생!</p>");
            }
        });
    });

    $('#btnLoad2').click(function () {
        alert("클릭");
        $.ajax({
            url: 'info.xml',
            type: 'get',
            dataType: 'xml',
            timeout: 10000,
            success: function (xmlData) {
                var tagList = "";
                $(xmlData).find('gradepoint img').each(function () {
                    var imgSrc = $(this).attr('src');
                    var imgAlt = $(this).attr('alt');
                    tagList += "<li><img src='" + imgSrc + "' alt='" + imgAlt + "' style='width: 375px;'/></li>";
                });
                $('#listArea2').empty();
                $('#listArea2').append(tagList);
                $('#listArea2').listview('refresh');
            },
            error: function () {
                $("#listArea2").html("<p>info.xml을 로드하는 중 오류 발생!</p>");
            }
        });
    });
});
