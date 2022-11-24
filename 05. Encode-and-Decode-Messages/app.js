function encodeAndDecodeMessages() {
    let buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => button.addEventListener('click', encodeDecode));
    let arrCode = [];
    let decodeArr = [];

    let decodeText = document.getElementsByTagName('textarea')[1];

    function encodeDecode(event) {
        let button = event.target;
        if (button.textContent === "Encode and send it"){
            let encodeInput = document.getElementsByTagName('textarea')[0];
            let encodeText = encodeInput.value;
            for (let i = 0; i < encodeText.length; i++){
                let codedText = encodeText.charCodeAt(i) + 1;
                arrCode.push(String.fromCharCode(codedText));
                
            };
            encodeInput.value = '';
            decodeText.textContent = arrCode.join('');
            arrCode = [];
        };
        if (button.textContent === "Decode and read it"){
            let decodeInput = document.getElementsByTagName('textarea')[1];
            let decodeText = decodeInput.value;
            for (let i = 0; i < decodeText.length; i++){
                let decodedNumber = decodeText.charCodeAt(i) - 1;
                let decodedText = String.fromCharCode(decodedNumber);
                decodeArr.push(decodedText);
            };
            decodeInput.textContent = decodeArr.join('');
            decodeArr = [];
        };
    };
};