var numShownConcert = 0;
function drawSeatCurve(){
	  	var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.strokeStyle="green";
		ctx.moveTo(150,50);
		ctx.arcTo(150,250,250,250,100);
		ctx.arcTo(350,250,350,150,100);
		ctx.lineTo(350,50);
		ctx.stroke();
}

function showSeatInfo2(seatdiv){
	var seatinfodiv = document.getElementById("seatinfo");
	//alert(seatinfostr);
	//seatinfodiv.innerHTML = seatinfostr; //doesn't work if passing this as the parameter
	// the problem lies in "title", which is to be replaced by "data-title"
	/* var seatinfostr = seatdiv.getAttribute("title"); */
	var seatinfostr = seatdiv.getAttribute("data-title");
	
	seatinfodiv.children[1].innerHTML = seatinfostr + "<br />Price: $" + document.getElementById('priceNum').value;
	seatinfodiv.style.display = "block";
	
	var seatint = seatdiv.id.substring(seatdiv.id.lastIndexOf('_') + 1, seatdiv.id.length);
	document.getElementById("currentSeatint").value = seatint;  //pass the integer value of seatid
	
	var lastseatid = document.getElementById("currentSeatid").value;
	document.getElementById("currentSeatid").value = seatdiv.id;
	
	$('#seatinfo').css("display", "block");
	document.getElementById(seatdiv.id).style.background = "green";
	document.getElementById(lastseatid).style.background = "silver";  // this statement is not effective for the first time running, and should never be followed by any other statements.
	/* var currentseatid = seatdiv.getAttribute("data-id"); */
	/* $('#seatinfo').css("display", "none"); */
	/* document.getElementById("btnAddToCart").setAttribute("data-id") = "" + currentseatid; */ //setAttribute seems not work 
	
	
}

function showSeatInfo(seatinfostr){
	var seatinfodiv = document.getElementById("seatinfo");
	//alert(seatinfostr);
	//seatinfodiv.innerHTML = seatinfostr; //doesn't work if passing this as the parameter

	seatinfodiv.children[1].innerHTML = seatinfostr;
	seatinfodiv.style.display = "block";
}

