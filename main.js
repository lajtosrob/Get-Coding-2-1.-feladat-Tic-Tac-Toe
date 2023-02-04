var aktualisJatekos = "O";
var win = false;
function main(box) {
    if (box.innerText != "" || win) {
        document.getElementById("hidden").id = "visible";
        return;}
    box.innerText = aktualisJatekos;
    gameControl();
    aktualisJatekos == "O" ? aktualisJatekos = "X" : aktualisJatekos = "O";


}
function gameControl() {
    for (oszlop = 0; oszlop <= 2; oszlop++) {
        winnerChecking(
            document.getElementById("0" + oszlop).innerText,
            document.getElementById("1" + oszlop).innerText,
            document.getElementById("2" + oszlop).innerText);
        winnerChecking(
            document.getElementById(oszlop + "0").innerText,
            document.getElementById(oszlop + "1").innerText,
            document.getElementById(oszlop + "2").innerText);

    }
    winnerChecking(
        document.getElementById("00").innerText,
        document.getElementById("11").innerText,
        document.getElementById("22").innerText);
    winnerChecking(
        document.getElementById("02").innerText,
        document.getElementById("11").innerText,
        document.getElementById("20").innerText);


}
function winnerChecking(first, second, third) {
    if (first != "" && first == second && second == third) {
        alert("You won " + aktualisJatekos + "!!!");
        win = true;
    }
}
