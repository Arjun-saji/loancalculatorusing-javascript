
		function calculate()
		{
           var p = parseInt(document.getElementById("loanamnt").value);
           var i =parseInt(document.getElementById("intrstrte").value);
           var n =parseInt(document.getElementById("mnpay").value);
           var r= (i/100/12);
           var result=p*r*(1+r)**n/((1+r)**n-1);
           document.getElementById("emi").innerHTML="Monthly Payment ="+ (result.toFixed(2));

		}