var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '1909',
  'X-Auth-Token': '98b2049d72e227ef02f721ade72d3754'
};
$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
  url: baseUrl + '/board',
  method: 'GET',
  success: function(response) {
    setupColumns(response.columns);
  }
});
function setupColumns(columns) {
  columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
      board.createColumn(col);
      setupCards(col, column.cards);
  });
}
function setupCards(col, cards) {
	cards.forEach(function (card) {
    var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
  	col.createCard(card);
  });
}
$('a').on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    },1200, 
      function(){
        window.location.hash = hash;
      }
    );
  }
});