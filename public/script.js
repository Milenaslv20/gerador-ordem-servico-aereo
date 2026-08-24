function validarQuantItens(event) {
  const quantItens = document.getElementById('quantItens').value;
  if (quantItens === "" || quantItens === "0") {
    event.preventDefault();  // Impede o envio do formulário
    alert("Informe a quantidade de itens.");  
    return false;
  }
  return true;
}

window.onload = function() {
  const buttons = document.querySelectorAll('button[type="submit"]');
  buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    validarQuantItens(event);
    });
  });
};

function gerarCampos() {
  const quantidade = parseInt(document.getElementById('quantItens').value);
  const container = document.getElementById('container_span');

  // Limpa os campos anteriores
  container.innerHTML = '';

  for (let i = 1; i <= quantidade; i++) {
    const grupo = document.createElement('div');
    grupo.className = 'item-group';

    grupo.innerHTML = `
      <div class="container_inputs">
        <div class="input">
          <label id="numItem" name="numItem">Item ${i}</label>
          <input type="hidden" name="arrayItens[${i - 1}][numItem]" value="${i}" />
        </div> 
        <div class="input">
          <label>Serviço:</label>
          <select name="arrayItens[${i - 1}][servico]" class="servico-select">
            <option>Selecione</option>
            <hr />
            <optgroup label="Docs">
              <option value="Doc 1"> Doc 1</option>
              <option value="Doc 2">Doc 2</option>
              <option value="Doc 3">Doc 3</option>
              <option value="Doc 4">Doc 4</option>
              <option value="Doc 5">Doc 5</option>
              <option value="Doc 6">Doc 6</option>
              <option value="Doc 7">Doc 7</option>
              <option value="Doc 8">Doc 8</option>
              <option value="Doc 9">Doc 9</option>
              <option value="Doc 10">Doc 10</option>
              <option value="Doc 11">Doc 11</option>
              <option value="Doc 12">Doc 12</option>
              <option value="Doc 13">Doc 13</option>
              <option value="Doc 14">Doc 14</option>
              <option value="Doc 15">Doc 15</option>
              <option value="Doc 16">Doc 16</option>
              <option value="Doc 17">Doc 17</option>
              <option value="Doc 18">Doc 18</option>
              <option value="Doc 19">Doc 19</option>
              <option value="Doc 20">Doc 20</option>
              <option value="Doc 21">Doc 21</option>
              <option value="Doc 22">Doc 22</option>
              <option value="Doc 23">Doc 23</option>
              <option value="Doc 25">Doc 25</option>
              <option value="Doc 26">Doc 26</option>
              <option value="Doc ME">Doc ME</option>
              <option value="Doc MF">Doc MF</option>
              <option value="Doc 0A">Doc 0A</option>
            </optgroup>
            <hr />
            <optgroup label="Motor">
              <option value="Boroscopia">Boroscopia</option>
              <option value="Lavagem do compressor">Lavagem do compressor</option>
              <option value="Inicial do motor (100EFH)">Inicial do motor (100EFH)</option>
              <option value="Insp. Minor">Insp. Minor</option>
              <option value="Insp. 100EFH">Insp. 100EFH</option>
              <option value="Insp. 200EFH">Insp. 200EFH</option>
              <option value="Insp. 200EFH / 6">Insp. 200EFH / 6</option>
              <option value="Insp. 300EFH">Insp. 300EFH</option>
              <option value="Insp. 600EFH">Insp. 600EFH</option>
              <option value="Insp. 600EFH / 1">Insp. 600EFH / 1</option>
              <option value="Insp. 1000EFH">Insp. 1000EFH</option>
              <option value="Insp. 1800EFH">Insp. 1800EFH</option>
              <option value="Exhaust duct">Exhaust duct</option>
              <option value="Exhaust Deflector">Exhaust Deflector</option>
              <option value="Deceleration Check">Deceleration Check</option>
              <option value="Fuel Nozzles">Fuel Nozzles</option>
              <option value="HSI">HSI</option>
              <option value="Coleta de Óleo">Coleta de Óleo</option>
            </optgroup>
            <hr />
            <optgroup label="Hélice">
              <option value="Insp. hélice McCauley">Insp. hélice McCauley</option>
              <option value="Insp. hélice Hartzell">Insp. hélice Hartzell</option>
              <option value="Instal. hélice McCauley">Instal. hélice McCauley</option>
              <option value="Instal. hélice Hartzell">Instal. hélice Hartzell</option>
              <option value="Remoc. hélice McCauley">Remoc. hélice McCauley</option>
              <option value="Remoc. hélice Hartzell">Remoc. hélice Hartzell</option>
            </optgroup>
            <hr />
            <optgroup label="ICAs">
              <option value="Ruddler Gust">Ruddler Gust</option>
              <option value="Extended Baggage">Extended Baggage</option>
              <option value="Amphibian gear advisory">Amphibian gear advisory</option>
              <option value="Alamo hélice McCauley">Alamo hélice McCauley</option>
              <option value="APE stool kit">APE stool kit</option>
              <option value="Jack pad">Jack pad</option>
              <option value="Flap Travel">Flap Travel</option>
              <option value="Piso">Piso</option>
              <option value="Piso antiderrapante">Piso antiderrapante</option>
              <option value="Porta passageiro">Porta passageiro</option>
              <option value="Carga acompanhada">Carga acompanhada</option>
              <option value="Cargo Net">Cargo Net</option>
              <option value="PQD">PQD</option>
              <option value="EGPWS">EGPWS</option>
              <option value="GTX 33X e 3X5 ADS/3">GTX 33X e 3X5 ADS/3</option>
              <option value="GA antenna series">GA antenna series</option>
              <option value="500W/530W">500W/530W</option>
              <option value="Transponder GTX 355">Transponder GTX 355</option>
            </optgroup>
            <hr />
            <optgroup label="Anfíbio">
              <option value="Verific. Fast System">Verific. Fast System</option>
              <option value="Insp. Amphibian Gear Advisory">Insp. Amphibian Gear Advisory</option>
              <option value="Verific. Placards">Verific. Placards</option>
              <option value="Verific. equip. IFR noturno">Verific. equip IFR noturno</option>
              <optgroup label="Flutuadores">
                <option value="Insp. 25h">Insp. 25h</option>
                <option value="Insp. 50h">Insp. 50h</option>
                <option value="Insp. 100h">Insp. 100h</option>
              </optgroup>
            </optgroup>
            <hr />
            <optgroup label="Substituição">
              <option value="Subst. Vaccum sys">Substit. Vaccum sys</option>
              <option value="Subst. Governor propeller">Subst. Governor propeller</option>
              <option value="Subst. Starter">Subst. Starter</option>
              <option value="Subst. pneu">Subst. pneu</option>
              <option value="Subst. Vaccum relief valfe filter">Subst. Vaccum relief valfe filter</option>
              <option value="Subst. Extintor">Subst. Extintor</option> 
              <option value="Subst. mangueiras motor">Subst. mangueiras motor</option>
              <option value="Subst. Oil fuel heater">Subst. Oil fuel heater</option>
            </optgroup>
            <hr />
            <hr />
            <optgroup label="Instalação/Remoção">
              <option value="Instalação FCU">Instalação FCU</option>
              <option value="Remoção FCU">Remoção FCU</option> 
              <option value="Instalação Starter">Instalação Starter</option>
              <option value="Remoção Starter">Remoção Starter</option> 
              <option value="Instalação Fuel Pump">Instalação Fuel Pump</option>
              <option value="Remoção Fuel Pump">Remoção Fuel Pump</option> 
            </optgroup>
            <hr />
            <option value="PQD config">PQD config</option>
            <option value="PQD reconfig">PQD reconfig</option>
            <option value="Altimetro, transponder e modo C">Altimetro, transponder e modo C</option>
            <option value="Insp. Bateria">Insp. Bateria</option>
            <option value="Ext. mensal">Ext. mensal</option>
            <option value="Compensação da bússola">Compensação da bússola</option>
            <option value="CVA">CVA</option>
            <option value="Insp. ETL">Insp. ETL</option>
            <option value="Insp. Starter">Insp. Starter</option>
            <option value="Bolsa prim. socorros">Bolsa prim. socorros</option>
            <option value="Verific. pneu">Verific. pneu</option>
            <option value="Peso e balanceamento">Peso e balanceamento</option>
            <option value="Insp. anual ELT">Insp. anual ELT</option>
            <option value="Diretriz">Diretriz</option>
            <hr />   
          </select>
        </div>            
      </div>
    `;
    container.appendChild(grupo);
  }
}
