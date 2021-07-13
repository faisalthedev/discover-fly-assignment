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

// Total Calculation
function totalCalculation() {
	const firstClassConvert = getTicketQuantity("firstClass-ticket-quantity");
	const economyClassConvert = getTicketQuantity("economyClass-ticket-quantity");

	const ticketPrice = firstClassConvert * 150 + economyClassConvert * 100;
	document.getElementById("subTotal").innerText = ticketPrice;

	const totalVat = Math.round(ticketPrice * 0.1);
	document.getElementById("vat").innerText = totalVat;

	const totalPrice = ticketPrice + totalVat;
	document.getElementById("total").innerText = totalPrice;
}
