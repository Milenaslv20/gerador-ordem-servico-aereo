const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
require('dotenv').config();

const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let anoAtual = new Date().getFullYear();
let anoAtualUltimosNumeros = new Date().getFullYear().toString().slice(-2);

app.post("/gerar-doc", (req, res) => {
  const { numeroOs, dataEmissao, 
    tsn, csn, aeronave, 
    tsnMotor, tsoMotor, csnMotor, csoMotor,
    tsnHelice, tsoHelice,
    numItem, servico, arrayItens
  } = req.body;

  console.log(req.body)

  const { acao } = req.body;

//dados fixos automatico aeronaves
      let cliente = 'Vento Sul Táxi Aéreo';
      let modelo = '208B';
      let sn = '';
      let motor = 'Pratt & Whitney';
      let modeloMotor = '';
      let snMotor = '';
      let helice = '';
      let modeloHelice = '';
      let snHelice = '';
      if (aeronave === 'PP-ITZ') {
          cliente;
          modelo;
          sn = '208B-0499';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC1246';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '100921';
      } else if (aeronave === 'PT-MET') {
          cliente;
          modelo;
          sn = '208B-0509';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC2247';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '021002';
      } else if (aeronave === 'PP-AMV'){
          cliente;
          modelo;
          sn = '208B-2179';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC1729';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '220148';
      } else if (aeronave === 'PP-AMX'){
          cliente;
          modelo;
          sn = '208B-2267';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC0845';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '080621';
      } else if (aeronave === 'PR-ATA'){
          cliente;
          modelo;
          sn = '208B-0880';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC1444';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '101326';
      } else if (aeronave === 'PP-SKT'){
          cliente;
          modelo;
          sn = '208B-0599';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC0601';
          helice = 'Hartzell';
          modeloHelice = 'HC-B3TN-3AF';
          snHelice = 'BUA-34857';
      } else if (aeronave === 'PR-VCE'){
          cliente;
          modelo;
          sn = '208B-1286';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC1845';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '081732';
      } else if (aeronave === 'PS-AML'){
          cliente;
          modelo;
          sn = '208B-2025';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC1297';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '190406';
      } else if (aeronave === 'PS-AMZ'){
          cliente;
          modelo;
          sn = '208B-5755';
          motor;
          modeloMotor = 'PT6A-140';
          snMotor = 'PCE-VA0900';
          helice = 'McCauley';
          modeloHelice = '4HFR34C778';
          snHelice = '230473';
      } else if (aeronave === 'PR-CFJ'){
          cliente;
          modelo;
          sn = '208B-1217';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-19422';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '081764';
      } else if (aeronave === 'PT-MPB'){
          cliente;
          modelo;
          sn = '208B-0630';
          motor;
          modeloMotor = 'PT6A-114A';
          snMotor = 'PCE-PC2194';
          helice = 'McCauley';
          modeloHelice = '3GFR34C703B';
          snHelice = '071228';
      } else if (aeronave === 'PT-DCR'){
          cliente = 'D. Mario Turismo Aéreo';
          modelo;
          sn = '208B-5126';
          motor;
          modeloMotor = 'PT6A-140';
          snMotor = 'PCE-19422';
          helice = 'Hartzell';
          modeloHelice = 'HC-B3TN-3AF(Y)';
          snHelice = 'BUA 33203';  
      } else if (aeronave === 'PS-AMY'){
          cliente;
          modelo;
          sn = '208B-5883';
          motor;
          modeloMotor = 'PT6A-140';
          snMotor = 'PCE-VA1070';
          helice = 'McCauley';
          modeloHelice = '4HFR34C778';
          snHelice = '250357';
      } else if (aeronave === 'PS-AMS'){
          cliente;
          modelo;
          sn = '208B-5908';
          motor;
          modeloMotor = 'PT6A-140';
          snMotor = 'PCE-VA1098';
          helice = 'McCauley';
          modeloHelice = '4HFR34C778';
          snHelice = '250334';
      } else if (aeronave === 'PR-TVN'){
          cliente;
          modelo;
          sn = '208B-5909';
          motor;
          modeloMotor = 'PT6A-140';
          snMotor = 'PCE-VA1099';
          helice = 'McCauley';
          modeloHelice = '4HFR34C778';
          snHelice = '250521';
      } else{
        cliente;
        modelo = '';
        sn = '';
        motor = '';
        modeloMotor = '';
        snMotor = '';
        helice = '';
        modeloHelice = '';
        snHelice = '';
      }
    //

    //item IO
    let ioS = '';
    let ioN = '';

    //serviços
    const listaServicos = arrayItens.map((item) => {
      const doc = item.servico;
      let executar = '';
      let executado = '';

      let manualMotor = '';
      let taskMotor = '';
      if (modeloMotor === "PT6A-140"){
        manualMotor = process.env.MANUAL_MOTOR_PED_140;
      } else{
        manualMotor = process.env.MANUAL_MOTOR_PED;
      }

      if (doc.startsWith("Doc")) {
        executar = `Executar o Cumprimento do Inspection Document ${String(doc.replace("Doc ", "")).padStart(2, '0')} conforme o Manual de Manutenção da Aeronave.`;
        executado = `Executado o Cumprimento do Inspection Document ${String(doc.replace("Doc ", "")).padStart(2, '0')} conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}, Task: 05-15-${String(doc.replace("Doc ", "")).padStart(2, '0')}.`;
        if(doc === ("Doc 1") || doc === ("Doc 3") || doc === ("Doc 6") || doc === ("Doc 8") || doc === ("Doc 19") || doc === ("Doc 25") || doc === ("Doc 0A")){
          ioS = "X";
          ioN = "___"
        } else{
          ioS =  "___";
          ioN = "X";
        }
      } else if (doc === "Boroscopia") {
          if(modeloMotor === "PT6A-140"){
            taskMotor = `Task:`;
          } else{
            taskMotor = `Task: 72-00-00, Table 601 Periodic Inspection`;
          }
        executar = `Executar a Boroscope Inspection do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}.`;
        executado = `Executada a Boroscope Inspection do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}, ${taskMotor}.`;
        ioN = "X";
        ioS =  "___";
      } else if (doc === "Lavagem do compressor") {
          if(modeloMotor === "PT6A-140"){
            taskMotor = `Task:`;
          } else{
            taskMotor = `71-00-00, Power Plant, Cleaning`;
          }
        executar = `Executar a Lavagem do Compressor do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}.`;
        executado = `Executada a Lavagem do Compressor do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}, ${taskMotor}.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Inicial do motor (100EFH)") {
        executar = `Executar a Inspeção Inicial do Motor (100EFH)  conforme o Manual de Manutenção da P&W EMM ${process.env.MANUAL_MOTOR_PED_140}.`;
        executado = `Executada a Inspeção Inicial do Motor (100EFH) conforme o Manual de Manutenção da P&W EMM ${process.env.MANUAL_MOTOR_PED_140}, 05-20-00, Scheduled Maintenance Checks.`
        ioN = "X"
        ioS =  "___"
      } else if (doc.endsWith("Minor") || doc.endsWith("100EFH") || doc.endsWith("200EFH") || doc.endsWith("200EFH / 6") || doc.endsWith("300EFH") || doc.endsWith("600EFH") || doc.endsWith("600EFH / 1") || doc.endsWith("1000EFH") || doc.endsWith("1800EFH")) {
          if(modeloMotor === "PT6A-140"){
            taskMotor = `05-20-00 – Scheduled Maintenance Checks`;
          } else{
            taskMotor = `72-00-00, Engine Turboprop, Table 601, Periodic Inspection`;
          }
        executar = `Executar a Inspeção ${doc.replace("Insp. ", "")} do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}.`;
        executado = `Executada a Inspeção ${doc.replace("Insp. ", "")} do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}, ${taskMotor}.`;
        ioS = "___"
        ioN = "X";
      } else if (doc === "Exhaust duct") {
        executar = `Executar o cumprimento, se aplicável, do E. Exhaust Duct item (2), 72-00-00 Engine Turboprop, Table 601, Periodic Inspection do Manual de Manutenção do Fabricante EMM ${manualMotor}.`;
        executado = `Executado o cumprimento do E. Exhaust Duct item (2), 72-00-00 Engine Turboprop, Table 601, Periodic Inspection do Manual de Manutenção do Fabricante EMM ${manualMotor}.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Exhaust Deflector") {
        executar = `Executar a Inspeção no Exhaust Deflector da aeronave.`;
        executado = `Executada a Inspeção no Exhaust Deflector da aeronave conforme:`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Deceleration Check") {
        executar = `Executar a Decelaration Check (Ref. 71-00-00, Power Plant – Adjustment/test) se aplicável, conforme Table 601, Periodic Inspection do Manual de Manutenção do Fabricante EMM ${manualMotor}.`;
        executado = `Executada a Decelaration Check (Ref. 71-00-00, Power Plant – Adjustment/test) conforme Table 601, Periodic Inspection do Manual de Manutenção do Fabricante EMM ${manualMotor}.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Fuel Nozzles") {
          if(modeloMotor === "PT6A-140"){
            taskMotor = `05-20-00 – Scheduled Maintenance Checks`;
          } else{
            taskMotor = `72-00-00, Engine Turboprop, Table 601, Periodic Inspection`;
          }
        executar = `Executar a Inspeção 400EFH e Fuel Nozzles do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}.`;
        executado = `Executada a Inspeção 400EFH e Fuel Nozzles do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}, ${taskMotor}.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "HSI") {
        executar = `Executar HSI do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}.`;
        executado = `Executada a HSI do Motor conforme o Manual de Manutenção da P&W EMM ${manualMotor}, 72-00-00, Engine Turboprop, Inspection of Hot Section Components.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Coleta de Óleo") {
        executar = `Executar a coleta de óleo do motor para análise conforme o Manual de Manutenção da P&W EMM ${manualMotor}.`;
        executado = `Executada a coleta de óleo do motor para análise conforme o Manual de Manutenção da P&W EMM ${manualMotor}, Cap. 72.00.00, Servicing, Tópico 5, Lubricating Oil System, Item “H”.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Insp. hélice McCauley") {
        executar = `Executar a Inspeção Periódica da hélice da aeronave conforme o Owner/Operator Information Manual, MPC26-06 – ${process.env.MANUAL_INSP_HELICE_MCCAULEY}.`;
        executado = `Executada a Inspeção Periódica da hélice da aeronave conforme o Owner/Operator Information Manual, MPC26-06 – ${process.env.MANUAL_INSP_HELICE_MCCAULEY}.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Insp. hélice Hartzell") {
        executar = `Executar a inspeção periódica da hélice Hartzell 100h / 200h, conforme Maintenance Manual Supplement 208-3BP-MMS revisão ${process.env.MANUAL_INSP_HELICE_HARTZELL}.`;
        executado = `Executado a inspeção periódica da hélice Hartzell 100h / 200h, conforme Maintenance Manual Supplement 208-3BP-MMS revisão ${process.env.MANUAL_INSP_HELICE_HARTZELL}.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Instal. hélice McCauley" || doc === "Instal. hélice Hartzell") {
        executar = `Executar a instalação da hélice da aeronave conforme o Manual de Manutenção da Aeronave.`;
        executado = `Executada a instalação da Hélice ${doc.replace("Instal. hélice ", "")} P/N: ___________, S/N: ______________, TSN ______________ e TSO: ______________ e Balanceamento Dinâmico com equipamento ACES 2015 conforme 
        o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_REMOC_INSTAL_HELICE}, Task 61-11-00. Hélice Revisada pela Amazonaves sob OS N: ______________ em: ______________.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Remoc. hélice McCauley" || doc === "Remoc. hélice Hartzell") {
        executar = `Executar a remoção da hélice da aeronave conforme o Manual de Manutenção da Aeronave.`;
        executado = `Executada a Remoção da Hélice ${doc.replace("Remoc. hélice ", "")} P/N__________, S/N __________, TSN __________e TSO ________, para revisão geral conforme o Model 208 Series Maintenance Manual, 
        D2078-13 – ${process.env.MANUAL_REMOC_INSTAL_HELICE}, Task 61-11-00.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "PQD config") {
        executar = `Configurar a Aeronave para lançamento de paraquedistas e inspecionar conforme ICA PQD em anexo.`;
        executado = `Configurada a Aeronave para lançamento de paraquedistas e inspecionada, conforme ICA H.20-1767-0/AMZ-ICA/2016 – Rev. 01.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "PQD reconfig") {
        executar = `Remover da Aeronave a configuração de lançamento de paraquedistas conforme ICA PQD em anexo.`;
        executado = `Removida da Aeronave a configuração de lançamento de paraquedistas, conforme ICA H.20-1767-0/AMZ-ICA/2016 – Rev. 01.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Altimetro, transponder e modo C") {
        executar = `Efetuar inspeção e teste dos Altímetros, Transponder e Modo C, conforme RBAC 43.`;
        executado = `Efetuada Inspeção e testes dos Altímetros, Transponder e Modo C, conforme RBAC 43 Apêndice:
Altímetro P1: P/N_____________ S/N:_________________;
Altímetro P2: P/N_____________ S/N:_________________;
Transponder: P/N_____________ S/N:_________________;
Modo C: P/N_____________ S/N:_________________.`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Insp. Bateria") {
        executar = `Executar a Inspeção Periódica da Bateria da Aeronave conforme o Model 208 Series Maintenance Manual, P/N: D2078-13 ${process.env.MANUAL_DOCS_TEXT}.`;
        executado = `Executada a Inspeção periódica da Bateria: ___________ P/N: ____________ e S/N: __________. Conforme o Model 208 Series Maintenance Manual, P/N D2078-13, ${process.env.MANUAL_DOCS_TEXT}, Task:`;
        ioN = "X";
        ioS =  "___"
      } else if (doc === "Ext. mensal") {
        executar = `Executar a Inspeção Periódica e Pesagem Mensal do Extintor de Incêndio da aeronave conforme o Model 208 Series Maintenance Manual, P/N: D2078-13 ${process.env.MANUAL_DOCS_TEXT}.`;
        executado = `Executada a Inspeção Periódica e Pesagem Mensal do Extintor de Incêndio P/N:____________ S/N:___________________ da aeronave conforme o Model 208 Series Maintenance Manual, P/N D2078-13, ${process.env.MANUAL_DOCS_TEXT}, Task: 26-20-00.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Ruddler Gust") {
        executar = `Executar a Inspeção do Rudder Gust Lock Kit da aeronave conforme ICA AT-RL-1001-ICA, Rev. L.`;
        executado = `Executada a Inspeção do Rudder Gust Lock Kit da aeronave conforme ICA AT-RL-1001-ICA, Rev. L.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Extended Baggage") {
        executar = `Executar a Inspeção no Extended Baggage da aeronave conforme ICA EB8-200-ICA, Rev. B de 14/10/2004.`;
        executado = `Executada a Inspeção ICA Extended Baggage da aeronave conforme ICA EB8-200-ICA, Rev. B de 14/10/2004.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Amphibian gear advisory") {
        executar = `Executar a Inspeção Periódica Amphibian Gear Advisory System, conforme o Service Manual & ICA Doc N. 1008655 – Rev. H de 29/11/2023.`;
        executado = `Executada a Inspeção Periódica Amphibian Gear Advisory System, conforme o Service Manual & ICA Doc N. 1008655 – Rev. H de 29/11/2023.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Alamo hélice McCauley") {
        executar = `Executar a Inspeção Periódica ICA Alamo – Rev. B. Hélice McCauley/MPC26 – Rev. 6.`;
        executado = `Executada a Inspeção periódica ICA Alamo – Rev. B. Hélice McCauley/MPC26 – Rev. 6.`;
        ioN = "X";
        ioS =  "___" 
      } else if (doc === "APE stool kit") {
        executar = `Executar a Inspeção Periódica ICA APE Stoll Kit, conforme o Instalation and Maintenance Manual Nº AA1976 – Rev. N de 19/01/2026.`;
        executado = `Executada a Inspeção Periódica ICA APE Stoll Kit, conforme o Instalation and Maintenance Manual Nº AA1976 – Rev. N de 19/01/2026.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Jack pad") {
        executar = `Executar a Inspeção Periódica ICA Jack Pad, conforme o Document No. ASIC-208ICA – Rev. IR de 06/12/2007.`;
        executado = `Executada a Inspeção Periódica ICA Jack Pad, conforme o Document No. ASIC-208ICA – Rev. IR de 06/12/2007.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Flap Travel") {
        executar = `Executar a Inspeção Periódica ICA Flap Travel Switch, conforme Document No. ASIC-002ICA – Rev. C de 01/06/2012.`;
        executado = `Executada a Inspeção Periódica ICA Flap Travel Switch, conforme Document No. ASIC-002ICA – Rev. C de 01/06/2012.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Piso") {
        executar = `Executar a Inspeção ICA PISO conforme ICA JA-703-1220, Rev. Original de 13/09/2022.`;
        executado = `Executada a Inspeção ICA PISO conforme ICA JA-703-1220, Rev. Original de 13/09/2022.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Piso antiderrapante") {
        executar = `Executar a inspeção ICA Piso Antiderrapante de alumínio da aeronave, conforme ICA JA-703-1220, Rev. Orig. de 13/09/2022.`;
        executado = `Executado a inspeção ICA Piso Antiderrapante de alumínio da aeronave, conforme ICA JA-703-1220, Rev.: Orig. de 13/09/2022.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Porta passageiro") {
        executar = `Executar a inspeção ICA PORTA PARA EMBARQUE DE PASSAGEIROS da aeronave, conforme ICA JA-699-1220 – Rev. Orig de 27/06/2022.`;
        executado = `Executada a inspeção ICA PORTA PARA EMBARQUE DE PASSAGEIROS da aeronave, conforme ICA JA-699-1220 – Rev. Orig de 27/06/2022.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Carga acompanhada") {
        executar = `Executar a Inspeção ICA CARGA ACOMPANHADA da aeronave conforme ICA JA-02-149-1220 - Rev. 03 de 22/04/2022 (Itens de 12 meses).`;
        executado = `Executada a Inspeção ICA CARGA ACOMPANHADA da aeronave conforme ICA JA-02-149-1220 - Rev. 03 de 22/04/2022 (Itens de 12 meses).`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Cargo Net") {
        executar = `Executar a inspeção periódica ICA CARGO NET da aeronave, conforme Document 13793500 - Rev. Basic de 30/04/1998.`;
        executado = `Executada a inspeção periódica ICA CARGO NET da aeronave, conforme Document 13793500 - Rev. Basic de 30/04/1998.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "PQD") {
        executar = `Executar a inspeção ICA PQD conforme ICA H.20-1768-0/AMZ-ICA/2016 de 03/03/2016 – Rev. 1.`;
        executado = `Executada a inspeção ICA PQD conforme ICA H.20-1768-0/AMZ-ICA/2016 de 03/03/2016 – Rev. 1.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "EGPWS") {
        executar = `Executar a inspeção periódica ICA EGPWS KGP-560 da aeronave, conforme KGP 560 System Install Manual KGP 560 Enhanced Ground Proximity PN 006-10611-0004 - Rev. 05 de 27/09/2022.`;
        executado = `Executada a inspeção periódica ICA EGPWS KGP-560 da aeronave, conforme KGP 560 System Install Manual KGP 560 Enhanced Ground Proximity PN 006-10611-0004 - Rev. 05 de 27/09/2022.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Compensação da bússola") {
        executar = `Executar a Compensação da Bússola Magnética e Atualização da Tabela de Declinação.`;
        executado = `Executada a Compensação da Bússola Magnética e Atualização da Tabela de Declinação.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Subst. Vaccum sys") {
        executar = `Executar a Substituição do Vaccum Sys Central Air Filter da aeronave conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}.`;
        executado = `Executada a Substituição do Vaccum Sys Central Air Filter P/N _______________ da aeronave conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}, Task:`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Subst. Governor propeller") {
        executar = `Executar a substituição do governador de hélice conforme manual do fabricante.`;
        executado = `Executada a Substituição do Governador de Hélice P/N __________ S/N __________, TSN __________ e TSO ____________, por Conveniência da Empresa, e instalado outro Governador de 
        Hélice P/N ___________, S/N ___________, TSN __________  e TSO ___________. Revisado por ______________  em ______ sob o SEGVOO _________  N° _______. Substituição realizada conforme o Model 208 Series 
        Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}, ATA 61-20-00 – Propeller Control – Maintenance Practices – 3. Propeller Governor Removal/Installation.`;
        ioS = "___"; 
        ioN = "X"
      } else if (doc === "CVA") {
        executar = `Executar a emissão de CVA da aeronave, verificação dos Itens (físicos e documentais) do Formulário F-145-27 conforme a legislação brasileira e cumprimento do Apêndice D do RBAC 43.`;
        executado = `Executada a emissão de CVA da aeronave, verificação dos Itens (físicos e documentais) do Formulário F-145-27 conforme a legislação brasileira e cumprimento do Apêndice D do RBAC 43.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Insp. ETL") {
        executar = `Executar Inspeção Anual do ELT e Bateria do ELT, conforme o RBAC 91.207 e o Manual de Manutenção da Aeronave 208 Series P/N: D2078-13, Rev. 43 de 01/06/2024.`;
        executado = `Executada Inspeção Anual do ELT P/N: _____________  S/N: ______________ e Bateria do ELT P/N:____________ S/N:_____________ com vencimento em __________, conforme o RBAC 91.207 e o 
        Manual de Manutenção da Aeronave 208 Series P/N: D2078-13, Rev. 43 de 01/06/2024, Task:`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Subst. Starter") {
        executar = `Executar a substituição do Starter Generator conforme manual do fabricante. (Conveniência da empresa).`;
        executado = `Executada a Substituição do Starter Generator P/N ______________ S/N ____________, TSN _____________ e TSO _____________, por Conveniência da Empresa, e instalado outro Starter 
        Generator de P/N _______________, S/N ____________, TSN _____________ e TSO ______________. Revisado por _______________________ em _____________ sob o SEGVOO _____ N° __________________ (Starter 
        proveniente da aeronave _______ OS N. _______), substituição realizada conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT} – Starter/Generator – Removal and Installation.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Bolsa prim. socorros") {
        executar = `Executar atualização da Bolsa de Primeiros Socorros e de itens de sobrevivência.`;
        executado = `Executada atualização da Bolsa de Primeiros Socorros e de itens de sobrevivência.`;
        ioN = "X"; 
        ioS =  "___"
      } else if (doc === "Subst. pneu") {
        executar = `Executar a substituição do Pneu ____, conforme o manual de manutenção da aeronave. (Reporte da Manutenção)`;
        executado = `
Pneu _______ Removido: P/N: ___________ S/N: ___________;
Pneu ______ Instalado: P/N: __________ S/N: ______________`;
        ioS = "X";
        ioN = "___"
      } else if (doc === "Verific. pneu") {
        executar = `Executar a verificação do Pneu _______ do _______, conforme o Manual de Manutenção da Aeronave. (Reporte da Manutenção).`;
        ioS = "X";
        ioN = "___"
      } else if (doc === "Subst. Vaccum relief valfe filter") {
        executar = `Executar a Substituição do Vaccum Relief Valve Filter da aeronave conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}.`;
        executado = `Executada a Substituição do Vaccum Relief Valve Filter P/N _______________ da aeronave conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}, Task:`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Subst. Extintor") {
        executar = `Executar a substituição do Extintor de Incêndio da aeronave conforme o Model 208 Series Maintenance Manual, P/N: D2078-13 ${process.env.MANUAL_DOCS_TEXT}.`;
        executado = `Executada a substituição do Extintor de Incêndio de P/N:____________ e S/N:___________________ da aeronave e instalado outro de P/N:____________ e S/N:___________________ Testado por ______________  em ________ sob o SEGVOO 003  N° _______. Substituição realizada  conforme o Model 208 Series Maintenance Manual, P/N D2078-13, ${process.env.MANUAL_DOCS_TEXT}, Task:`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Remoção FCU") {
        executar = `Executar a Remoção da FCU P/N __________ e S/N ___________, conforme o Manual de Manutenção da Aeronave.`;
        executado = `Executada a Remoção da FCU P/N __________e S/N __________, TSN __________e TSO __________, conforme o Manual de Manutenção do Fabricante da PWC, EMM ${manualMotor}, ATA______________.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Instalação FCU") {
        executar = `Executar a Instalação de uma FCU na aeronave conforme o Manual de Manutenção da Aeronave.`;
        executado = `Executada a instalação da FCU P/N _______________ e S/N _______________, TSN __________ e TSO ___________, conforme o Manual de Manutenção do Fabricante da PWC, EMM ${manualMotor}, ATA _____________.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Remoção Fuel Pump") {
        executar = `Executar a remoção da Fuel Pump P/N _____________ e S/N ______________, conforme manual de manutenção da aeronave.`;
        executado = `Executada a remoção da Fuel Pump da aeronave de P/N ________________ e S/N _____________, TSN __________ TSO ____________, conforme o Manual de Manutenção ${manualMotor}, Task:`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Instalação Fuel Pump") {
        executar = `Executar a instalação da Fuel Pump P/N ____________ e S/N _____________ conforme manual de manutenção da aeronave.`;
        executado = `Executada a instalação da Fuel Pump da aeronave de P/N ____________ e S/N _____________, TSN ____________ e TSO _____________, revisada em _______________ sob SEGVOO 003 Nº _________________ por _______________  conforme o Manual de Manutenção ${manualMotor}, Task:`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Peso e balanceamento") {
        executar = `Executar o Peso e Balanceamento da aeronave, conforme o Manual de Manutenção da Aeronave.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Subst. mangueiras motor") {
        executar = `Executar a substituição das mangueiras de óleo e combustível do motor, conforme o manual de manutenção do fabricante.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Instalação Starter") {
        executar = `Executar a instalação de um Starter Generator, conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}.`;
        executado = `Executada a instalação do Starter Generator abaixo, conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}, ATA 80-10-00 – Starter/Generator – Removal and Installation. Starter Generator instalado: P/N ______________ S/N _______________, TSN ____________ e TSO _____________ revisado por ______________ em ___________ Segvoo N. ______________.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Remoção Starter") {
        executar = `Executar a remoção do Starter Generator conforme manual do fabricante.`;
        executado = `Executada a remoção do Starter Generator para revisão geral, conforme o Model 208 Series Maintenance Manual, D2078-13 – ${process.env.MANUAL_DOCS_TEXT}, ATA 80-10-00 – Starter/Generator – Removal and Installation.Starter Generator Removido: P/N _______________ S/N ______________, TSN _____________ e TSO _____________`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Insp. anual ELT") {
        executar = `Executar Inspeção Anual do ELT e Bateria do ELT, conforme o RBAC 91.207 e o Manual de Manutenção da Aeronave 208 Series P/N: D2078-13, ${process.env.MANUAL_DOCS_TEXT}.`;
        executado = `Executada Inspeção Anual do ELT P/N: _____________  S/N: ______________ e Bateria do ELT P/N:____________ S/N:_____________ com vencimento em __________, conforme o RBAC 91.207 e o Manual de Manutenção da Aeronave 208 Series P/N: D2078-13, Rev. ${process.env.MANUAL_DOCS_TEXT}, Task:`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "GTX 33X e 3X5 ADS/3") {
        executar = `Executar a inspeção ICA GTX 33X and GTX 3X5 ADS-B, conforme o Document Number 190-00734-11 – Rev. 8 de 06/2021.`;
        executado = `Executada a inspeção ICA GTX 33X and GTX 3X5 ADS-B, conforme o Document Number 190-00734-11 – Rev. 8 de 06/2021.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "GA antenna series") {
        executar = `Executar a inspeção ICA GA Antenna Series, conforme o Document Number 190-00673-01 – Rev. F de 27/08/2007.`;
        executado = `Executada a inspeção ICA GA Antenna Series, conforme o Document Number 190-00673-01 – Rev. F de 27/08/2007.`;
        ioN = "X"
        ioS =  "___"    
      } else if (doc === "500W / 503W") {
        executar = `Executar a inspeção ICA 500W Series, conforme o Document Number 190-00357-65 – Rev. D de 20/11/2014.`;
        executado = `Executada a inspeção ICA 500W Series, conforme o Document Number 190-00357-65 – Rev. D de 20/11/2014.`;
        ioN = "X"
        ioS =  "___"   
      } else if (doc === "Transponder GTX 355") {
        executar = `Executar a inspeção ICA Transponder GTX355 Series, conforme o Document Number 190-00734-11 – Rev. 8 de 16/06/2021`;
        executado = `Executada a inspeção ICA Transponder GTX355 Series, conforme o Document Number 190-00734-11 – Rev. 8 de 16/06/2021.`;
        ioN = "X"
        ioS =  "___" 
      } else if (doc === "Diretriz") {
        executar = `Executar o cumprimento da ____________ conforme procedimentos descritos.`;
        executado = `Executado o cumprimento da ____________.`;
        ioN = "X"
        ioS =  "___" 
      } else if (doc === "Subst. Oil fuel heater") {
        executar = `Executar a substituição do Oil Fuel Heater da aeronave conforme o Manual do fabricante.`;
        executado = `Executada a remoção do Oil Fuel Heater PN _______________ SN _____________, TSN  _____________  TSO ________________ para OVH e instalado Oil Fuel Heater PN ________________ SN ________________, TSN ____________________ TSO ___________________ revisado por _______________________ em ________________ sob Segvoo 003 de Nº _______________________. Substituição executada conforme o Manual de Manutenção do Fabricante da PWC, EMM ${manualMotor}, ATA 73-10-01 – Oil To Fuel Heater – Maintenance Practices – 5. Removal/Installation.`;
        ioN = "X"
        ioS =  "___"
/*anf*/} else if (doc === "Insp. 25h" || doc === "Insp. 50h" || doc === "Insp. 100h") {
        executar = `Executar a inspeção periódica de ${String(doc.replace("Insp. ", "")).padStart(2, '0')} dos flutuadores da Aeronave, conforme o Manual de Manutenção da aeronave.`;
        executado = `Executada a inspeção periódica de ${String(doc.replace("Insp. ", "")).padStart(2, '0')} dos flutuadores da Aeronave conforme Service Manual And Instructions For Continued Airworthiness For The Wipline Model 8750 Amphibious/Seaplane Float On The Cessna Model 208/208b Caravan Revision V.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Verific. Fast System") {
        executar = `Executar verificação no Fast System da aeronave conforme o Manual de Manutenção da Aeronave.`;
        executado = `Executada a verificação do Fast System, conforme o Manual Part N° 3077188 do fabricante.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Insp. Amphibian Gear Advisory") {
        executar = `Executar a Inspeção Periódica Amphibian Gear Advisory System, conforme o Service Manual & ICA Doc N. 1008655 – Rev. H de 29/11/2023.`;
        executado = `Executada a Inspeção Periódica Amphibian Gear Advisory System, conforme o Service Manual & ICA Doc N. 1008655 – Rev. H de 29/11/2023.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Verific. Placards") {
        executar = `Executar verificação dos placards da aeronave.`;
        ioN = "X"
        ioS =  "___"
      } else if (doc === "Verific. equip. IFR noturno") {
        executar = `Executar a Verificação e Conferência dos equipamentos obrigatórios para IFR Noturno conforme RBAC 91.`;
        executado = `Executada a Verificação e Conferência dos equipamentos obrigatórios para IFR Noturno conforme RBAC 91.`
        ioN = "X"
        ioS =  "___" 
/**/  } else if (doc === "Selecione") {
        ioS = "___"; 
        ioN = "___"; 
      }


      return {
        numItem: item.numItem,
        servico: item.servico,
        executarServico: executar,
        executadoServico: executado,
        ioS: ioS,
        ioN: ioN
      };
    });


  //// gerar os
  if (acao === "os") {
    const content = fs.readFileSync(path.resolve(__dirname, `XXXX-OF-ANO.docx`), "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    try {
      doc.render({
        anoAtual,
        cliente,
        numeroOs,
        dataEmissao,
        tsn,
        csn,

        aeronave,
        modelo,
        sn,
        motor,
        modeloMotor,
        snMotor,

        tsnMotor,
        tsoMotor,
        csnMotor,
        csoMotor,

        helice,
        modeloHelice,
        snHelice,
        tsnHelice,
        tsoHelice,
        numItem,
        servico,
        arrayItens,
        listaServicos,
        ioS,
        ioN
      });
    } catch (error) {
      console.error("Erro ao renderizar o documento:", error);
      return res.status(500).send("Erro ao gerar o documento");
    }

    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    let numeroOss = numeroOs
    if(numeroOss === ""){
      numeroOss = `XXXX-OF-${anoAtual}`;
    } else{
      numeroOss = `${numeroOss}-OF-${anoAtual}`;
    }

    const fileName = `${numeroOss} - ${aeronave}.docx`;
    const filePath = path.resolve(__dirname, fileName);
    fs.writeFileSync(filePath, buffer);

    res.download(filePath, fileName, (err) => {
      fs.unlinkSync(filePath); // Remove o arquivo após o download
    });
  }



  //// gerar etiqueta
  if (acao === "etiqueta") {
    const content = fs.readFileSync(path.resolve(__dirname, "XXXX-OF-ANO etiqueta.docx"), "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    let numeroOsEtiqueta = numeroOs
    if(numeroOsEtiqueta === ""){
      numeroOsEtiqueta = "XX";
    } 

    try {
      doc.render({
        anoAtual,
        numeroOsEtiqueta,
        tsn,
        csn,

        aeronave,
        modelo,
        sn,

        motor,
        modeloMotor,
        snMotor,
        tsnMotor,
        tsoMotor,
        csnMotor,
        csoMotor,

        helice,
        modeloHelice,
        snHelice,
        tsnHelice,
        tsoHelice,
        numItem,
        servico,
        arrayItens,
        listaServicos,
      });
    } catch (error) {
      console.error("Erro ao renderizar o documento:", error);
      return res.status(500).send("Erro ao gerar o documento");
    }

    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    let numeroOss = numeroOs
    if(numeroOss === ""){
      numeroOss = `XXXX-OF-${anoAtual}`;
    } else{
      numeroOss = `${numeroOss}-OF-${anoAtual}`;
    }

    const fileName = `${numeroOss} - ${aeronave} etiqueta.docx`;
    const filePath = path.resolve(__dirname, fileName);
    fs.writeFileSync(filePath, buffer);

    res.download(filePath, fileName, (err) => {
      fs.unlinkSync(filePath); // Remove o arquivo após o download
    });
  }



  //// gerar segvoo hsi
  if (acao === "segvooHsi") {
    const content = fs.readFileSync(path.resolve(__dirname, "SegVoo XXXX - OS XXX-OF-ANO XXX - HSI.docx"), "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    let numeroOsSegvooHsi = numeroOs
    if(numeroOsSegvooHsi === ""){
      numeroOsSegvooHsi = "XX";
    } 

    try {
      doc.render({
        anoAtual,
        anoAtualUltimosNumeros,
        numeroOsSegvooHsi,
        tsn,
        csn,

        aeronave,
        modelo,
        sn,

        motor,
        modeloMotor,
        snMotor,
        tsnMotor,
        tsoMotor,
        csnMotor,
        csoMotor,

        helice,
        modeloHelice,
        snHelice,
        tsnHelice,
        tsoHelice,
        numItem,
        servico,
        arrayItens,
        listaServicos,
      });
    } catch (error) {
      console.error("Erro ao renderizar o documento:", error);
      return res.status(500).send("Erro ao gerar o documento");
    }

    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    let numeroOss = numeroOs
    if(numeroOss === ""){
      numeroOss = `XXXX-OF-${anoAtual}`;
    } else{
      numeroOss = `${numeroOss}-OF-${anoAtual}`;
    }

    const fileName = `SegVoo XXXX - OS ${numeroOss} ${aeronave} - HSI.docx`;
    const filePath = path.resolve(__dirname, fileName);
    fs.writeFileSync(filePath, buffer);

    res.download(filePath, fileName, (err) => {
      fs.unlinkSync(filePath); // Remove o arquivo após o download
    });
  }



//// gerar segvoo bicos
  if (acao === "segvooBicos") {
    const content = fs.readFileSync(path.resolve(__dirname, "SegVoo XXXX - OS XXX-OF-ANO XXX - Fuel Nozzles.docx"), "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    let numeroOsSegvooBicos = numeroOs
    if(numeroOsSegvooBicos === ""){
      numeroOsSegvooBicos = "XX";
    } 

    try {
      doc.render({
        anoAtual,
        anoAtualUltimosNumeros,
        numeroOsSegvooBicos,
        tsn,
        csn,

        aeronave,
        modelo,
        sn,

        motor,
        modeloMotor,
        snMotor,
        tsnMotor,
        tsoMotor,
        csnMotor,
        csoMotor,

        helice,
        modeloHelice,
        snHelice,
        tsnHelice,
        tsoHelice,
        numItem,
        servico,
        arrayItens,
        listaServicos,
      });
    } catch (error) {
      console.error("Erro ao renderizar o documento:", error);
      return res.status(500).send("Erro ao gerar o documento");
    }

    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    let numeroOss = numeroOs
    if(numeroOss === ""){
      numeroOss = `XXXX-OF-${anoAtual}`;
    } else{
      numeroOss = `${numeroOss}-OF-${anoAtual}`;
    }

    const fileName = `SegVoo XXXX - OS ${numeroOss} ${aeronave} - Fuel Nozzles.docx`;
    const filePath = path.resolve(__dirname, fileName);
    fs.writeFileSync(filePath, buffer);

    res.download(filePath, fileName, (err) => {
      fs.unlinkSync(filePath); // Remove o arquivo após o download
    });
  }  

});


const port = 3000;
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Servidor rodando na porta ${port}`);
});