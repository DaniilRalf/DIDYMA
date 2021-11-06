window.addEventListener('DOMContentLoaded', function(){   
    document.querySelector('#faq-1').addEventListener('click', function(){    
        document.querySelector('#faq-description-1').classList.toggle('faq-nav-item-description__active'); 
    });

    document.querySelector('#faq-2').addEventListener('click', function(){    
        document.querySelector('#faq-description-2').classList.toggle('faq-nav-item-description__active'); 
    });

    document.querySelector('#faq-3').addEventListener('click', function(){    
        document.querySelector('#faq-description-3').classList.toggle('faq-nav-item-description__active'); 
    });

    document.querySelector('#faq-4').addEventListener('click', function(){    
        document.querySelector('#faq-description-4').classList.toggle('faq-nav-item-description__active'); 
    });

})