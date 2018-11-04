$(document).ready(function() {
    $.ajax({
        url: 'jsons/subcat_json.json',
        dataType: "json",
        success: function(data) {
            var $subc2 = $('#sub-cat');
            $subc2.empty();
            for (var e = 0; e < data['subcat'].length; e++) {
                if (1 == data['subcat'][e][1]) {
                    $subc2.append('<div class="cell">' +
                        '<a href="view_p.html?subcat=' + data['subcat'][e][0] + '">' +
                        '<div class="card">' +
                        '<img src="https://placehold.it/180x180">' +
                        '<div class="card-section">' +
                        '<h4>' + data['subcat'][e][2] + '</h4>' +
                        '<p>Description</p>' +
                        '</div>' +
                        '</div>' +
                        '</a>' +
                        '</div>');
                }
            }
        }
    });
});