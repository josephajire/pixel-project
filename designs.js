//@description Declaration of  color, height and width variables
var color, height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e) {
	e.preventDefault();
	$('tr').remove();

// @description These get the values of height and width
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();

//@description This calls makeGrid()
	makeGrid(height, width);

});

//@description The function for makeGrid starts here
function makeGrid(row, cols) {

	for (var i = 1; i <= row; i++) {
			$('#pixelCanvas').append('<tr></tr>');

			for (var j = 0; j < cols; j++) {
				$('tr').last().append('<td></td>');
			}
		}

	$('td').click(function() {
//@description This section gets value and makes color paint 
		color = $('#colorPicker').val();

		if ($(this).attr('style')) {
				$(this).removeAttr('style');
			} else {
				$(this).css('background-color', color);
			}
	});
}

