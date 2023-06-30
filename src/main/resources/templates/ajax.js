// Hiện list City
function showAll() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/city",
        success(data) {
            console.log(data);

            let context = ""
            context += `<table border="1">
<tr>
<td>ID</td>
<td>Name</td>
<td>Nation</td>
<td>Operation</td>
</tr>`
            for (let i = 0; i < data.length; i++) {
                context += `<tr>
<td>${data[i].id}</td>
<td>${data[i].name}</td>
<td>${data[i].nation.name}</td>
<td><button onclick="view(${data[i].id})">View</button></td>
<td><button onclick="deleteById(${data[i].id})">Delete</button></td>
<td><button onclick="showFormUpdate(${data[i].id})">Update</button> </td>
</tr>`
            }
            context += `</table>`
            document.getElementById("display").innerHTML = context;
        }
    })
}

// Chi tiết city
function view(id) {
    $.ajax({
        type: "PATCH",
        url: "http://localhost:8888/api/city/" + id,
        success(data) {
            console.log(data)
            let context = ``
            context += `<table border="1">
<tr>
<td>Name</td>
<td>Nation</td>
<td>Area</td>
<td>Quanlity</td>
<td>GDP</td>
<td>Description</td>
</tr>
<td>${data.name}</td>
<td>${data.nation.name}</td>
<td>${data.area}</td>
<td>${data.quantity}</td>
<td>${data.gdp}</td>
<td>${data.description}</td>
`
            document.getElementById("display").innerHTML = context;
        }
    })
}

// Thêm city
function showFormCreate() {
    let context = ``
    context += `<table>
<tr>
<td>Name</td>
<td><input type="text" id="name"></td>
</tr>
<tr>
<td><select id="nation"></select></td>
</tr>
<tr>
<td>Area</td>
<td><input type="text" id="area"></td>
</tr>
<tr>
<td>Quantity</td>
<td><input type="text" id="quantity"></td>
</tr>
<tr>
<td>GDP</td>
<td><input type="text" id="gdp"></td>
</tr>
<td>Description</td>
<td><input type="text" id="description"></td>
</tr>
<tr><td><button onclick="save()">Add</button></td></tr>
</table>`
    document.getElementById("display").innerHTML = context;
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/nation",
        success(data) {
            let text = ``
            for (let i = 0; i < data.length; i++) {
                text += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            document.getElementById("nation").innerHTML = text;
        }
    })
}

function save() {
    let name = $('#name').val()
    let area = $('#area').val()
    let quantity = $('#quantity').val()
    let gdp = $('#gdp').val()
    let nati = document.getElementById("nation").value
    let newCity = {
        name: name,
        area: area,
        quantity: quantity,
        gdp: gdp,
        nation: {
            "id": nati
        }
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        data: JSON.stringify(newCity),
        url: "http://localhost:8888/api/city",
        success() {
            showAll()
        }
    })

}


// Delete
function deleteById(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8888/api/city/" + id,
        success() {
            showAll()
        }
    });
}

function showFormUpdate(id) {
    $.ajax({
        type: "patch",
        url: "http://localhost:8888/api/city/" + id,
        success(data) {
            let context = ``
            context += `<table>
<tr>
<td>Name</td>
<td><input type="text" value="${data.name}" id="name"></td>
</tr>
<tr>
<td>Area</td>
<td><input type="text" value="${data.area}" id="area"></td>
</tr>
<tr>
<td>Quantity</td>
<td><input type="text" value="${data.quantity}" id="quantity"></td>
</tr>
<tr>
<td>GDP</td>
<td><input type="text" value="${data.gdp}" id="gdp"></td>
</tr>
<td>Description</td>
<td><input type="text" value="${data.description}" id="description"></td>
</tr>
<tr>
<tr>
<td><select id="nation"></select></td>
</tr>
<tr><td><button onclick="update(${data.id})">Add</button></td></tr>
</table>`
            document.getElementById("display").innerHTML = context;
            $.ajax({
                type: "GET",
                url: "http://localhost:8888/api/nation",
                success(arr) {
                    let text = ``
                    for (let i = 0; i < arr.length; i++) {
                        text += `<option value="${arr[i].id}">${arr[i].name}</option>`
                    }
                    document.getElementById("nation").innerHTML = text
                }
            })
        }
    })

}

function update(id) {
    let name = $('#name').val()
    let area = $('#area').val()
    let quantity = $('#quantity').val()
    let gdp = $('#gdp').val()
    let nati = document.getElementById("nation").value
    let newCity = {
        name: name,
        area: area,
        quantity: quantity,
        gdp: gdp,
        nation: {
            "id": nati
        }
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "PUT",
        url: "http://localhost:8888/api/nation/" + id,
        data: JSON.stringify(newCity),
        success() {
            showAll();
        }
    });
    event.defaultPrevented
}
