fetch('brends.xml')
  .then(res => res.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const br = xmlDoc.getElementsByTagName('brend');
    const links = document.querySelectorAll('.brend');
    for(let i = 0; i < 12; i++){
        links[i].textContent = br[i].textContent;
    }
  })