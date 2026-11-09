const apiUrl = "https://api.mymemory.translated.net/get";

const languages = {
    "en": "English",
    "uz": "Uzbek",
    "ru": "Russian",
    "fr": "French",
    "de": "German",
    "es": "Spanish",
    "zh": "Chinese",
    "ar": "Arabic",
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "hy": "Armenian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "bn": "Bengali",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "my": "Burmese",
    "ca": "Catalan",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "et": "Estonian",
    "fi": "Finnish",
    "el": "Greek",
    "he": "Hebrew",
    "hi": "Hindi",
    "hu": "Hungarian",
    "is": "Icelandic",
    "id": "Indonesian",
    "it": "Italian",
    "ja": "Japanese",
    "kk": "Kazakh",
    "ko": "Korean",
    "ky": "Kyrgyz",
    "la": "Latin",
    "ms": "Malay",
    "ne": "Nepali",
    "no": "Norwegian",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "ro": "Romanian",
    "sr": "Serbian",
    "sk": "Slovak",
    "sv": "Swedish",
    "th": "Thai",
    "tr": "Turkish",
    "tk": "Turkmen",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "vi": "Vietnamese"
};

document.addEventListener('DOMContentLoaded', () => {
    const inputLang = document.getElementById('inputLang');
    const outputLang = document.getElementById('outputLang');

    Object.entries(languages).forEach(([code, name]) => {
        inputLang.innerHTML += `<option value="${code}">${name}</option>`;
        outputLang.innerHTML += `<option value="${code}">${name}</option>`;
    });
});

document.getElementById('translateBtn').addEventListener('click', async () => {
    const text = document.getElementById('inputText').value;
    const fromLang = document.getElementById('inputLang').value;
    const toLang = document.getElementById('outputLang').value;

    if (!text) return;

    const response = await fetch(`${apiUrl}?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`);
    const data = await response.json();

    document.getElementById('outputText').value = data.responseData.translatedText;
});

document.querySelectorAll('.speak-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.getAttribute('data-target'));
        const lang = btn.closest('.translation-box').querySelector('select').value;

        const utterance = new SpeechSynthesisUtterance(target.value);
        utterance.lang = lang;

        speechSynthesis.speak(utterance);
    });
});

const black = document.getElementById('dark');

