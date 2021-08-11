import reg from './components/reg/reg.js';
import top_block from './components/top_block/top_block.js';
import how_to_send from './components/send_block/send.js';
import benefits from './components/benefits_block/benefits.js';
import footer from './components/footer/footer.js';
import icone from './img/benefits_icon.png';
import icone_hover from './img/benefits_icon_hover.png';
import lang from './components/reg/lang.js';

const app = document.querySelector('.app');

app.appendChild(reg);
app.appendChild(top_block);
app.appendChild(how_to_send);
app.appendChild(benefits);

const arrow = document.createElement('div');
arrow.classList.add('how-to-send-arrow');
app.insertBefore(arrow, benefits);

const list = document.querySelector('.tabs-img');
const list_img = document.querySelectorAll('.tabs-img img');
const list_item = document.querySelectorAll('.tabs li');

list_img[0].src = icone_hover;
list_item[0].style.display = 'block';

list.addEventListener('click', (event) => {
    list_img.forEach((element, i) => {
        if (event.target === element) {
            element.src = icone_hover;
            element.style.animation = 'visibility .5s ease-in-out';
            list_item.forEach((item, index) => {
                if (i === index) {
                    item.style.display = 'block';
                    item.style.animation = 'scale 1s ease-in-out';
                }
                else item.style.display = 'none';
            });
        } else element.src = icone;
    });
});

app.appendChild(footer);

const select = document.querySelector('.select');
const select_arrow = select.querySelector('.arrow');
const select_title = select.querySelector('.select-title');
const select_labels = select.querySelectorAll('.select-label');

select_arrow.addEventListener('click', () => {
  if ('active' === select.getAttribute('data-state')) {
    select.setAttribute('data-state', '');
  } else {
    select.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < select_labels.length; i++) {
  select_labels[i].addEventListener('click', (e) => {
    select_title.textContent = e.target.textContent;
    select.setAttribute('data-state', '');
  });
}

const social_icons = document.querySelector('.social-icons');
const text = document.querySelector('.benefits-block .text p:nth-child(3)');
const text_send_fax = document.querySelectorAll('.how-to-send-manual div p');
const media992 = window.matchMedia("(max-width: 992px)");
const media768 = window.matchMedia("(max-width: 768px)");
const media425 = window.matchMedia("(max-width: 425px)");

if (media992.matches) {
    social_icons.style.display = 'none';

    text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia. Maecenas mattis purus id libero sagittis, in tempor lacus ornare. Suspendisse potenti. Vestibulum eleifend.';

    text_send_fax.forEach(item => {
        item.innerHTML = 'Lorgfbfbfdfvibendum. Donec sed elit at erat placerat lacidv nia.';
    });
}

const text_benefits = document.querySelector('.benefits-block .text p:nth-child(3)');
const footer_social_icons = document.querySelector('footer .social-icons');

if (media768.matches) {
    footer_social_icons.style.display = 'none';

    text_benefits.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia. Maecenas mattis purus id libero sagittis.';

    const add_social_icons = document.querySelector('.reg .wrapper');
    add_social_icons.insertAdjacentHTML('afterbegin', `
        <ul class="social-icons">
            <li><a class="social-icon-twitter" href="#" target="_blank" rel="noopener"></a></li>
            <li><a class="social-icon-facebook" href="#" target="_blank" rel="noopener"></a></li>
            <li><a class="social-icon-vk" href="#" target="_blank" rel="noopener"></a></li>
        </ul>
    `);
}

if (media425.matches) {
    const social_icons = document.querySelector('.social-icons');
    social_icons.style.display = 'none';

    const footer_textp = document.querySelector('footer .text p:first-child');
    footer_textp.style.display = 'none';
    
    text_benefits.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum.';

    const footer_wrapper = document.querySelector('footer .wrapper');
    const footer_text = document.querySelector('footer .text');
    footer_wrapper.insertBefore(lang, footer_text);

    const footer_bottom = document.createElement('div');
    footer_bottom.classList.add('footer_bottom');

    footer_bottom.insertAdjacentHTML('afterbegin', `
        <div class="wrapper">
            <p>ByFax копирайт</p>

            <ul class="social-icons">
                <li><a class="social-icon-twitter" href="#" target="_blank" rel="noopener"></a></li>
                <li><a class="social-icon-facebook" href="#" target="_blank" rel="noopener"></a></li>
                <li><a class="social-icon-vk" href="#" target="_blank" rel="noopener"></a></li>
            </ul>
        </div>
    `);
    app.appendChild(footer_bottom);
}