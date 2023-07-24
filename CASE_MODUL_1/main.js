// Login

    class UserAccount {
        constructor(user, passwords){
            this.user = user;
            this.passwords = passwords;
        }
        getUser(){
            return this.user;
        }
        getPasswords(){
            return this.passwords;
        }
        setUser(value){
            this.user = value;
        }
        setPasswords(value){
            this.passwords = value;
        }
    }

    var admin = new UserAccount('Long', 123);
    var user1 = new UserAccount('Dat', 123);
    var user2 = new UserAccount('Tuong', 123);
    var user3 = new UserAccount('Vinh', 123);

    var listUser = [admin, user1, user2, user3];
    // console.log(listUser[2]);

function loginUser(){
    let user = document.getElementById('login_form_txt_input').value;
    let passwords = document.getElementById('login_form_txt_passwords').value;
    for(let i = 0; i< listUser.length; i++){
        if((user == listUser[i].user) && (passwords == listUser[i].passwords)){
            window.location.href = 'form_input.html';
            
            document.getElementById('login_form_txt_input').value = '';
        }
        else{
            document.getElementById('login_form_txt_input').value = '';
            document.getElementById('login_form_txt_passwords').value = '';

        }
    }
}

function cancelUser(){
    window.location.href = 'home.html';
}
//form input
class ProductBeer{
    constructor(idBeer, nameBeer, typeBeer, alcohol, prices, qty, image){
        this.idBeer = idBeer;
        this.nameBeer = nameBeer;
        this.typeBeer = typeBeer;
        this.alcohol = alcohol;
        this.prices = prices;
        this.qty = qty;
        this.image = image;
    }
    getIdBeer(){
        return this.idBeer;
    }
    setIdBeer(value){
       this.idBeer = value;
    }


    getNameBeer(){
        return this.nameBeer;
    }
    setNameBeer(value){
       this.nameBeer = value;
    }


    getTypeBeer(){
        return this.typeBeer;
    }
    setTypeBeer(value){
       this.typeBeer = value;
    }


    getAlcohol(){
        return this.alcohol;
    }
    setAlcohol(value){
       this.alcohol = value;
    }


    getPrices(){
        return this.prices;
    }
    setPrices(value){
       this.prices = value;
    }


    getQty(){
        return this.qty;
    }
    setQty(value){
       this.qty = value;
    }

    getImage(){
        return this.image;
    }
    setImage(value){
        this.image =value;
    }
}

var blanc = new ProductBeer(1, '1664 Blanc', 'Bia cao cấp', 5, 50, 22000, '/image/1664-Blanc-chai.jpg') 
var carlsberg = new ProductBeer(2, 'Carlsberg Smooth Draught', 'Bia cao cấp', 5, 72, 20000, '/image/Carlsberg Smooth.jpg') 
var tuborgGold = new ProductBeer(3, 'Tuborg Gold', 'Bia cao cấp', 4.9, 320, 18000, '/image/Tuborg-gold.png') 
var tuborgIce = new ProductBeer(4, 'Tuborg Ice', 'Bia cao cấp', 4.3, 50, 18000, '/image/Tuborg-Ice.png') 
var somersbyApple = new ProductBeer(5, 'Somersby Apple', 'Bia đặc biệt', 4.5, 50, 25000, '/image/Somersby_Apple.png') 
var somersbyBlackBerry = new ProductBeer(6, 'Somersby BlackBerry', 'Bia đặc biệt', 4.5, 50, 25000, '/image/Somersby_Blackberry.png') 
var huda = new ProductBeer(7, 'Huda', 'Bia phổ thông', 4.7, 50, 14000, '/image/Huda-Core.png') 
var hudaIceBlast = new ProductBeer(8, 'Huda Ice Blast', 'Bia phổ thông', 4.7, 50, 16000,'/image/huda-ice-bottle.png') 
var hudaGold = new ProductBeer(9, 'Huda Gold', 'Bia phổ thông', 4.7, 50, 18000, '/image/huda-gold-bottle.png') 
var halida = new ProductBeer(10, 'Halida', 'Bia phổ thông', 4.5, 50, 14000, '/image/halida-bottle.png') 

