import { docTemplate } from './views/docview.js'
import { videoTemplate } from './views/video.js'
import { home } from './views/hopmepage.js'
import { infoTemplate } from './views/info.js'
import { thanks } from './views/thanks.js'
import page from '//unpkg.com/page/page.mjs';
import { render } from 'https://unpkg.com/lit-html?module';



const main = document.querySelector('main');

page('/', () => render(home(), main));
page('/docs', () => render(docTemplate(), main));
page('/info', () => render(infoTemplate(), main));
//page('/info/:id',  catalog);
page('/video', () => render(videoTemplate(), main));
page('/thanks', () => render(thanks(), main));
page('/nakata', () => window.location.href = "https://www.brs-industry.eu");


page()