let m = 0;
black.addEventListener("click", function () {
    m++
    if (m % 2 == 0) {
        black.textContent = 'Dark';
        document.head.innerHTML = `<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background:
        radial-gradient(circle at 15% 20%, #dce7ff 0, transparent 35%),
        radial-gradient(circle at 85% 80%, #e9dcff 0, transparent 35%),
        #f7f8ff;
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: 760px;
    padding: 30px;
    background: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(54, 49, 130, 0.12);
    animation: appear 0.7s ease both;
    flex-direction: column;
}
#dark {
    width: 150px;
    height: 30px;
    font-size: 15px;
    padding-left: 10px;
    font-weight: 600;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-right: 10px;
    border-radius: 10px;
   border: 1px solid #ffffffcc;
    background: #ffffff;
    color: #6558ed;
    margin-left: 1300px;
    margin-bottom: 50px;
        box-shadow: 0 20px 60px oklab(36.919000000000004% 0.02412 -0.12959 / 0.122);
}
h2 {
    text-align: center;
    margin-bottom: 25px;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -1.3px;
    color: #25234b;
    animation: slideDown 0.7s ease both;
}

.translation-box {
    padding: 14px 17px;
    margin-bottom: 16px;
    background: #fafaff;
    border: 1.5px solid #e9e9f5;
    border-radius: 17px;
    transition: 0.35s ease;
    animation: slideUp 0.7s ease both;
}

.translation-box:nth-of-type(2) {
    animation-delay: 0.12s;
}

.translation-box:hover {
    border-color: #b8b3ff;
    box-shadow: 0 8px 25px rgba(99, 88, 220, 0.07);
    transform: translateY(-2px);
}

.translation-box:focus-within {
    border-color: #7468ed;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(116, 104, 237, 0.10);
}

textarea {
    display: block;
    width: 100%;
    height: 95px;
    padding: 8px 5px;
    resize: vertical;
    border: none;
    outline: none;
    background: transparent;
    color: #292844;
    font-size: 15px;
    line-height: 1.6;
    resize: none;
}

textarea::placeholder {
    color: #a6a6ba;
}

.contarols {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding-top: 11px;
    border-top: 1px solid #ededf5;
}

select {
    flex: 1;
    padding: 11px 14px;
    border: 1px solid #e9e7ff;
    border-radius: 10px;
    outline: none;
    background: #f2f0ff;
    color: #5b4cdb;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
}

select:hover {
    background: #e7e3ff;
    border-color: #c5bdff;
}

select:focus {
    border-color: #7569ed;
}

.speak-btn {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 11px;
    background: #efedff;
    font-size: 19px;
    cursor: pointer;
    transition: 0.3s ease;
}

.speak-btn:hover {
    background: #dcd7ff;
    transform: scale(1.1) rotate(-8deg);
    box-shadow: 0 5px 15px rgba(99, 88, 220, 0.15);
}

.speak-btn:active {
    transform: scale(0.9);
}

.translateBtn {
    width: 100%;
    padding: 15px;
    margin-top: 5px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(120deg, #796cf5, #5142d8);
    color: white;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.3px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(92, 79, 225, 0.22);
    transition: 0.35s ease;
    animation: slideUp 0.8s ease both;
}

.translateBtn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(92, 79, 225, 0.35);
    background: linear-gradient(120deg, #6558ed, #4031c5);
}

.translateBtn:active {
    transform: scale(0.97);
}

@keyframes appear {
    from {
        opacity: 0;
        transform: scale(0.94);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-18px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 1024px) {
    .container {
        max-width: 700px;
    }

    #dark {
        margin-left: 0;
        margin-bottom: 30px;
        align-self: flex-end;
    }
}

@media (max-width: 768px) {
    body {
        padding: 20px;
    }

    .container {
        max-width: 600px;
        padding: 25px;
    }

    h2 {
        font-size: 28px;
    }

    #dark {
        width: 140px;
        margin: 0 0 25px 0;
        align-self: flex-end;
    }
}

@media (max-width: 600px) {
    body {
        padding: 15px;
    }

    .container {
        width: 100%;
        padding: 20px 15px;
        border-radius: 18px;
    }

    h2 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .translation-box {
        padding: 12px;
    }

    textarea {
        width: 100%;
        height: 100px;
        font-size: 14px;
    }

    .contarols {
        gap: 8px;
    }

    select {
        min-width: 0;
        padding: 10px 8px;
        font-size: 12px;
    }

    .speak-btn {
        flex-shrink: 0;
        width: 38px;
        height: 38px;
    }

    .translateBtn {
        width: 100%;
        padding: 13px;
        font-size: 14px;
    }

    #dark {
        width: 130px;
        height: 35px;
        margin: 0 0 20px 0;
        font-size: 13px;
        align-self: flex-end;
    }
}

@media (max-width: 380px) {
    body {
        padding: 10px;
    }

    .container {
        padding: 17px 12px;
    }

    h2 {
        font-size: 22px;
    }

    textarea {
        height: 85px;
        font-size: 13px;
    }

    select {
        font-size: 11px;
        padding: 9px 5px;
    }

    .speak-btn {
        width: 35px;
        height: 35px;
        font-size: 16px;
    }

    #dark {
        width: 120px;
        font-size: 12px;
    }
}

@media (max-width: 300px) {
    .container {
        padding: 12px 8px;
    }

    h2 {
        font-size: 19px;
    }

    .translation-box {
        padding: 9px;
    }

    select {
        font-size: 10px;
    }
}
     </style> `
    }

    else {
        black.textContent = 'Light';
        document.head.innerHTML = `<style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-direction: column;
    background:
        radial-gradient(circle at 15% 20%, #25204b 0, transparent 35%),
        radial-gradient(circle at 85% 80%, #30204b 0, transparent 35%),
        #0b0b12;
    overflow-x: hidden;
}
#dark {
    width: 150px;
    height: 30px;
    font-size: 15px;
    padding-left: 10px;
    font-weight: 600;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-right: 10px;
    border-radius: 10px;
    border: 1px solid #29293a;
    background: #151520;
    color: #f1efff;
    margin-left: 1300px;
    margin-bottom: 50px;
    box-shadow: 0 20px 60px hsla(0, 0%, 0%, 0.40);
}
.container {
    width: 100%;
    max-width: 760px;
    padding: 30px;
    background: #151520;
    border: 1px solid #29293a;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    animation: appear 0.7s ease both;
}

h2 {
    text-align: center;
    margin-bottom: 25px;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -1.3px;
    color: #f1efff;
    animation: slideDown 0.7s ease both;
}

.translation-box {
    padding: 14px 17px;
    margin-bottom: 16px;
    background: #1c1c2a;
    border: 1.5px solid #303044;
    border-radius: 17px;
    transition: 0.35s ease;
    animation: slideUp 0.7s ease both;
}

.translation-box:nth-of-type(2) {
    animation-delay: 0.12s;
}

.translation-box:hover {
    border-color: #7569ed;
    box-shadow: 0 8px 25px rgba(99, 88, 220, 0.12);
    transform: translateY(-2px);
}

.translation-box:focus-within {
    border-color: #887cff;
    background: #20202e;
    box-shadow: 0 0 0 4px rgba(116, 104, 237, 0.12);
}

textarea {
    display: block;
    width: 100%;
    height: 95px;
    padding: 8px 5px;
    resize: vertical;
    border: none;
    outline: none;
    background: transparent;
    color: #f1f0ff;
    font-size: 15px;
    line-height: 1.6;
    resize: none;
}

textarea::placeholder {
    color: #77778e;
}

.contarols {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding-top: 11px;
    border-top: 1px solid #303044;
}

select {
    flex: 1;
    padding: 11px 14px;
    border: 1px solid #393451;
    border-radius: 10px;
    outline: none;
    background: #25223a;
    color: #b9adff;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
}

select:hover {
    background: #302b4b;
    border-color: #7569ed;
}

select:focus {
    border-color: #887cff;
}

select option {
    background: #1c1c2a;
    color: #f1f0ff;
}

.speak-btn {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 11px;
    background: #292542;
    color: white;
    font-size: 19px;
    cursor: pointer;
    transition: 0.3s ease;
}

.speak-btn:hover {
    background: #40376c;
    transform: scale(1.1) rotate(-8deg);
    box-shadow: 0 5px 15px rgba(99, 88, 220, 0.2);
}

.speak-btn:active {
    transform: scale(0.9);
}

.translateBtn {
    width: 100%;
    padding: 15px;
    margin-top: 5px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(120deg, #796cf5, #5142d8);
    color: white;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.3px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(92, 79, 225, 0.22);
    transition: 0.35s ease;
    animation: slideUp 0.8s ease both;
}

.translateBtn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(92, 79, 225, 0.35);
    background: linear-gradient(120deg, #6558ed, #4031c5);
}

.translateBtn:active {
    transform: scale(0.97);
}

@keyframes appear {
    from {
        opacity: 0;
        transform: scale(0.94);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-18px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 1024px) {
    .container {
        max-width: 700px;
    }

    #dark {
        margin-left: 0;
        margin-bottom: 30px;
        align-self: flex-end;
    }
}

@media (max-width: 768px) {
    body {
        padding: 20px;
    }

    .container {
        max-width: 600px;
        padding: 25px;
    }

    h2 {
        font-size: 28px;
    }

    #dark {
        width: 140px;
        margin: 0 0 25px 0;
        align-self: flex-end;
    }
}

@media (max-width: 600px) {
    body {
        padding: 15px;
    }

    .container {
        width: 100%;
        padding: 20px 15px;
        border-radius: 18px;
    }

    h2 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .translation-box {
        padding: 12px;
    }

    textarea {
        width: 100%;
        height: 100px;
        font-size: 14px;
    }

    .contarols {
        gap: 8px;
    }

    select {
        min-width: 0;
        padding: 10px 8px;
        font-size: 12px;
    }

    .speak-btn {
        flex-shrink: 0;
        width: 38px;
        height: 38px;
    }

    .translateBtn {
        width: 100%;
        padding: 13px;
        font-size: 14px;
    }

    #dark {
        width: 130px;
        height: 35px;
        margin: 0 0 20px 0;
        font-size: 13px;
        align-self: flex-end;
    }
}

@media (max-width: 380px) {
    body {
        padding: 10px;
    }

    .container {
        padding: 17px 12px;
    }

    h2 {
        font-size: 22px;
    }

    textarea {
        height: 85px;
        font-size: 13px;
    }

    select {
        font-size: 11px;
        padding: 9px 5px;
    }

    .speak-btn {
        width: 35px;
        height: 35px;
        font-size: 16px;
    }

    #dark {
        width: 120px;
        font-size: 12px;
    }
}

@media (max-width: 300px) {
    .container {
        padding: 12px 8px;
    }

    h2 {
        font-size: 19px;
    }

    .translation-box {
        padding: 9px;
    }

    select {
        font-size: 10px;
    }
}
            </style> `
    }
});