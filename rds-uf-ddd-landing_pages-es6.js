const botaoRd= document.getElementsByClassName("rd-button");
const time=500;
function aguardaElemento(botaoRd, time) {
	if( botaoRd.length >= 1) {
			identificaDDD();
			return;
	}
	else {
			setTimeout(function() {
					aguardaElemento(botaoRd, time);
			}, time);
	}
}
aguardaElemento(botaoRd, time);

function identificaDDD(){                  
  const meuFone = document.querySelector('input[name="personal_phone"]');
  const campoUF =  document.querySelector('select[name="uf"]');
  const divUF = campoUF.parentElement;

  divUF.style.display = 'none'; 

  const estados = {
      "11": "SP",
      "12": "SP",
      "13": "SP",
      "14": "SP",
      "15": "SP",
      "16": "SP",
      "17": "SP",
      "18": "SP",
      "19": "SP",
      "21": "RJ",
      "22": "RJ",
      "24": "RJ",
      "27": "ES",
      "28": "ES",
      "31": "MG",
      "32": "MG",
      "33": "MG",
      "34": "MG",
      "35": "MG",
      "37": "MG",
      "38": "MG",
      "41": "PR",
      "42": "PR",
      "43": "PR",
      "44": "PR",
      "45": "PR",
      "46": "PR",
      "47": "SC",
      "48": "SC",
      "49": "SC",
      "51": "RS",
      "53": "RS",
      "54": "RS",
      "55": "RS",
      "61": "DF",
      "62": "GO",
      "63": "TO",
      "64": "GO",
      "65": "MT",
      "66": "MT",
      "67": "MS",
      "68": "AC",
      "69": "RO",
      "71": "BA",
      "73": "BA",
      "74": "BA",
      "75": "BA",
      "77": "BA",
      "79": "SE",
      "81": "PE",
      "82": "AL",
      "83": "PB",
      "84": "RN",
      "85": "CE",
      "86": "PI",
      "87": "PE",
      "88": "CE",
      "89": "PI",
      "91": "PA",
      "92": "AM",
      "93": "PA",
      "94": "PA",
      "95": "RR",
      "96": "AP",
      "97": "AM",
      "98": "MA",
      "99": "MA"
    };

  meuFone.addEventListener("blur", function( event ) {
    let meuFoneVal = document.querySelector('input[name="personal_phone"]').value;
    const br = "+55";
    if ( meuFoneVal.substring(0,3) == br ) {
      let dddFone = meuFoneVal.substring(5, 7);
      for (let [key , value] of Object.entries(estados)) {
        if (dddFone == key ) {
          campoUF.value = value;
        }
      }
    }
  });
}