function addSeatDot(){
	var seatbody = document.getElementById("modal-body");

	var seatdiv;

	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:110px;left:330px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 1");
	seatdiv.setAttribute("data-id", "1");
	seatdiv.setAttribute("id", "seat1_1");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:130px;left:330px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 2");
	seatdiv.setAttribute("data-id", "2");
	seatdiv.setAttribute("id", "seat1_2_2");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:150px;left:330px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 3");
	seatdiv.setAttribute("data-id", "3");
	seatdiv.setAttribute("id", "seat1_3_3");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:170px;left:330px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 4");
	seatdiv.setAttribute("data-id", "4");
	seatdiv.setAttribute("id", "seat1_4_4");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:190px;left:330px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 5");
	seatdiv.setAttribute("data-id", "5");
	seatdiv.setAttribute("id", "seat1_5_5");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:210px;left:330px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 6");
	seatdiv.setAttribute("data-id", "6");
	seatdiv.setAttribute("id", "seat1_6_6");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:230px;left:335px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 7");
	seatdiv.setAttribute("data-id", "7");
	seatdiv.setAttribute("id", "seat1_7_7");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:248px;left:344px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 8");
	seatdiv.setAttribute("data-id", "8");
	seatdiv.setAttribute("id", "seat1_8_8");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:265px;left:355px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 9");
	seatdiv.setAttribute("data-id", "9");
	seatdiv.setAttribute("id", "seat1_9_9");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:280px;left:368px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 10");
	seatdiv.setAttribute("data-id", "10");
	seatdiv.setAttribute("id", "seat1_10_10");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:293px;left:386px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 11");
	seatdiv.setAttribute("data-id", "11");
	seatdiv.setAttribute("id", "seat1_11_11");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:303px;left:406px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 12");
	seatdiv.setAttribute("data-id", "12");
	seatdiv.setAttribute("id", "seat1_12_12");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:308px;left:432px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 13");
	seatdiv.setAttribute("data-id", "13");
	seatdiv.setAttribute("id", "seat1_13_13");
	seatbody.appendChild(seatdiv);
	
	
	//seat on the right
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:110px;left:560px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 26");
	seatdiv.setAttribute("data-id", "26");
	seatdiv.setAttribute("id", "seat1_26_26");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:130px;left:560px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 25");
	seatdiv.setAttribute("data-id", "25");
	seatdiv.setAttribute("id", "seat1_25_25");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:150px;left:560px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 24");
	seatdiv.setAttribute("data-id", "24");
	seatdiv.setAttribute("id", "seat1_24_24");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:170px;left:560px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 23");
	seatdiv.setAttribute("data-id", "23");
	seatdiv.setAttribute("id", "seat1_23_23");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:190px;left:560px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 22");
	seatdiv.setAttribute("data-id", "22");
	seatdiv.setAttribute("id", "seat1_22_22");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:210px;left:560px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 21");
	seatdiv.setAttribute("data-id", "21");
	seatdiv.setAttribute("id", "seat1_21_21");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:230px;left:555px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 20");
	seatdiv.setAttribute("data-id", "20");
	seatdiv.setAttribute("id", "seat1_20_20");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:248px;left:546px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 19");
	seatdiv.setAttribute("data-id", "19");
	seatdiv.setAttribute("id", "seat1_19_19");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:265px;left:535px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 18");
	seatdiv.setAttribute("data-id", "18");
	seatdiv.setAttribute("id", "seat1_18_18");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:280px;left:522px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 17");
	seatdiv.setAttribute("data-id", "17");
	seatdiv.setAttribute("id", "seat1_17_17");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:293px;left:504px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 16");
	seatdiv.setAttribute("data-id", "16");
	seatdiv.setAttribute("id", "seat1_16_16");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:303px;left:484px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 15");
	seatdiv.setAttribute("data-id", "15");
	seatdiv.setAttribute("id", "seat1_15_15");
	seatbody.appendChild(seatdiv);
	
	seatdiv = document.createElement("div");
	seatdiv.setAttribute("class", "seatdot");
	seatdiv.setAttribute("style", "top:308px;left:458px;");
	seatdiv.setAttribute("data-title", "Row 1, Column 14");
	seatdiv.setAttribute("data-id", "14");
	seatdiv.setAttribute("id", "seat1_14_14");
	seatbody.appendChild(seatdiv);
	
	var seatdivs = document.getElementsByClassName("seatdot");
	for(var i = 0; i < seatdivs.length; i++)
	{
		/* var seatinfostr = "Row 1, Column " + (i+1); */
		var seatinfostr = seatdivs[i].getAttribute('title');
		seatdivs[i].setAttribute("data-toggle", "tooltip");
		/* seatdivs[i].setAttribute("title", seatinfostr); */
		/* seatdivs[i].setAttribute("onclick", "showSeatInfo('" + seatinfostr + "<br />Price:" + "');"); */
		seatdivs[i].setAttribute("onclick", "showSeatInfo2(this);");
		
	}
}




function showOrderHistory(){

	var userid = '';

	$.ajax({ url: 'php/getUserid.php', 
		async: false,
		success: function(data) {
        	userid = data;
        }
    });


	$.get("php/getOrderHistory.php", {userid:userid}, function(mydata){

        if (mydata != ' '){
        	var jsonarray = mydata.split('<br>');
        	for(var i=0;i<jsonarray.length; i++){
        		// get the information of order
        		var sorder = JSON.parse(jsonarray[i]);
        		var sorder_oid = sorder.orderid;
        		var sorder_pay = sorder.paytime;


	        	$.get("php/getAllSuborder.php", {orderid:sorder_oid}, function(mydata){	        		
        		if (mydata != ' '){
 					showOrderHistorySub(mydata);       			
        		}
        		else{
					window.location.href = "index.html";
        			//alert('Your cart is empty.');
        		}
        	});
		
        	}

        }
        else{
        	alert('Your order history is empty.');
        }
    });

}

