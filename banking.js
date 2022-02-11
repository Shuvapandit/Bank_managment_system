  //deposit
  document.getElementById('deposit-btn').addEventListener('click',function(){
      
      const depoinput=document.getElementById('depo_amount');
      const depoamount=depoinput.value;
      console.log(depoamount)
      const depototal=document.getElementById('dpottl');
    depototal.innerText= depoamount;
    //clear  depo input field
    depoinput.value='';
    
  
   
  })


    //widthdraw
    document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const widthdrawInput=document.getElementById('widthdraw_amount');
    const widthdrawAmount=widthdrawInput.value;
    console.log(widthdrawAmount)
    const widthdrawtotal=document.getElementById('widthdrawtotal');
    widthdrawtotal.innerText= widthdrawAmount;
    //clear widthdraw input field
    widthdrawInput.value='';

    })