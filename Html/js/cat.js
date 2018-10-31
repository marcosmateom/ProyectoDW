$(document).ready(function() {
    $.ajax({
        url: 'jsons/cat_json.json',
        dataType: "json",
        success: function(data) {
            var $cat = $('#cat');
            $cat.empty();
            for (var i = 0; i < data.length; i++) {
                $cat.append("<li><a href=\"cat.html\">" + data[i][1] + "</a></li>");
            }
        }
    });
});