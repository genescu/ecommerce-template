$(document).ready(function () {
    console.log("ready!");
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function (a) {
        $(".jumbotron-heading").html(a[0].content);
        $(".jumbotron-content").html(a[0].title);
    });

    $('a.product-info')  .mouseover(function () {

        let elem = $(this);
        elem.find('img.img-product').each(function () {
            $(this).attr("src", $(this).attr("data-img-alt"));
        });
    })
        .mouseout(function () {
            let elem = $(this);
            elem.find('img.img-product').each(function () {
                $(this).attr("src", $(this).attr("data-img-src"));
            });
        });

    $('.product-title').ellipsis({
        lines: 2,             // force ellipsis after a certain number of lines. Default is 'auto'
        ellipClass: 'ellip',  // class used for ellipsis wrapper and to namespace ellip line
        responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
    });
});

