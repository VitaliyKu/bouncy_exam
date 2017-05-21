$(document).ready(function(){

$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
})

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer',
    gutter: 5
  }
});

// filter items on button click
$('.filter-button-group').on( 'click', '.portfolio-menu', function() {
  var filterValue = $(this).attr('data-filter');
  //console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});

});

