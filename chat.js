
	var firstCall = true;   // By default, first call to start chat i.e., when user submits username.

  	function sendText(textObj) {
    	addChatText('self', htmlSprites(textObj.value));  
      	textObj.value='';  
    }  

// get system time and convert it in week days and months name
   	var timestamp = function(){
	  	var date = new Date();
	    var hour = date.getHours();
	    hour = (hour < 10 ? "0" : "") + hour;
	    var min  = date.getMinutes();
	    min = (min < 10 ? "0" : "") + min;
	    var sec  = date.getSeconds();
	    sec = (sec < 10 ? "0" : "") + sec;
	    var year = date.getFullYear();
	    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	    var month = months[date.getMonth()];
	    var weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
		var day = weekday[date.getDay()];
		
		return hour + ":" + min + ":" + sec + "&nbsp;&nbsp;" +day+" "+month + "'" +year;
  	};

//add the entered text to DOM with timestamp
  	function addChatText(by,text){
	  	if(text !== ""){
	  		var ca = document.getElementById('contents');  
		    ca.innerHTML +="<li class="+ by +"><div class='messages'><p> "+ text + "</p><time datetime='T20:14D11'2009'> "+timestamp()+ " </time></div></li>";
	     	ca.scrollTop = 50000;
	 	}  
  
  	}  

// Remove HTML entities
  	function htmlSprites (htmlText) {	
    	htmlText = htmlText.replace(/([.<>*"+?^=!:${}()|\[\]\/\\])/g, "").trim();
    	return htmlText;
  	}


  	function showHide(id,txt){
  		var textObj = document.getElementById(id); 
  		if (firstCall && txt!==""){  		
	        document.getElementById('prompt').remove();        
	        var p = document.getElementById("greet");
			p.innerHTML=" " + htmlSprites(txt) + " ";
		 	document.getElementById('minimize').setAttribute('onclick',"toggle_visibility('container');setFocus('chatLine');");
		 	toggle_visibility('container');
			firstCall = false; 
			textObj.value="";
    	}
		else{		     
			sendText(textObj);
		}
  	}

//perform some action when enter is pressed
  	function listenforEnter(id, value){
  		var i=document.getElementById(id);
		i.addEventListener('keydown', function(event) {
	    	var key = event.which || event.keyCode;

	    	if (key == 13) { // 13 is enter
	    		showHide(this.id,this.value);	    
    		}

  		}, false);
  	
  	}

//change view on and off.
	function toggle_visibility(id) {
       	var e =document.getElementById(id);
	      if(e.style.display == 'none')
	        {
	          e.style.display = 'block';
	        }
	       else
	       {
	          e.style.display = 'none';	          
	       }
       	return true;	
	}

	function setFocus(id){
		document.getElementById(id).focus();
	}