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

    string_text.innerHTML += a;
    c = c +  (+string_text.innerHTML);

}
function Result(){
    let str = document.getElementById("screen").value;
    console.log(str);
    var Res_1 = eval(str);
    console.log(Res_1);
    document.getElementById("screen").innerText = Res_1;
 }