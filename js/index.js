let finalOrder = {};
let orderLineItems = {};
let finalAmount = 0;

$(document).ready(function () {
    loadProducts();
});

function loadProducts(){
    fetch("content/books.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        let listItems = [];
        [].forEach.call(data, function(val){
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

        })
        $("#all-products").append(listItems.join(''));
    })

}


