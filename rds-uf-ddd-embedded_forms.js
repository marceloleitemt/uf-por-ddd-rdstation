function aguardaElemento(selector, time) {
	if($(selector).length >= 1) {
			alteraForm();
			return;
	}
	else {
			setTimeout(function() {
					aguardaElemento(selector, time);
			}, time);
	}
}
var selector=".rd-button";
var time=500;
aguardaElemento(selector, time);

function alteraForm(){
  var meuFone = $('input[name="personal_phone"]');
  var meuFoneVal = meuFone.val();    
  var campoUF =  $('select[name="uf"]');
  
  $(campoUF).parent( ".bricks-form__field" ).hide();
  
  if (meuFoneVal != "+55 " ) {
      $( meuFone ).ready(identificaDDD());
  }
  $( meuFone ).blur(function() {
    identificaDDD();
  });

  function identificaDDD(){
    var numeroFone = meuFone.val();
    var dddFone = numeroFone.substring(4, 6);

    switch (dddFone) {
      case "11" : case "12" : case "13" : case "14" : case "15" : case "16" : case "17" : case "18" : case "19" : $(campoUF).val("SP"); break;
      case "21" : case "22" : case "24" : $(campoUF).val("RJ"); break;
      case "68" : $(campoUF).val("AC"); break;
      case "82" : $(campoUF).val("AL"); break;
      case "96" : $(campoUF).val("AP"); break;
      case "92" : case "97" : $(campoUF).val("AM"); break;
      case "71" : case "73" : case "74" : case "75" : case "77" : $(campoUF).val("BA"); break;
      case "85" : case "88" : $(campoUF).val("CE"); break;
      case "61" : $(campoUF).val("DF"); break;
      case "27" : case "28" : $(campoUF).val("ES"); break;
      case "62" : case "64" : $(campoUF).val("GO"); break;
      case "98" : case "99" : $(campoUF).val("MA"); break;
      case "65" : case "66" : $(campoUF).val("MT"); break;
      case "67" : $(campoUF).val("MS"); break;
      case "31" : case "32" : case "33" : case "34" : case "35" : case "37" : case "38" : $(campoUF).val("MG"); break;
      case "91" : case "93" : case "94" :$(campoUF).val("PA"); break;
      case "41" : case "42" : case "43" : case "44" : case "45" : case "46" : $(campoUF).val("PR"); break;
      case "81" : case "87" : $(campoUF).val("PE"); break;
      case "86" : case "89" : $(campoUF).val("PI"); break;
      case "84" : $(campoUF).val("RN"); break;
      case "51" : case "53" : case "54" : case "55" : $(campoUF).val("RS"); break;
      case "69" : $(campoUF).val("RO"); break;
      case "95" : $(campoUF).val("RR"); break;
      case "47" : case "48" : case "49" : $(campoUF).val("SC"); break;
      case "79" : $(campoUF).val("SE"); break;
      case "63" : $(campoUF).val("TO"); break;
    }
  }
}