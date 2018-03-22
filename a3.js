function add()
{
				var cry = document.getElementById("coun");		
				for (var i = 0; i < countries.length; i++)
				{
					  var op = document.createElement("option");					  
					  op.value = countries[i].code;
                      op.innerHTML = countries[i].name;
                      cry.appendChild(op);
					  
				}
			  
			     cry.value ="CA";
}

function pro()
{
				var pro = document.getElementById("province");		
				var pro1 = document.getElementById("province1");
				
				var p = document.getElementById("coun").value;
				
				
				
				if( p == "CA")
				{
					pro.style.display = "block";
					pro1.style.display = "none";
				}
				
				if( p != "CA")
				{
					pro.style.display = "none";
					pro1.style.display = "block";
				}
				
				
}


function validfname()
{
	var fname = document.form1.fname.value.trim();	
	var reg1=/^[A-z \-\']*$/;
	var reg2=/^.*[a-z A-Z].*$/;
	
	if(fname.length==0)
		
	{
		form1.fname.focus();
        form1.fname.select();
		
		return false; 
		
	}
	
	else {
	
	   if(reg1.test(fname)==true && reg2.test(fname)==true )
		   
		   {
			   
			   
			   return true;
		   }
		else{   
		   
 		    form1.fname.focus();
            form1.fname.select();
		   
		   return false;
		   
		}
	}
}

function validlname()
{	
	var lname = document.form1.lname.value.trim();
	var reg1=/^[A-z \-\']*$/;
	var reg2=/^.*[a-z A-Z].*$/;
	
	if(lname.length ==0)
		
	{
		form1.lname.focus();
        form1.lname.select();
		
		return false; 

		
	}
	
	else {
	
	   if(reg1.test(lname)==true && reg2.test(lname)==true )
		   
		   {
			   
			   
			   return true;
		   }
		else{   
		   
 		    form1.lname.focus();
            form1.lname.select();
		   
		   return false;
		   
		}
	}
}

function validphone()
{
	
	            var reg1=/\([0-9][0-9][0-9]\)[0-9][0-9][0-9]\-[0-9][0-9][0-9]/;
				var reg2=/\(000\)[0-9][0-9][0-9]\-[0-9][0-9][0-9]/;
				var reg3=/\([0-9][0-9][0-9]\)000\-000/;
				
				var number = document.form1.phone.value;
				
				if(reg1.test(number)== true && reg2.test(number)== false && reg3.test(number)== false )
				{
					
					return true;
				}
				
				else{
					form1.phone.focus();
                    form1.phone.select();
					
					return false;
				}
}

function validpsw(){
	
	               var password = document.form1.psw.value;
					var reg1 = /^.*[a-z].*$/;
					var reg2 = /^.*[A-Z].*$/;
					var reg3 = /^.*[0-9].*$/;
					if(password.length >= 8 && reg1.test(password) == true && reg2.test(password) == true && reg3.test(password) == true)
					{
						return true;
					}
					
					else{
						
						form1.psw.focus();
                        form1.psw.select();
						
						return false;	
    
						
					    }
						
						
}

function validrpsw(){
	
	            var rpsw = document.form1.rpsw.value;
				var psw = document.form1.psw.value;
				if (rpsw == psw){
					return true;
				}
				else{
					form1.rpsw.focus();
                    form1.rpsw.select();
					
				return false;
				}
	
}

function validpro(){
	
	   if(document.form1.province.selectedIndex == -1 || document.form1.province.value =="none")
		   
		   {
			   return false;
			   
		   }
		   
		   else {
			   
			   return true;
		   }
}

function validall(){
	
	
if(validfname() && validlname() && validphone() && validpsw() && validrpsw() && validpro())
{
	
	return true;
}
else{
  return false;
}
}



function displayfname()
				   {
				   var	dis = document.getElementById("c");	
				   if (!validfname()){
                   	  		
                             c.style.display = "block"   ;
							 
                             document.getElementById("fname").style.borderColor="red";   								
											}
	                if	(validfname()){
                   	  		
                             c.style.display = "none" ;
                             document.getElementById("fname").style.borderColor="gray";   								
											}									
				   }
				
function displaylname()
				   {
				   var	dis = document.getElementById("c");	
				   if (!validlname()){
                   	  		
                             c.style.display = "block"   ;
                             document.getElementById("lname").style.borderColor="red";   								
											}
	                if	(validlname()){
                   	  		
                             c.style.display = "none" ;
                             
							 document.getElementById("lname").style.borderColor="gray";  								
											}									
				   }

function displaypsw()
				   {
				   var	dis = document.getElementById("a");	
				   if (!validpsw()){
                   	  		
                             a.style.display = "block"   ;
                             
							 document.getElementById("psw").style.borderColor="red";
   								
											}
	                if	(validpsw()){
                   	  		
                             a.style.display = "none" ;
							 
							 document.getElementById("psw").style.borderColor="gray";
                                								
											}									
				   }
function displayrpsw()
				   {
				   var	dis = document.getElementById("b");	
				   if (!validrpsw()){
                   	  		
                             b.style.display = "block"   ;
                             document.getElementById("rpsw").style.borderColor="red";   								
											}
	                if	(validrpsw()){
                   	  		
                             b.style.display = "none" ;
                              document.getElementById("rpsw").style.borderColor="gray";   								
											}									
				   }
function displayphone()
				   {
				   var	dis = document.getElementById("d");	
				   if (!validphone()){
                   	  		
                             d.style.display = "block"   ;
							 document.getElementById("phone").style.borderColor="red";				
                                								
											}
	                if	(validphone()){
                   	  		
                             d.style.display = "none" ;
                              document.getElementById("phone").style.borderColor="gray";  								
											}									
				   }	

function displaypro()
				   {
				   var	dis = document.getElementById("e");	
				   if (!validpro()){
                   	  		
                             e.style.display = "block"   ;
                             document.getElementById("province").style.borderColor="red";   								
											}
	                if	(validpro()){
                   	  		
                             e.style.display = "none" ;
                             document.getElementById("province").style.borderColor="gray";   								
											}									
				   }				   
				   