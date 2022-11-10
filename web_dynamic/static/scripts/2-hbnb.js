$(document).ready(function () {
  const checked = [];
  $('li input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      checked[$(this).data('id')] = $(this).data('name');
    } else {
      delete checked[$(this).data('id')];
    }
  });

  const values = Object.values(checked);
  const amenitiesString = values.join(', ');
  const head = amenitiesString.slice(0, 30);
  $('#amenities h4').text(head + '...');
  if (values.length === 0) $('#amenites h4').hmtl('&nbsp');

  $.ajax('http://0.0.0.0:5001/api/v1/status/',
    {
      success: function (data, status) {
        if (status === 'OK') {
          $('div#api_status').addClass('avialable');
        } else {
          $('div#api_status').removeClass('available');
        }
      }
    }
  );
});
