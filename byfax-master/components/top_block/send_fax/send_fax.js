import './send_fax.scss';

const send_fax = document.createElement('div');
send_fax.classList.add('send_fax');

send_fax.insertAdjacentHTML('afterbegin', `
    <div>
        <h1>Отправить факс? </br><span>Еще никогда не было так просто!</span></h1>
        <p>Больше не нужна телефонная линия, все можно сделать даже со смартфона.</p>
        <button class="sign-up-button">Зарегистрироваться !</button>
    </div>
    <div class="bck-img"></div>
`);

export default send_fax;


