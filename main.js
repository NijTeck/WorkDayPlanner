$(function() {
    let d = new Date()

    let year = d.getFullYear()
    let month = d.getMonth()+1;
    let day = d.getDate()

    let totalDays = new Date(year, month, 0).getDate()

    let output =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' + year

    $('.date').text(`${output}`)

    $( ".planNow" ).click(function(e) {

        let row = 0, length = 0, column = 0
        let timeObj = {
            "8 AM" : 4,
            "9 AM" : 5,
            "10 AM" : 6,
            "11 AM" : 7,
            "12 PM" : 8,
            "1 PM" : 9,
            "2 PM" : 10,
            "3 PM" : 11,
            "4 PM" : 12,
            "5 PM" : 13,

        }


        //column = e.target.className.match(/\d+/)[0]

        $('.schedule-container').toggle()

        $('.schedule-container--close').click(function(){
            $('.schedule-container').css('display', 'none')
        })
        
        $('.schedule-container--form').submit(function(e){
            e.preventDefault()
           
            row = timeObj[$( "#startingTime" ).val()]
            length = (timeObj[$( "#endingTime" ).val()]) - (timeObj[$( "#startingTime" ).val()])
            $('.content-container').append(`<div class='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color: yellow;'>Reservation</div>` ) 
            
            jQuery(function($){
                $('#planNow').one('click', function(){
                    console.log("planNow");
                    var r=$('<input/>').attr({
                        type: "button",
                        id: "field",
                        value: 'new'
                    });
                    $("schedule-container").append(r);   
                })
            })
        
            $('.schedule-container--form')[0].reset();
            $('.schedule-container--form').off();
            $('.schedule-container').toggle();
        })
      });
  });