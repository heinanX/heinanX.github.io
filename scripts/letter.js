const funfact_div = document.querySelector('#funFact');

//sets hidden function to remove LS keys from LS
const koda = document.querySelector('#koda');
koda.addEventListener('click', () => { clear_LS() });

const a = document.createElement('a');
const p = document.createElement('p');
p.setAttribute('class', 'd-inline');
a.setAttribute('href', 'http://eskilssonlinda.myportfolio.com');
a.setAttribute('onclick', `window.open(this.href,'_blank');return false;`);

const init = () => {
    funfact_div.addEventListener('mouseenter', getLink);
    funfact_div.addEventListener('mouseleave', removeLink);
    
    renderLetter();
}

// TRANSLATE FUNCTION THAT TRANSLATES PERSONAL INTRODUCTION/LETTER INTO SWEDISH.
const translate = () => {
    const translateBtn = document.querySelector('.translate');
    translateBtn.removeEventListener('click', translate);
    translateBtn.addEventListener('click', renderLetter);
    
    translateBtn.textContent = 'English?';

    const getVisitor = localStorage.getItem('visitor');
    const para1 = document.querySelector('#paragraph-1');
    const lsName = document.querySelector('#ls-name');
    const para2 = document.querySelector('#paragraph-2');
    const para3 = document.querySelector('#paragraph-3');
    const para4 = document.querySelector('#paragraph-4');
    const para5 = document.querySelector('#paragraph-5');
    const para6 = document.querySelector('#paragraph-6');
    const para7 = document.querySelector('#paragraph-7');

    para1.textContent = `Hej igen,`;

    if (getVisitor) {
        lsName.style.display = 'inline';
        lsName.textContent = `${getVisitor}!`;
    }
  
    para2.textContent = `Kul att se att du hittade hit. Låt mig presentera mig själv mer ingående den här gången. Som ni redan vet är namnet Linda och jag är student på Medieinstitutet i Stockholm där jag studerar Webbprogrammering för e-handel. Det betyder att jag har erfarenhet av både Backend och Frontend programmering.`;

    para3.textContent = `I skolan har vi fokuserat främst på att använda Javascript eftersom det är både ett frontend- och backendspråk (Node.js). Utöver det har jag förståelse för PHP och goda erfarenhet av Transcript, HTML och CSS.`;

    para4.textContent = `Som student har jag bl.a. lärt mig att bygga webbsidor från början till slut och som person är jag van att ta eget initiativ, att finna och driva mina egna uppgifter, så mellan mina skoluppgifter tycker jag om att arbeta på mindre projekt och har till och med skapat mitt eget Yahtzee.`;

    para5.textContent = `Det jag gillar mest med programmering är att det alltid utmanar mig. Det är som en skattjakt: en resa full av prövningar och (ibland så frustrerande!) misstag, där vinsten är stoltheten och nöjet av ännu ett avslutat projekt.`;

    para6.innerHTML = `Jag ställer alltid höga krav på mitt arbete och tar stolthet i det jag levererar. Jag trivs att arbeta i team samtidigt som jag inte drar mig för att arbeta ensam. Nyfiken är mitt mellannamn och jag är inte rädd för att söka svar när jag behöver dem. Kort sagt, är jag övertygad om att min erfarenhet och attityd gör mig till en värdefull teamplayer för många arbetsteam.<br><br>Om du letar efter en ivrig praktikant, eller bara vill connecta, skicka ett <a href="mailto:lindaEskilsson@medieInstitutet.se">meddelande</a>. Tills vi ses igen!`;

    para7.innerHTML = `Vänliga hälsningar, <br> Linda`;

}

// FUNCTION THAT RENDERS OUT PERSONAL INTRODUCTION/LETTER
const renderLetter = () => {

    /* LETTER  TEXT CONTENT*/
    const translateBtn = document.querySelector('.translate');
    translateBtn.removeEventListener('click', renderLetter);
    translateBtn.addEventListener('click', translate);

    translateBtn.innerHTML = 'Svenska?';

    const getVisitor = localStorage.getItem('visitor');
    const para1 = document.querySelector('#paragraph-1');
    const lsName = document.querySelector('#ls-name');
    const para2 = document.querySelector('#paragraph-2');
    const para3 = document.querySelector('#paragraph-3');
    const para4 = document.querySelector('#paragraph-4');
    const para5 = document.querySelector('#paragraph-5');
    const para6 = document.querySelector('#paragraph-6');
    const para7 = document.querySelector('#paragraph-7');

    para1.textContent = `Hi again, `;
    if (getVisitor) {
        lsName.style.display = 'inline';
        lsName.textContent = `${getVisitor}!`;
    }
    
    para2.textContent = `Glad to see you found your way back here. Let me introduce myself more thoroughly this time around. As you already know, my name is Linda, and I'm a student at Medieinstitutet in Stockholm, where I'm studying Web Programming for eCommerce. This means I have experience with both Backend and Frontend programming.`

    para3.textContent = `In school, our main foucs has been on using Javascript, as it's versatile and used for both Frontend and Backend development. We have also dabbled in PHP, and though my strength lies in Javascript, I feel confident using both since they are similar to each other.`
    
    para4.textContent = `As a student, I've learned to build webpages from start to finish, although I don't limit myself to ecommerce only. In between school assignments, I enjoy working on smaller projects and have even created my own Yahtzee game. `

    para5.textContent = `What I like the most about programming is that it constantly challenges me to think. It is like its own little treasure hunt: a journey full of trials and (at times, so frustrating!) errors. Though in the end, with each element successfully implemented, you get closer to the finish line, where the ultimate reward is the satisfaction of completing another project.`

    para6.innerHTML = `By nature, I hold myself to high standards in all the things I do and take pride in what I deliver. I enjoy learning and always ready to seek out answers when I need them. In short, I'm confident that my experience and attitude makes me a valuable asset to any team.<br><br>If you're looking for an eager intern, or just want to connect, send me a <a href="mailto:lindaEskilsson@medieInstitutet.se">hello</a>.<br> Until we meet again!`
    
    para7.innerHTML = ` Sincerely, <br> Linda`;
    
}

//REVEALS LINK TO GRAPHIC DESIGN PORTFOLIO
const getLink = () => {
    p.textContent = ` if you got the time!`;
    a.textContent = `Check it out`;
    funfact_div.append(a, p);
}

//HIDES LINK TO OTHER PORTFOLIO
const removeLink = () => {
    a.innerText = '';
    p.innerText = '';
}

//LINKED FUNCTION THAT CLEARS KEYS
const clear_LS = () => {
    localStorage.removeItem('visitor');
    localStorage.removeItem('mode');
}


init();