function showOrderHistorySub(mydata){


        	var jsonarray = mydata.split('<br>');
        	var concertInfo = JSON.parse(jsonarray[0]);
        	var sorder_oid = concertInfo.orderid;
        	var sorder_pay = concertInfo.paytime;
        	var n = jsonarray.length;
        	var nt = n-1;
        	var content = '';
        	var totalPrice = 0;

        	for(var i=0;i<nt; i++){
        		var concertInfo = JSON.parse(jsonarray[i]);
        		var sorder_cname = concertInfo.concertname;
        		var sorder_row = concertInfo.row;
        		var sorder_col = concertInfo.col;
        		var sorder_price = concertInfo.price;
        		totalPrice += parseInt(sorder_price);
        		var content_s = "Concert Name: " + sorder_cname + "<br>" +"Seat Row: " + sorder_row + "<br>Seat Column: " + sorder_col + "<br>Price: $" + sorder_price + "<br>";
        		content += content_s;

        	}




		    var order_1 = document.createElement("div");
        	order_1.className = "panel panel-primary";

        	var order_2 = document.createElement("div");
        	order_2.className = "panel-heading";
        	order_2.innerHTML = "Order Number: " + sorder_oid;


        	var order_3 = document.createElement("div");
        	order_3.className = "panel-body";
        	order_3.style.background = "white";


        	var order_4 = document.createElement("div");
        	order_4.className = "row";

        	var order_5 = document.createElement("div");
        	order_5.className = "col-sm-2";
 
        	var order_6 = document.createElement("p");
        	order_6.innerHTML = "Total Price: <br>$"+totalPrice+"<br>Pay Time: <br>"+sorder_pay;
        	order_6.style.color = "black";
 

        	var order_7 = document.createElement("div");
        	order_7.className = "col-sm-10";

        	var order_8 = document.createElement("div");
        	order_8.className = "panel panel-info";

        	var order_9 = document.createElement("p");
        	order_9.innerHTML = content;
        	order_9.style.color = "black";
        	order_9.style.marginLeft = "10px";

        	order_1.appendChild(order_2);
        	order_2.appendChild(order_3);
        	order_3.appendChild(order_4);
        	order_4.appendChild(order_5);
        	order_4.appendChild(order_7);
        	order_5.appendChild(order_6);
        	order_7.appendChild(order_8);
        	order_8.appendChild(order_9);

        	document.getElementById("historyShowContainer").appendChild(order_1);


}




// show selected suborders total price
function showSelectedOrder(isChecked, concertPriceT){

	//alert(concertPrice);
	var price = document.getElementById("priceSum").innerHTML;
	var ticket = document.getElementById("ticketSum").innerHTML;

	var concertPrice = concertPriceT.substring(7);
	

	if (isChecked == true){
		var addSum = +price + +concertPrice;
		document.getElementById("priceSum").innerHTML = addSum;

		var addSumTicket = parseInt(ticket) + 1;
		document.getElementById("ticketSum").innerHTML = addSumTicket.toString();

	}else{
		var redSum = +price - +concertPrice;
		document.getElementById("priceSum").innerHTML = redSum;

		var redSumTicket = parseInt(ticket) - 1;
		document.getElementById("ticketSum").innerHTML = redSumTicket.toString();

	}
}

function checkOut()
{
	var orderid = '';
	$.ajax({ url: 'php/getorderid.php', 
		async: false,
		success: function(data) {
            orderid = data;
        }
    });
	// alert(orderid);

	$.get("php/getCart.php", {orderid:orderid}, function(mydata){

        if (mydata != ' '){

        	var checklist = document.getElementsByClassName("cartSelect");
        	var selected = 0;
        	for(var i = 0; i < checklist.length; i++){

        		// remove those unselected suborder
        		if(checklist[i].checked){
        			selected = selected + 1;
        		}
         	}
        	if (selected == 0){
        		alert("Please select tickets you want to buy.");
        	}
        	else{
				for(var i = 0; i < checklist.length; i++){
					if(!checklist[i].checked){
						var totalInfo = checklist[i].getAttribute("value");
        				var removeinfo = totalInfo.substring(0,6);
        				deleteSuborder(removeinfo);

					}
				}
        		checkOutUpdate(orderid);
        	}        	

        }
        else{
			window.location.href = "index.html";
        	//alert('Your cart is empty.');
        }
    });
	
}

// checkout order, change status = 1, and increase the max orderid by 1, a new order.
function checkOutUpdate(orderid){

	$.get("php/checkOut.php", {orderid:orderid}, function(mydata){

        if (mydata != 'true'){
        	alert('Check out error: ' + mydata);
        }
        else{
         	$.get("php/updateOrderid.php", function(mydata){
         			window.open('success.html', '_self',false);
        	});
        	
        }
    });

}

