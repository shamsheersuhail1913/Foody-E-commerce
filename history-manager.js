// History Manager for Foody Application
const historyManager = {
    // Generate unique ID
    generateId() {
        return 'FD' + Date.now().toString().slice(-6);
    },

    // Add order to history
    addOrder(orderData) {
        const orders = this.getOrderHistory();
        const orderId = this.generateId();
        const order = {
            id: orderId,
            ...orderData,
            date: new Date().toISOString(),
            status: 'Delivered'
        };
        orders.unshift(order);
        localStorage.setItem('orderHistory', JSON.stringify(orders));
        return orderId;
    },

    // Get order history
    getOrderHistory() {
        return JSON.parse(localStorage.getItem('orderHistory')) || [];
    },

    // Add booking to history
    addBooking(bookingData) {
        const bookings = this.getBookingHistory();
        const bookingId = this.generateId();
        const booking = {
            id: bookingId,
            ...bookingData,
            date: new Date().toISOString(),
            status: 'Confirmed'
        };
        bookings.unshift(booking);
        localStorage.setItem('bookingHistory', JSON.stringify(bookings));
        return bookingId;
    },

    // Get booking history
    getBookingHistory() {
        return JSON.parse(localStorage.getItem('bookingHistory')) || [];
    },

    // Add table booking to history (legacy method)
    addTableBooking(bookingData) {
        return this.addBooking(bookingData);
    },

    // Get table booking history (legacy method)
    getTableHistory() {
        return this.getBookingHistory();
    }
};