var listProduct = JSON.parse(localStorage.getItem("listProduct")) || [blanc, carlsberg, tuborgGold, tuborgIce, somersbyApple, somersbyBlackBerry, huda, hudaIceBlast, hudaGold, halida]
 

function renderData(){
    let strProductRender = '';
    for(let i=0; i<listProduct.length; i++){
        let strIn = `<tr>
                        <td>${listProduct[i].idBeer}</td>
                        <td>Bia ${listProduct[i].nameBeer}</td>
                        <td>${listProduct[i].typeBeer}</td>
                        <td>${listProduct[i].alcohol}%</td>
                        <td>${listProduct[i].qty} đồng</td>
                        <td>${listProduct[i].prices}</td>
                        <td><img style="width: 150px; height: auto;" src="${listProduct[i].image}" alt=""></td>
                        <td>
                            <button type="button" id="form_show_data_btnEdit" onclick="editItem(${i})">Edit</button>
                            <button type="button" id="form_show_data_btnDelete" onclick="deletetItem(${i})">Delete</button>
                         </td>
                     </tr>`
        strProductRender += strIn;
    }
    document.getElementById('tbody_product_render').innerHTML = strProductRender;
}

function deletetItem(index){
    listProduct.splice(index, index+1);
    localStorage.removeItem("listProduct");
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    renderData();
}

// editItem(){

// }
// renderData();

function addData(){
    var strID = document.getElementById('form_input_id').value;
    var strNamProduct = document.getElementById('form_input_product_name').value;
    var strType = document.getElementById('form_input_typeof').value;
    var strAlcohol = document.getElementById('form_input_id_alcohol').value;
    var strPrices = document.getElementById('form_input_id_prices').value;
    var strQty = document.getElementById('form_input_id_qty').value;
    var strImage = document.getElementById('form_input_id_image').value;
    var count = +listProduct[listProduct.length-1].idBeer;
        // console.log(strID);
        // console.log(strNamProduct);
        // console.log(strType);
        // console.log(strAlcohol);
        // console.log(strPrices);
        // console.log(strQty);
        // console.log(strImage);
        // console.log(count);
        if((strID =='')||(strNamProduct =='')||(strType =='')||(strAlcohol =='')||(strQty =='')||(strPrices =='')||(strImage =='')){
            alert("Bạn đã nhập thiếu thông tin")
        }
        else{
        var product = new ProductBeer(strID, strNamProduct, strType, strAlcohol, strQty, strPrices, strImage); 
        listProduct.push(product);
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
        }
        renderData();
        clearDataForm();


}
function clearDataForm(){
    document.getElementById('form_input_id').value = '';
    document.getElementById('form_input_product_name').value = '';
    document.getElementById('form_input_typeof').value = '';
    document.getElementById('form_input_id_alcohol').value = '';
    document.getElementById('form_input_id_prices').value = '';
    document.getElementById('form_input_id_qty').value = '';
    document.getElementById('form_input_id_image').value = '';
}


//product------------------------------------------------


function renderProduct(){
    let strProductRender_2 = '';
    for(let i=0; i<listProduct.length; i++){
        let strIn_2 = `<div class="product_detail_item">
                        <a href="https://douongnhapkhau.com/products/bia-1664-kronenbourg-blanc-5-phap-24-chai-330ml/" target="_blank">
                            <img src="${listProduct[i].image}" alt="${listProduct[i].nameBeer}">
                            <p class="products_name" id="pro_name">${listProduct[i].nameBeer}</p>
                            <p class="products_prices" id="pro_prices">Giá: ${listProduct[i].qty} ₫</p>
                            
                        </a>
                        <button id="add_cart">Add to Cart</button>
                    </div>`;
        strProductRender_2 += strIn_2;
    }
    document.getElementById('product_show').innerHTML = strProductRender_2;
}

renderProduct();