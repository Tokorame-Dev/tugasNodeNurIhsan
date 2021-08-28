let data = { "data": [{ "nama": "Ferdinan", "alamat": "Bandung", "id": "1" }, { "nama": "Ferdinan", "alamat": "Bandung", "id": "2" }, { "nama": "Ferdinan", "alamat": "Bandung", "id": "3" }] };

let arr = data.data;

let a = Object.assign(data, { id: "id" });

console.log(a)