// remove suborder and refresh the page
function deleteSuborder(mydata){
	var concertid = mydata.substring(0,3);
	var seatid = mydata.substring(4,6);

		$.get("php/deleteConcert.php", {concertid:concertid,seatid:seatid}, function(mydata){
			if (mydata == "true")
			{
				//alert("Your ticket has been deleted.");
				//window.location.reload(true);
			}
			else{
				alert('error deleting suborder: ' + mydata);
				window.location.reload(true);
			}
		});

}


// get current unpaid suborders in cart
function showCart() {
    var orderid = '';
	$.ajax({ url: 'php/getorderid.php', 
		async: false,
		success: function(data) {
        orderid = data;
        }
    });
	


	        $.get("php/getCart.php", {orderid:orderid}, function(mydata){

        	if (mydata != ' '){
        		var jsonarray = mydata.split('<br>');
        		for(var i=0;i<jsonarray.length; i++){
        			// get the information of order
        			var sorder = JSON.parse(jsonarray[i]);
        			var sorder_oid = sorder.orderid;
        			var sorder_cid = sorder.concertid;
        			var sorder_sid = sorder.seatid;

        			showOrder(sorder_cid, sorder_sid);

        		}
        		
        	}
        	else{
				window.location.href = "index.html";
        		//alert('Your cart is empty.');
        	}
        });

}

// show each unpaid orders in cart
function showOrder(sorder_cid, sorder_sid){

	var seat_row = '';
	var seat_col = '';

	// get seat information
	$.get("php/getSeatInfo.php", {seatid:sorder_sid}, function(mydata){

        if (mydata != ' '){
        	//alert(mydata);
        	var jsonarray_s = mydata.split('<br>');
        	var seatIF = JSON.parse(jsonarray_s[0]);
        	seat_row = seatIF.row;
        	seat_col = seatIF.col;
        		
        }
        else{
        	alert('Can not find the seat.');
        }
    });

	

	// get concert information
    $.get("php/getConcert.php", {concertid:sorder_cid}, function(mydata){
        if (mydata != ' '){
        	var jsonarray_c = mydata.split('<br>');
        	// only one concert info.
        	var concertInfo = JSON.parse(jsonarray_c[0]);
        	var concertName = concertInfo.concertname;
        	var concertImage = concertInfo.image;
        	var concertPrice = concertInfo.price;
        	var order_1 = document.createElement("div");
        	order_1.className = "panel panel-info";

        	var order_2 = document.createElement("div");
        	order_2.className = "panel-heading";
        	order_2.innerHTML = concertName;


        	var order_3 = document.createElement("div");
        	order_3.className = "checkbox";
        	order_3.style.cssFloat = "right";
        	order_3.style.marginTop = "3px";

        	var order_4 = document.createElement("div");
        	order_4.style.cssFloat = "right";
        	order_4.style.marginTop = "3px";
        	order_4.style.marginRight = "40px";

        	var order_5 = document.createElement("input");
        	order_5.setAttribute("type", "checkbox");
        	order_5.setAttribute("class", "cartSelect");
        	order_5.setAttribute("value", sorder_cid+","+sorder_sid+","+concertPrice);
        	order_5.setAttribute("onclick", "showSelectedOrder(this.checked, this.value);");

        	var order_6 = document.createElement("button");
        	order_6.setAttribute("class", "glyphicon glyphicon-remove-sign cartRemove");
        	order_6.setAttribute("style", "float:right;margin-top:3px;margin-right:20px;");
        	order_6.setAttribute("value", sorder_cid+","+sorder_sid);
        	order_6.setAttribute("onclick", "deleteSuborder(this.value);");

        	var order_12 = document.createElement("span");
        	order_12.innerHTML = "Delete";
        	order_12.setAttribute("style", "float:right;margin-top:3px;margin-right:5px;");

        	var order_13 = document.createElement("p");
        	order_13.innerHTML = "Select";
        	order_13.setAttribute("style", "float:right;margin-top:3px;margin-right:80px;");


        	var order_7 = document.createElement("div");
        	order_7.className = "panel-body";

        	var order_8 = document.createElement("img");
        	order_8.src = concertImage;
                //alert(order_8.src);
        	order_8.className = "img-responsive";
        	order_8.height = "30px";
        	order_8.alt = "IMAGE";

        	var order_9 = document.createElement("div");
        	order_9.className = "panel-footer";
        	order_9.style.textAlign = "right";

        	var order_10 = document.createElement("button");
        	order_10.innerHTML="View Seat";
        	order_10.setAttribute("data-target", "#myModal");
        	order_10.setAttribute("data-toggle", "modal");
        	order_10.setAttribute("class", "btn btn-warning btnSeat");
        	order_10.setAttribute("data-id", sorder_cid);


        	var order_11 = document.createElement("span");
        	order_11.innerHTML = "SEAT ROW: " + seat_row + ",  SEAT COLUMN: " + seat_col + ",  PRICE: $" + concertPrice;
        	order_11.style.cssFloat = "left";


        	order_1.appendChild(order_2);
        	order_2.appendChild(order_3);
        	order_2.appendChild(order_4);
        	order_3.appendChild(order_6);
        	order_3.appendChild(order_12);
        	order_3.appendChild(order_13);
        	order_3.appendChild(order_5);
        	order_2.appendChild(order_7);
        	order_7.appendChild(order_8);
        	order_2.appendChild(order_9);
        	order_9.appendChild(order_11);
        	order_9.appendChild(order_10);

        	document.getElementById("orderShowContainer").appendChild(order_1);

			$('.btnSeat').click(function(){
				bindSeatClick($(this));
			});

        	}
        else{
        	alert('Can not find the the concert.');
        }        			
    });

}

