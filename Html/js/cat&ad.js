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
    $.ajax({
        url: 'jsons/anuncio1_json.json',
        dataType: "json",
        success: function(data2) {
            var $title = $('#titulo');
            var $desc = $('#descr');
            var $precio = $('#precio');
            var $mas_info = $('#mas_info');
            var $dat_t = $('#dat_t');
            $title.append(data2[0][0]);
            $desc.append(data2[0][1]);
            $precio.append(data2[0][2]);
            $dat_t.append(data2[0][3]);
            $mas_info.append(data2[0][4]);
        }
    });
});