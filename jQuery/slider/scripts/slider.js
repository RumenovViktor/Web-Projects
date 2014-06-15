(function() {
    $(document).ready(function(){
        
       var $images = $('.content'), // select all images but the first one
            counter = 0,
           $nextImg = $('#next'),
           $previuosImg = $('#previous');
        
        // Functionality for next pictures
        $nextImg.on('click', function(){  
            counter++;
            
            if (counter - 1 >= 0) {
                $($images[counter - 1]).fadeOut('slow');
            }
            
            if(counter >= $images.length) {
                $($images[$images.length - 1]).fadeOut('slow');
                counter = 0;
            }
            
            $($images[counter]).toggle('slide');
        }); 
        
        // Functionality for viewing previous pictures
        $previuosImg.on('click', function(){  
            counter--;
            
            if (counter + 1 < $images.length) {
                $($images[counter + 1]).toggle('slide');
            }
            
            if(counter < 0) {
                $($images[$images.length - 1]).fadeOut('slow');
                counter = $images.length - 1;
            }
            
            $($images[counter]).fadeIn('slow');
        });
    });
})();