let finalOrder = {};
let orderLineItems = {};
let finalAmount = 0;

$(document).ready(function () {
    loadProducts();
});

function loadProducts() {
    $.getJSON('content/books.json', function (data) {
        let listItems = [];
        $.each(data, function (key, val) {
            let orderLineItem = {
                "book": val,
                "count": 0
            };
            orderLineItems[orderLineItem.book.id] = orderLineItem;
            let listItem =
                '<li class="list-group-item d-flex align-items-center">' +
                '<img src = " ' + orderLineItem.book.image + ' " alt = "' + orderLineItem.book.alt + '"/> ' +
                '<h2>' + orderLineItem.book.bookTitle + '</h2 >' +
                '<p>' + orderLineItem.book.description + '</p >' +
                '<button type="button" class="btn" title="' + orderLineItem.book.titlePhysical + '">' +
                '<i class="fa fa-plus" aria-hidden="true"></i> ' + '<i class="fa fa-usd" aria-hidden="true"></i> ' +
                '<span>' + orderLineItem.book.options.Physical + '</span>' +
                '</button>' +
                '<button type="button" class="btn" title="' + orderLineItem.book.titlePDF + '">' + 
                '<i class="fa fa-plus" aria-hidden="true"></i> ' + 
                '<span>' + "PDF " + '<i class="fa fa-usd" aria-hidden="true"></i> '+ orderLineItem.book.options.PDF + '</span>' +
                '</button>' +
                '</li>';

            listItems.push(listItem);
        });

        $("#all-products").append(listItems.join(''));
        // Task 2: Add the missing line. Hint: The list may need to be refreshed to reapply the styles as the list is build dynamically instead of static
        // $("#all-products").listview('refresh');
        // $('#all-products').trigger('change', true);
    });
}


