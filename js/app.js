$(document).ready(function(){
	//add list item on enter!
	$('#list-name').keyup(function(event){
		if(event.keyCode == 13){
			event.preventDefault();
			$('.add-button').click();
		};
	});
	$('.add-button').click(function(){
		var itemValue = document.getElementById('list-name');
		var listItem = itemValue.value;
		event.preventDefault();

		if(!$.trim($('#list-name').val())){
			alert('please enter valid item in inputbox');
		}else{
			$('<li class="item"></li>').prependTo('#shopping-list').html('<img class="cross" src = "images/tick.png"><span>' + listItem + '</span><img class="remove" src="images/delete.png">');
			
		document.getElementById('list-name').value = '';
		};
	});
	$('#shopping-list').on('click', '.remove', function(e){
		e.preventDefault();
		$(this).closest('li').remove();
	});
	$('#shopping-list').on('click', 'span', function(e){
		e.preventDefault();
		$(this).closest('li').toggleClass('highlight');
	});
	$('#shopping-list').on('click', '.cross', function(){
		$(this).parent().find('span').toggleClass('crossed');
	});
	
	$('#shopping-list').sortable();
	$('#shopping-list').disableSelection();
});