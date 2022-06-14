import { html } from 'https://unpkg.com/lit-html?module';
 
export const videoTemplate = () => html`
 <p>Към видеото има субтитри, не забравяйте да ги активирате!</p>
 <iframe width="300" height="200" src="https://www.youtube.com/embed/AeKKaEtk3gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
  
  <p><form method="POST" action="https://www.epay.bg/v3main/paylogin">
<input type="hidden" name="MIN" value="5873645786">
<input type="hidden" name="TOTAL" value="5">
<input type="hidden" name="DESCR" value="Почерпи ме кафе">
<input type="hidden" name="URL_OK" value="https://www.don3f.eu/thanks">
<input type="hidden" name="URL_CANCEL" value="https://www.epay.bg/v3main/front?p=cancel">
<input type="hidden" name="ENCODING" value="utf8">  
<input type="hidden" name="CHECKSUM" value="c75e68e6f49cc04efee0efcbd548f588040bd821">
  <button class="button">Почерпи ме кафе</button>

</form>

</p>
`
 