function bindSeatClick(thisone){
	$('#seatinfo').css("display", "none");
			$.get("php/isloggedin.php", function(mydata){
			if (mydata != "true")
			{
				alert('You have to Login!');
				window.open('login.html');
				window.location.reload(true);
				return;
			}
		});

		var concertid = thisone.data('id');
		/* $('#musicTitle').text('Concert ID: ' + concertid); */
		$('#currentConcertId').val('' + concertid);
		$('.seatdot').css("background", "silver").css("pointer-events", "auto");
		
		
		var orderid = '';
		$.ajax({ url: 'php/getorderid.php', 
			async: false,
			success: function(data) {
              orderid = data;
            }
        });
		
		
		$.get("php/seatinfo.php", {id:concertid}, function(mydata){
			/* $('#musicTitle').text(data); */
			
			var jsonarray = mydata.split('<br>');
			/* $('#musicTitle').text(mydata); */
			var musicdata = JSON.parse(jsonarray[0]);
			$('#musicTitle').text(musicdata.concertname);
			$('#priceNum').val(musicdata.price);
			
			for(var i=1;i<jsonarray.length; i++)
			{
				var seatinfo = JSON.parse(jsonarray[i]);
				var seatid = 'seat1_' + seatinfo.seatid + '_' + seatinfo.seatid;  // check seat table to determine the row and col id
				$('#' + seatid).css("background", "#EDE275").css("pointer-events", "none");
				if (orderid == seatinfo.orderid)
				{
					$('#' + seatid).css("background", "green").css("pointer-events", "none");
					
				}
				
			}
		});
}

//Anqi
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
           hash = hashes[i].split('=');
           vars.push(hash[0]);
           vars[hash[0]] = hash[1];
    }
    return vars;
}

function getNumOfShownConcert(filename, parameter){
    $.ajax({
                    data: {value: parameter},
                    type: "POST",
                    url: filename,
                    async: false,
                    success: function(data){
                        var jsonarray = data.split('<br>');
                        numShownConcert = jsonarray.length - 1;
                    },
                    error: function () {
                        alert("fail");
                    }
     });
}


function loadConcert(pageNum, filename, parameter){
    var concertList = $(".concert_block");
    for(var i = 0; i < concertList.length; ++i){
         $(concertList[i]).hide();
         $(".concertName").hide();
    }


    $.ajax({
         data: {value: parameter},
         type: "POST",
         url: filename,
         async: false,
         success: function(data){
                    var jsonarray = data.split('<br>');
                    for(var j = 0, i = (pageNum - 1)*4; j < concertList.length && i < jsonarray.length - 1; ++i, ++j){	
                       var obj = JSON.parse(jsonarray[i]);
                       var qs = "editproduct.html?concertid="+obj.concertid; 
                       $(concertList[j]).find("img").attr('data-id', obj.concertid);
                       $(concertList[j]).find("img").attr('src',obj.image);
                       $(concertList[j]).find("button").attr('data-id', obj.concertid);
                       $(concertList[j]).find("a").attr('href', qs);
                       $(concertList[j]).find("a").attr('data-id', obj.concertid);
                       var concertname = $('<span>');
                       concertname.addClass("concertName");
                       concertname.append(obj.concertname);
                       $(concertList[j]).find("a").after(concertname);
                       $(concertList[j]).show();					   
                    }
          },
         error: function () {
                    alert("error loading concert info");
          }
    });
     
}


