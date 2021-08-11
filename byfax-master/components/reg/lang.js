const lang = document.createElement('form');

lang.insertAdjacentHTML('afterbegin', `
    <div class="select" data-default="">
        <div class="select-title">RU</div>
        <div class="arrow"></div>
        <div class="select-content">
            <input id="select0" class="select-input" type="radio" name="select" />
            <label for="select0" class="select-label">RU</label>
            <input id="select1" class="select-input" type="radio" name="select" />
            <label for="select1" class="select-label">RU</label>
            <input id="select2" class="select-input" type="radio" name="select" />
            <label for="select2" class="select-label">ENG</label>
        </div>
    </div>             
`);

export default lang;


