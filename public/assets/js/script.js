$(function() {

  $('.devour').on('click', function (event) {
    let id = $(this).data('id');
    $.ajax('/api/burgers/' + id, {
      type: 'PUT'
    }).then(() => location.reload());
  });

  $('.create-form').on('submit', (event) => {
    event.preventDefault();
    if ($('#bg').val().trim() !== '') {
      let newBurger = {
        name: $('#bg').val().trim(),
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then((data) => location.reload());
    }
  });

});

$(document).ready(() => {
  let $readyBurgers = $('[data-devoured="false"]');
  $readyBurgers.attr('title', 'Click to Devour!').tooltip(); 
  $readyBurgers.css('cursor', 'pointer');
});
  