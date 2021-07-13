// Get Ticket quantity
function getTicketQuantity(id) {
	const ticketQuantity = document.getElementById(id);
	const ticketConvert = parseInt(ticketQuantity.value);
	return ticketConvert;
}

// Get Ticket Price
function calculateTicketPrice(ticketClass, isIncrease) {
	const convertQuantity = getTicketQuantity(ticketClass + "-ticket-quantity");

	let totalTicket = convertQuantity;

	if (isIncrease == true) {
		totalTicket = convertQuantity + 1;
	} else if (isIncrease == false && convertQuantity > 0) {
		totalTicket = convertQuantity - 1;
	}

	document.getElementById(ticketClass + "-ticket-quantity").value = totalTicket;
	totalCalculation();
}
