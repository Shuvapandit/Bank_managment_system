 //
 function getInputValue(inputId){
  const inputField=document.getElementById(inputId);
  const newdepoamountText=inputField.value;
  const amountValue=parseFloat(newdepoamountText);
   //clear  depo input field
   inputField.value='';
  return amountValue;


 }
  function updatetotalField(totalFieldId,amount ){
    //debugger;
  const totalElement=document.getElementById(totalFieldId);
  const predepoamountText=totalElement.innerText;
  const previousTotal=parseFloat(predepoamountText);
 totalElement.innerText= previousTotal+ amount;


 } 
 function getcurrentBalance(){
  const balancetotal=document.getElementById('Balance-total');
  const balanceTotalText=balancetotal.innerText;
  const prebalancetotal=parseFloat(balanceTotalText);
  return prebalancetotal;

 }
 //update balance function
 function updateBalance(newdepoAmountt,isadd){
 const balancetotal=document.getElementById('Balance-total');
  /*  const balanceTotalText=balancetotal.innerText;
  const prebalancetotal=parseFloat(balanceTotalText); */
  const prebalancetotal=getcurrentBalance();
  if(isadd==true){
    balancetotal.innerText=prebalancetotal+newdepoAmountt;
  }
 else{
  balancetotal.innerText=prebalancetotal-newdepoAmountt;

 }
 
   
 }
  
  //deposit
  document.getElementById('deposit-btn').addEventListener('click',function(){
   
      
     // const depoinput=document.getElementById('depo_amount');
      //const newdepoamountText=depoinput.value;
      //const newdepoAmount=parseFloat(newdepoamountText);
      const newdepoAmountt =getInputValue('depo_amount');
     
      /*  const depototal=document.getElementById('dpottl');
      const predepoamountText=depototal.innerText;
      const predepoamountAmount=parseFloat(predepoamountText);
    const newdepositTotal= predepoamountAmount+ newdepoAmount;
    depototal.innerText=newdepositTotal;  */
   if(newdepoAmountt >0){
    updatetotalField('dpottl',newdepoAmountt )
    updateBalance(newdepoAmountt,true);

   }
  
     //update account balance  total
    /*  const balancetotal=document.getElementById('Balance-total');
     const balanceTotalText=balancetotal.innerText;
     const prebalancetotal=parseFloat(balanceTotalText);
     const newBalanceTotal=prebalancetotal+newdepoAmountt;
     balancetotal.innerText=newBalanceTotal; */
    
   
    

    
  
   
  })


    //widthdraw
    document.getElementById('widthdraw-btn').addEventListener('click',function(){
    /*const widthdrawInput=document.getElementById('widthdraw_amount');
    const widthdrawAmountText=widthdrawInput.value;
    const newwidthdrawAmount=parseFloat( widthdrawAmountText); */
    const widthdrawAmount= getInputValue('widthdraw_amount');
    const currentBalance= getcurrentBalance();
    if(widthdrawAmount>0&& widthdrawAmount<currentBalance){
      updatetotalField('widthdrawtotal',widthdrawAmount )
      updateBalance(widthdrawAmount,false);
      
    }
    if(widthdrawAmount>currentBalance){
      console.log("you cannot widthdraw more than you have")
    }
    

    /* const widthdrawtotal=document.getElementById('widthdrawtotal');
    const prewidthdrawText=widthdrawtotal.innerText;
    const newPrewidthdraw=parseFloat(prewidthdrawText);
    const newWidthdrawTotal=newPrewidthdraw+ newwidthdrawAmount;
    widthdrawtotal.innerText=newWidthdrawTotal; */
  //update widthdraw account balance  total
/*   const balancetotalwidthdraw=document.getElementById('Balance-total');
  const balancetotalwidthdrawText=balancetotalwidthdraw.innerText;
  const prewidthdrawbalancetotal=parseFloat(balancetotalwidthdrawText);
  const newwidthdrawBalanceTotal=prewidthdrawbalancetotal-widthdrawAmount;
  balancetotalwidthdraw.innerText=newwidthdrawBalanceTotal; */
  

    //clear widthdraw input field
    //widthdrawInput.value='';

    })