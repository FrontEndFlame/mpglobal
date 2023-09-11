$(document).ready(function() {
  $('#submit-btn').on('input', function(event) {
    event.preventDefault();
    var value = $(this).val();
    $.ajax({
      url: '../form.php',
      type: 'POST',
      data: { input_value: value },
      success: function(response) {
        $('#form').hide();
      },
      error: function(xhr, status, error) {
        console.log('Ошибка при выполнении AJAX-запроса: ' + error);
      }
    });
  });
});