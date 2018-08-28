// A $( document ).ready() block.
$(document).ready(function () {
    d3.json("http://127.0.0.1:8000/msoko/api/product-list/").then(function (data) {
        console.log(data);
        drawProductListTable(data, ['name', 'description', 'price'])
    });

    function drawProductListTable(data, columns) {
        var table = d3.select('#product_list_table');
        var thead = table.append('thead');
        var tbody = table.append('tbody');

        // append the header row
        thead.append('tr')
            .selectAll('th')
            .data(columns)
            .enter()
            .append('th')
            .text(function (column) {
                return column;
            });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
            .data(data)
            .enter()
            .append('tr');

        var columnNames = ['name', 'description', 'price'];

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
            .data(function (row) {
                return columnNames.map(function (columnName) {
                    return {
                        columnName: columnName,
                        value: row[columnName]
                    };
                });
            })
            .enter()
            .append('td')
            .text(function (d) {
                console.log(d.value);
                return d.value;
            });

        return table;
    }
});