var c = 0;
function get_value_clear(){
    var a = document.getElementById("btn_clear").innerText;
    document.getElementById("screen").innerText = "";
    c = 0;
}
function get_value(get__id){
    
    var string_text = document.getElementById("screen");
    // console.log(string_text);
    var a = document.getElementById(get__id).innerText;
    if(a == "+")
    {
        c = c + (+string_text.innerHTML);
       console.log(+string_text.innerHTML);
       console.log("tổng là: ",c);
       document.getElementById("screen").innerText = "";
    }
    else{
    string_text.innerHTML += a;
    c = c +  (+string_text.innerHTML);
    }

}
function Result(){
    document.getElementById("screen").innerText = c;
 }