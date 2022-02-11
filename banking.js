  //deposit
  document.getElementById('deposit-btn').addEventListener('click',function(){
      
      const depoinput=document.getElementById('depo_amount');
      const newdepoamountText=depoinput.value;
      const newdepoAmount=parseFloat(newdepoamountText);
     
      const depototal=document.getElementById('dpottl');
      const predepoamountText=depototal.innerText;
      const predepoamountAmount=parseFloat(predepoamountText);
    const newdepositTotal= predepoamountAmount+ newdepoAmount;
    depototal.innerText=newdepositTotal;
     //update account balance  total
     const balancetotal=document.getElementById('Balance-total');
     const balanceTotalText=balancetotal.innerText;
     const prebalancetotal=parseFloat(balanceTotalText);
     const newBalanceTotal=prebalancetotal+newdepoAmount;
     balancetotal.innerText=newBalanceTotal;
    //clear  depo input field
    depoinput.value='';

   
    
  
   
  })


    //widthdraw
    document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const widthdrawInput=document.getElementById('widthdraw_amount');
    const widthdrawAmountText=widthdrawInput.value;
    const newwidthdrawAmount=parseFloat( widthdrawAmountText);

    const widthdrawtotal=document.getElementById('widthdrawtotal');
    const prewidthdrawText=widthdrawtotal.innerText;
    const newPrewidthdraw=parseFloat(prewidthdrawText);
    const newWidthdrawTotal=newPrewidthdraw+ newwidthdrawAmount;
    widthdrawtotal.innerText=newWidthdrawTotal;
  //update widthdraw account balance  total
  const balancetotalwidthdraw=document.getElementById('Balance-total');
  const balancetotalwidthdrawText=balancetotalwidthdraw.innerText;
  const prewidthdrawbalancetotal=parseFloat(balancetotalwidthdrawText);
  const newwidthdrawBalanceTotal=prewidthdrawbalancetotal-newwidthdrawAmount;
  balancetotalwidthdraw.innerText=newwidthdrawBalanceTotal;
  

    //clear widthdraw input field
    widthdrawInput.value='';

    })