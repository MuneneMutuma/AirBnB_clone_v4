$(document).ready(function() {
	var checked = [];
	$('li input[type="checkbox"]').change(function () {
		if ($(this).is(":checked")) {
			checked[$(this).data('id')] = $(this).data('name');
		} else {
			delete checked[$(this).data('id')];
		}
	})

	const values = Object.values(checked);
	const amenitiesString = values.join(', ');
	const head = amenitiesString.slice(0, 30);
	$('#amenities h4').text(head + '...');
	if (values.length === 0) $('#amenites h4').hmtl('&nbsp');
})
