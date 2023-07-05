function Result(){
    var a = +document.getElementById("input__a").value;
    var b = +document.getElementById("input__b").value;

    document.getElementById("result1").innerHTML = "<li>Kết quả: " + (a+b) +" đó " + " </li>";
}