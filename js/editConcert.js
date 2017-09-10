
      var s = getUrlVars();
      $(document).ready(function(){
          
          $.ajax({
                    url: 'php/check_authority.php',
                    success:function(data){
                        if($.trim(data) === 'guest'){
                           $("#changePic").hide();
                           $("#confirm").hide();
                           $("#delete").hide();
                           $("input").prop('disabled', true);
                           $("textarea").prop('disabled', true);
                        }
                    },

                    error: function () {
                        alert("cannot open check_authority.php");
                    }
                                
          });
          
          
         
         $("#upload-btn").click(function(){
             var name = document.getElementById("fileToUpload").files[0].name;
             var form_data = new FormData();
             var ext = name.split('.').pop().toLowerCase();
             if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) === -1) 
             {
                 alert("Invalid Image File");
                 return;
             }
             var oFReader = new FileReader();
             oFReader.readAsDataURL(document.getElementById("fileToUpload").files[0]);
             var f = document.getElementById("fileToUpload").files[0];
             var fsize = f.size||f.fileSize;
             if(fsize > 2000000)
             {
                 alert("Image File Size is very big");
                 return;
             }
             else
             {
                 form_data.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
                 $.ajax({
                     url:"php/upload_image.php",
                     method:"POST",
                     data: form_data,
                     contentType: false,
                     cache: false,
                     processData: false,
                     beforeSend:function(){
                        //alert("uploading"); 
                     },
                     success:function(data){
                         if($.trim(data) === 'success'){
                            alert("Image is uploaded");
                            $("#myModal").modal("hide");
                            var filename = $("#loading-img").attr('name');
                            $("#concertPic").find("img").fadeIn("fast").attr('src','img/'+filename);
                         }
                         else{
                            alert(data);
                         }
                    }
                });
            }
        });
          
        $('#fileToUpload').change(function (event) {
             $("#loading-img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
             $("#loading-img").attr('name',$(this).val().match(/[^\/\\]+$/));
        });
          
          //if access from edit button
          if(window.location.href.indexOf('?') !== -1){
              var id = s['concertid'];
              $.ajax({
                    type: "POST",
                    url: 'php/loadOneConcertInfo.php',
                    async: false,
                    data: {concertid: id},
                    success: function(data){
                        var obj = jQuery.parseJSON(data);
                        $("#concertPic").find("img").attr('src',obj.image);
                        $("#loading-img").attr('src',obj.image);
                        $("#concertname").attr('value', obj.concertname);
                        $("#description").text(obj.description);
                        $("#player").attr('value', obj.player);
						
						//alert(obj.price);
						$("#rangePrice").val(obj.price);
						//$("#rangePrice").slider('refresh');
                        //$("#rangePrice").attr('value', obj.price);
                        $("#txtPrice").attr('value', obj.price);
                        $("#schedule").attr('value', obj.time);   
                    },
                    error: function () {
                        alert("error loading concert info for" + s['concertid']);
                    }
                });
               
                $("#formEditProduct").submit(function(event){
                      event.preventDefault();
                    $.ajax({
                         type: "POST",
                         url: 'php/editConcertInfo.php',
                         data: {concertid: s['concertid'],
                           concertname: $("#concertname").val(),
                           concertPic: $("#concertPic").find("img").attr("src"),
                           description: $("#description").val(),
                           player: $("#player").val(),
                           price: $("#txtPrice").val(),
                           schedule:$("#schedule").val()
                           },
                         success: function(data){
                               alert(data);
                               window.location.href = "index.html";                        
                         },
                         error: function () {
                            alert("fail to connect to server");
                         }
                    });
        
                }); 
                
                $('#delete').click(function(){
                    $.ajax({
                       type: "POST",
                       url: 'php/deleteConcertInfo.php',
                       async: false,
                       data: {concertid: s['concertid']},
                       success: function(data){
                           alert(data);
                        },
                        error: function () {
                           alert("error deleting concert info");
                        }
                    });
                });
            }
            //if access from "Add concert" button
            else{
                $("#formEditProduct").submit(function(event){
                      event.preventDefault();
                    $.ajax({
                         type: "POST",
                         url: 'php/getNewConcertId.php',
                         data: {
                         },
                         success: function(data){
                               var $new_id = data;
                               $.ajax({
                                    type: "POST",
                                    url: 'php/addConcertInfo.php',
                                    data: {concertId: $new_id,
                                           concertname: $("#concertname").val(),
                                           concertPic: $("#concertPic").find("img").attr("src"),
                                           description: $("#description").val(),
                                           player: $("#player").val(),
                                           price: $("#txtPrice").val(),
                                           schedule:$("#schedule").val()
                                        },
                                    success: function(data){
                                           if(data === 'success'){
                                                alert("New concert info has been added");
                                                window.location.href = "index.html";
                                            }
                                            else {
                                                alert(data);                      
                                            }              
             
                                    },
                                    error: function () {
                                        alert("fail to connect to server");
                                    }
                                });
                         },
                         error: function () {
                            alert("fail to connect to server");
                         }
                    });
        
                }); 
            }
        }); 
          
          