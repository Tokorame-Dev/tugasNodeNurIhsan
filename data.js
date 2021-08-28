var fs = require("fs");

exports.file = function () {
  let obj = fs.readdirSync("./src/");
  return obj;
};

exports.addFile = function (file) {
    if (file) {
        let obj = fs.writeFileSync(`./src/${file}.json`, '{"data":[]}');
        return "file berhasil ditambah";
    }else{
        return "name harus diisi";
    }
};

exports.deleteFile = function (file) {
    if (file) {
        let obj = fs.unlinkSync(`./src/${file}.json`);
        return "file berhasil dihapus";
    }else{
        return "name harus diisi";
    }
};

exports.renameFile = function (old, baru) {
    if (old && baru) {
        let obj = fs.renameSync(`./src/${old}.json`, `./src/${baru}.json`);
        return "file berhasil diedit";
    }else{
        return "oldName dan newName harus diisi";
    }
};

exports.data = function (file) {
  let obj = JSON.parse(fs.readFileSync(`./src/${file}.json`));

  return obj;
};

exports.add = function (file, nama, alamat) {
    if (file,nama,alamat) {
        let obj = JSON.parse(fs.readFileSync(`./src/${file}.json`));
        let arr = obj.data;
      
        let hasil = {
          id: arr.length + 1,
          nama: nama,
          alamat: alamat,
        };
        // console.log(hasil);
        arr.push(hasil);
      
        fs.writeFile(`./src/${file}.json`, JSON.stringify(obj), function (err) {
          if (err) throw err;
          return "Updated!";
        });
        return "data berhasil ditambah";
    }else{
        return "nama file, nama dan alamat harus diisi";
    }
};

exports.edit = function (file, id, nama, alamat) {
    if (file,nama,alamat,id) {
        let obj = JSON.parse(fs.readFileSync(`./src/${file}.json`));
        let arr = obj.data;
        let newArr = {};
        newArr.data = arr.filter((item) => item.id != id);
        // return ( obj );
        if (arr.length === newArr.data.length) {
            return "maaf id tidak ditemukan"
        }
        // return "maaf id ditemukan"
        let hasil = {
          id: id,
          nama: nama,
          alamat: alamat,
        };
        // console.log(hasil);
        newArr.data.push(hasil);
        fs.writeFile(`./src/${file}.json`, JSON.stringify(newArr), function (err) {
          if (err) throw err;
          return "Updated!";
        });
        return "data berhasil diedit";

    }else{
        return "nama file, id, nama dan alamat harus diisi";
    }

};

exports.hapus = function (file, id) {
    if (file,id) {
        let obj = JSON.parse(fs.readFileSync(`./src/${file}.json`));
        let arr = obj.data;
        let newArr = {};
        newArr.data = arr.filter((item) => item.id != id);
        if (arr.length === newArr.data.length) {
            return "maaf id tidak ditemukan"
        }
        fs.writeFile(`./src/${file}.json`, JSON.stringify(newArr), function (err) {
            if (err) throw err;
            return "Updated!";
        });
        return "data berhasil dihapus";
    }else{
        return "nama file, id harus diisi";
    }
    };
    
    // exports.hapus = function (id) {
        //   let obj = JSON.parse(fs.readFileSync("data.json", "utf8"));
        
        //   let arr = obj.data;

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index].id == id) {
//       arr.splice(index, 1);
//     }
//     // console.log(arr[index])
//   }
//   fs.writeFile("data.json", JSON.stringify(obj), function (err) {
//     if (err) throw err;
//     return "Updated!";
//   });

//   return obj;
// };