function getCurrentPageNum(){
    var s = getUrlVars();
    if(window.location.href.indexOf('?') !== -1 && typeof(s['page']) !== 'undefined' ){
        return parseInt(s['page']);
    }
    else{
        return 1;
    }       
}

function getCurrentTimeInterval(){
    var s = getUrlVars();
    if(window.location.href.indexOf('?') !== -1 && typeof(s['interval']) !== 'undefined'){
        return parseInt(s['interval']);
    }
    else{
        return -1;
    }       
}

function getCurrentKeyWord(){
    var s = getUrlVars();
    if(window.location.href.indexOf('?') !== -1 && typeof(s['keyword']) !== 'undefined'){
        var keyword = s['keyword'];
        var s = decodeURIComponent(keyword);
        s = $.trim(s);
        return s;
    }
    else{
        return "";
    }
}


function createPageButton(tag, numPage){
    var list = document.createElement("li");
    list.setAttribute("class", "pageButton");
    var link = document.createElement("a");
    var interval = getCurrentTimeInterval();
    var keyword = getCurrentKeyWord();
    link.innerHTML = tag;
    if(tag === '&laquo'){
        var num = getCurrentPageNum();
        if(num === 1){
            num = numPage;
        }
        else{
            num = num - 1;
        }
        link.setAttribute("href", "index.html?page="+num+"&interval="+interval+"&keyword="+keyword);
    }
    else if(tag === '&raquo'){
        var num = getCurrentPageNum();
        if(num === numPage){
            num = 1;
        }
        else {
            num = num + 1;
        }
        link.setAttribute("href", "index.html?page="+num+"&interval="+interval+"&keyword="+keyword);
    }
    else{
        if(getCurrentPageNum() === tag){
            link.style.color = "red";;
        }
        else{
            link.setAttribute("href", "index.html?page="+tag+"&interval="+interval+"&keyword="+keyword);
        }
    }
    list.appendChild(link);
    var page = document.getElementById("page");
    page.appendChild(list); 
    return link;
}


function createPagination(numPage){ 
    createPageButton('&laquo', numPage);  
    for(var i = 0; i < numPage; ++i){
        createPageButton(i+1, numPage);
    }    
    createPageButton('&raquo', numPage);
}

function hidePagination(){
    var pageButtonList = $(".pageButton");
    for(var i = 0; i < pageButtonList.length; ++i){
         $(pageButtonList[i]).hide();
    }
}

function loadConcertChoice(){
    var interval = getCurrentTimeInterval();
    var keyword = getCurrentKeyWord();
	
    if(interval === -1 && keyword === ''){ //time interval and search keyword not set
        getNumOfShownConcert('php/loadConcertInfo.php');
        if(numShownConcert % 4 === 0){
           numPage = numShownConcert / 4;
        }
        else{
           numPage = Math.floor(numShownConcert / 4) + 1;
        }
    
        //get current page number
        var pageNum = getCurrentPageNum();

         //load all concert info for selected page
        loadConcert(pageNum, 'php/loadConcertInfo.php', interval);
    }
    else if(keyword === ''){ //time interval set, keyword not set
        getNumOfShownConcert('php/filterConcert_time.php', interval);
        if(numShownConcert % 4 === 0){
            numPage = numShownConcert / 4;
        }
        else{
            numPage = Math.floor(numShownConcert / 4) + 1;
        }
        var pageNum = getCurrentPageNum();
        loadConcert(pageNum, 'php/filterConcert_time.php', interval);
        if(interval === 3){
            $("#location").html("Within 3 days");
        }
        else if(interval === 7){
            $("#location").html("Within a week");
        }
        else if(interval === 30){
            $("#location").html("Within a months");
        }
        else if(interval === 90){
            $("#location").html("Within 3 months");
        }
        else{
            $("#location").html("Within 6 months");
        }    
        var span = $('<span />').addClass('caret');
        $("#location").append(span);
    }
    else{ //keyword set, time interval not set
        getNumOfShownConcert('php/filterConcert_keyword.php', keyword);
        if(numShownConcert % 4 === 0){
            numPage = numShownConcert / 4;
        }
        else{
            numPage = Math.floor(numShownConcert / 4) + 1;
        }
        var pageNum = getCurrentPageNum();
        loadConcert(pageNum, 'php/filterConcert_keyword.php', keyword); 
        $("#keyword").val(keyword);
    }
	
}

