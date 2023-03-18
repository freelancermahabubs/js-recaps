function getInputFieldValueById(inputFiledId){
  const inputFiled = document.getElementById(inputFiledId);
  const inputFiledValue = inputFiled.value;
  return inputFiledValue;
};



document.getElementById('save-btn').addEventListener('click', function(){
  
  let address = {
    addrName: getInputFieldValueById('family-field'),
    firstName: getInputFieldValueById('first-name'),
    lastName: getInputFieldValueById('last-name'), 
    email: getInputFieldValueById('email-filed'), 
    phone: getInputFieldValueById('phone-filed'),
    address: getInputFieldValueById('address-filed'),
    postCode: getInputFieldValueById('post-code'),
    cityName: getInputFieldValueById('city-filed'),
    country: getInputFieldValueById('country-list'),
    label: getInputFieldValueById('label'),
    countryList: getInputFieldValueById('country-list')
    
  };

  const addresss = localStorage.getItem('address')
   const data = JSON.parse(addresss);
   data.push(address)

  localStorage.setItem('address', JSON.stringify(data))
});

const address = () =>{
  const address = localStorage.getItem('address')
   const data = JSON.parse(address);
   uIShowData(data)
 
}

const uIShowData = (data) =>{
const tableBody = document.getElementById('body-table');
console.log(data)
data.forEach(singleData =>{
  const {addrName, address, cityName, country,  email, firstName, label, lastName, phone, postCode} = singleData;
const tr = document.createElement('tr');
tr.classList.add('tr')
tr.innerHTML = `<th scope="row"></th>

<td>
<span style="font-weight: bold;">${addrName}</span><br><span >${address} ${postCode} ${cityName} ${country}</span>
</td>
<td><span>${label}</span></td>
<td>${firstName + " " + lastName}</td>
<td>${phone}</td>
<td>${email}</td>
`;
tableBody.appendChild(tr)
})
}

const countryList = document.getElementById('country-list');

// load countries list
function loadJSON(){
  fetch('countries.json')
  .then(response => response.json())
  .then(data => {
      let html = "";
      data.forEach(country => {
          html += `
              <option> ${country.country} </option>
          `;
      });
      countryList.innerHTML = html;
  })
};

const detailsModal = () =>{
  
}
loadJSON();
address();