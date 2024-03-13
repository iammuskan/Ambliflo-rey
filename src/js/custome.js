$(document).ready(function() {
   

        // message toggle
        
            $('.notification-box > ul > li > a.user-toggle').click(function(event){
              event.preventDefault();
              const subItems = $(this).next();
              subItems.slideToggle(300);
              // Hide other sub-items if shown
              $('.sub-items').not(subItems).slideUp(300);
            });
          
        $( ".dropdown-toggle" ).click(function() {
            $( ".dropdown-menu" ).toggle(300);
        });
    
     /*----right sidebar--*/
     $(".icon-button").click(function(){
        $('.site-info-header').toggleClass('hide');
            $('.icon-button').toggleClass('active');
            $('.righ-sidebar').toggleClass('active');
            return false;
        });

        //
        $(".toggle-left-sidebar").click(function(){
            $('.main-wrapper').toggleClass('sidebar-open');
            $(this).toggleClass('active');
            return false;

        });
        
    // menu dropdown
    const toggleSubMenus = document.querySelectorAll('.toggle-sub-menu');
    const menuItems = document.querySelectorAll('.has-submenu');
    
    toggleSubMenus.forEach(toggleSubMenu => {
        toggleSubMenu.addEventListener('click', () => {
            const parentListItem = toggleSubMenu.parentElement;
            const subMenu = parentListItem.querySelector('.nav-dropdown');
            
            // Close all other submenus
            document.querySelectorAll('.nav-dropdown').forEach(item => {
                if (item !== subMenu) {
                    item.classList.remove('show');
                }
            });
            
            subMenu.classList.toggle('show');
        });
    });
    
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            // Remove 'active' class from all menu items
            menuItems.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked menu item
            menuItem.classList.add('active');
        });
    });
      // Data for the chart
      var data = {
        labels: ["M8 (B001) Oasis As-Is", "M7 (B001) Scoping Quality Audit", "M6 (B001) SDU Quality Control", "M5 (B001) Create As-Is Digital Twin", "M4(B001) Site Document Collection", " M3 (B001) Process Drone Media", "M2 (B001) Upload Site Capture Data to Repository", "M1 (B001) Drone & Ground Survey" ],
        datasets: [{
            label: 'Completed',
            data: [750, 725, 700, 675, 650, 625, 600, 575],
            backgroundColor: '#1B97B9',
            barThickness: 12 // Set bar height to 12 pixels
        }, {
            label: 'In Progress',
            data: [ 35, 35, 35, 31, 32, 35, 40, 100   ],
            backgroundColor: '#00B919',
            barThickness: 12 // Set bar height to 12 pixels
        }, {
            label: 'Not Started',
            data: [286, 371, 401, 429, 455, 476, 501, 526],
            backgroundColor: '#D4D4D4',
            barThickness: 12 // Set bar height to 12 pixels
        }]
    };
    
    // Configuration options
    var options = {
        scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
        }
    };
    
    // Get the canvas element
    var ctx = document.getElementById('projectProgressChart').getContext('2d');
    
    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: options
    });
    /*-----*/
    
      }(jQuery));