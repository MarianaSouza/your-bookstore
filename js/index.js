let finalOrder = [];
let allBooks = [];
let finalAmount = 0;

loadProducts();

function loadProducts() {
    fetch("content/books.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            appendData(data)
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(books) {
        let listItems = [];
        books.forEach(function (book) {
            let orderLineItem = {
                "item": book,
                "count": 0
            };
            allBooks.push(orderLineItem);
            let listItem =
                '<li class="list-group-item d-flex align-items-center">' +
                '<img src = " ' + book.image + ' " alt = "' + book.alt + '"/> ' +
                '<h2>' + book.bookTitle + '</h2 >' +
                '<p>' + book.description + '</p >' +
                '<button type="button" class="btn" onclick="Add(' + book.id + ')" title="' + book.title + '">' +
                '<i class="fa fa-plus" aria-hidden="true"></i> ' +
                '<span>' + "PDF " + '<i class="fa fa-usd" aria-hidden="true"></i> ' + + book.price + '</span>' +
                '</button>' +
                '</li>';

            listItems.push(listItem);

        })
        let allProducts = document.getElementById("all-products");
        let element = document.createElement('ul');
        element.classList.add("list-group")
        element.innerHTML = listItems.join('');
        allProducts.appendChild(element);
    }
}

function displaySelectedList() {
    let listSelectedItems = [];
    allBooks.forEach(function (orderLineItem) {
        if (orderLineItem.count == 0) return;
        let book = orderLineItem.item;
        let listSelectedItem =
            '<div class="card-body">' +
            '<li class="list-group-item d-flex align-items-center">' +
            '<img src=" ' + book.image + ' " alt = "' + book.alt + '"/>' +
            '<h4>' + book.bookTitle + '</h4>' +
            '<span class="selectedListCount">' + orderLineItem.count + '</span>' +
            '<button id="btn_' + book.id + '_add" onclick="Remove(' + book.id + ')" type="button" class="btn"><strong>Remove</strong></button>' +
            '</li>' +
            '</div>';

        listSelectedItems.push(listSelectedItem);
    })
    let selectedProducts = document.getElementById("selected-products-div");
    while (selectedProducts.firstChild) selectedProducts.removeChild(selectedProducts.firstChild);
    let element = document.createElement('ul');
    element.classList.add("list-group")
    element.innerHTML = listSelectedItems.join('');
    selectedProducts.appendChild(element);

}

function Add(id) {
    allBooks.forEach(book => {
        if (id == book.item.id) {
            book.count = book.count + 1;
        }
    })
    displaySelectedList()
}

function Remove(id) {
    allBooks.forEach(book => {
        if (id == book.item.id) {
            book.count = book.count - 1;
        }
    })
    displaySelectedList()
}

