// Get Ticket quantity
function getTicketQuantity(id) {
	const ticketQuantity = document.getElementById(id);
	const ticketConvert = parseInt(ticketQuantity.value);
	return ticketConvert;
}
