import { html } from 'https://unpkg.com/lit-html?module';
import { createPDF } from '../businessLogic.js';
  

export const docTemplate = () => html`
 
<div id="tab">

        <input class="typing-demo" id="manager" type="text" placeholder="трите имена на управителя" > <br>
        <input class="typing-demo" id="egn" type="text" placeholder="ЕГН на управителя" maxlength="10" size="50">

    </div>

    <div id="ltd">

        <input class="typing-demo" id="firma" type="text" placeholder="име на фирмата" size="50"> <br>
        <input class="typing-demo" id="latinica" type="text" placeholder="име на латиница" size="50"> <br>

        <input class="typing-demo" id="adres" type="text" placeholder="седалище (обл., град/с, улица)" size="50"> <br>
        <input class="typing-demo" id="capital" type="text" placeholder="учредителен капитал в лева" size="50"> <br>

    </div>
    <div id="date">

       Дата на учредяване <input type="date"  id="kvo">
    </div>



    <label for="myCheck"> Маркирайте, ако собственикът и управителят са различни лица!</label>
    <input type="checkbox" id="myCheck" @click=${myFunction}><br>

     


    <div id="owner" style="display:none">
        <br>

        <input class="typing-demo" id="sobstvenik" type="text" placeholder="трите имена на собственика" size="45"> <br>
        <input class="typing-demo" id="egnOwner" type="text" placeholder="ЕГН на собственика" maxlength="10" size="45">
    </div>


    <button class="button" type="button" id="btn" size="50" @click=${createPDF}>
        СЪЗДАЙ ДОКУМЕНТИ
    </button>
     `
 
function myFunction() {

    let checkBox = document.getElementById("myCheck");
    let text = document.getElementById("owner");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
} 
 

