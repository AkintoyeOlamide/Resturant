const about = () => {
    const item = document.querySelector('.item');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('center');
    aboutTitle.textContent = 'Mel-Tea Italian cusine';

    const aboutText = document.createElement('p');
    aboutText.classList.add('center');
    aboutText.textContent = 'Mel Tea Room Ltd is the perfect place for mouthwatering american. We provide a high quality food made to perfection, try our chicken for yourself. Come in and experience our unmatched service and food. Browse our restaurant menu today and give us a shout at (506) 536-1251, we are located in Sackville!.';

    item.appendChild(aboutTitle);
    item.appendChild(aboutText);
};

export default about;