$(document).ready(function(){

    loadConcertChoice();
    $("#searchButton").click(function(){
        var keyword = $("#keyword").val();
        var s = encodeURIComponent(keyword);
        window.location.href = "index.html?keyword="+s;
    });

    $('[data-toggle="tooltip"]').tooltip(); 
        
    $('#location').next().find("a").click(function(){
        $('#location').html($(this).text() + '<span class=\'caret\'></span>');
    });
	
    //$("#login").hide();
    //$("#logout").hide();
    //$("#AddConcert").hide();
	//$("#loadCart").hide();
	//$("#loadHistory").hide();
	//alert('hide');
	
    $.ajax({        
                    url: 'php/welcome.php',
                    success: function(data){
                        if($.trim(data) === 'Login'){
                            //$("#login").show();
                            $(".btnEdit").html('Learn more');
							$("#login").css('display', 'block');
							$("#loadCart").css('display', 'none');
							$("#loadHistory").css('display', 'none');
							$("#logout").css('display', 'none');
                        }
                        else{
                            $("#logout").append(data);
                            //$("#logout").show();
							$("#login").css('display', 'none');
							$("#logout").css('display', 'block');
							$("#loadCart").css('display', 'block');
							$("#loadHistory").css('display', 'block');
                            $.ajax({
                                url: 'php/check_authority.php',
                                success:function(data){
                                    if($.trim(data) === 'admin'){
                                        //$("#AddConcert").show();
										$("#AddConcert").css('display', 'block');
                                    }
                                    else{
                                        $(".btnEdit").html('Learn more');
										$("#AddConcert").css('display', 'none');
                                    }
                                },
                                error: function (data) {
                                    //alert('error checking authority: ' + data);
                                }
                                
                            });
                        }
                    },
                    error: function (data) {
                        alert('error loading welcome info: ' + data);
                    }
       });


    $("#logout").click(function(){
               $.ajax({
                    url: 'php/session_destroy.php',
                    success: function(){
                        window.location.href = "index.html";
                    },
                    error: function (data) {
                        alert('error logout: ' + data);
                    }
               });
    });

	$('#rangePrice').change(function(){
		$('#txtPrice').val($(this).val());
	});
        
        $('#txtPrice').blur(function(){
		$('#rangePrice').val($(this).val());
	});

	$('.btnSeat').click(function(){
		bindSeatClick($(this));
	});
	
	$('#btnAddToCart').click(function(){
		$.get("php/isloggedin.php", function(mydata){
			if (mydata != "true")
			{
				alert('You have to Login Again!');
				window.open('login.html');
				return;
			}
		});
		
		var concertid = $('#currentConcertId').val();
		var seatint = $('#currentSeatint').val();

		$.get("php/addtocart.php", {concert:concertid, seat:seatint}, function(mydata){
			if (mydata == 'true')
			{
				alert('Your seat is added to cart');
				window.location.reload(true);
				/* window.opener.history.go(0);window.close(); */
			}
			else {
				alert('error when adding to cart: ' + mydata);
			}
			
		});
	});



// qianying
    $('#loadCart').click(function(){
		$.get("php/isloggedin.php", function(mydata){
			if (mydata != "true")
			{
				alert('You have to Login Again!');
				window.open('login.html');
				window.location.reload(true);
				return;
			}
		});	
		window.open('cart.html','_self',false);
    });

    $('#loadHistory').click(function(){
		$.get("php/isloggedin.php", function(mydata){
			if (mydata != "true")
			{
				alert('You have to Login Again!');
				window.open('login.html');
				window.location.reload(true);
				return;
			}
		});
		window.open('history.html','_self',false);
    });

    // change the number item in cart
	$.ajax({ url: 'php/getCartno.php', 
		async: false,
		success: function(data) {
        	$("#cartno").html(data);
			//alert(data);
        }
    });

});


