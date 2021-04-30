const createIcon = (class1, class2) => {
  const link = document.createElement('a');
  link.classList.add('m-left-10');
  link.href = '#';
  const icon = document.createElement('i');
  icon.classList.add(class1, class2);
  link.appendChild(icon);

  return link;
};

const contact = () => {
  const item = document.querySelector('.item');

  const links = document.createElement('h2');
  links.classList.add('center');
  links.textContent = '';

  const instaLink = createIcon('fab', 'fa-instagram');
  const twitterLink = createIcon('fab', 'fa-twitter');
  const fbLink = createIcon('fab', 'fa-facebook-f');

  links.appendChild(instaLink);
  links.appendChild(twitterLink);
  links.appendChild(fbLink);

  const aboutText = document.createElement('p');
  aboutText.classList.add('contact-text1');
  aboutText.textContent = 'You can contact us here; +44 2456357733';

  const contactText = document.createElement('h6');
  contactText.classList.add('contact-text2');
  contactText.textContent = 'Our UK Adress: plot 10A Totehham Road No4';

  item.appendChild(aboutText);
  item.appendChild(contactText);
  item.appendChild(links);
};

export default contact;