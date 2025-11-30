// Sample data populator for demonstration
function populateSampleData() {
    // Sample order history
    const sampleOrders = [
        {
            id: 'ID' + Date.now().toString(36) + 'abc123',
            items: [
                { name: 'Paneer Tikka', price: 220, quantity: 2 },
                { name: 'Chicken 65', price: 260, quantity: 1 },
                { name: 'Mango Lassi', price: 100, quantity: 2 }
            ],
            total: 800,
            status: 'Delivered',
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000
        },
        {
            id: 'ID' + Date.now().toString(36) + 'def456',
            items: [
                { name: 'Butter Chicken', price: 300, quantity: 1 },
                { name: 'Veg Biryani', price: 250, quantity: 1 },
                { name: 'Rasgulla', price: 90, quantity: 3 }
            ],
            total: 820,
            status: 'Delivered',
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            timestamp: Date.now() - 5 * 24 * 60 * 60 * 1000
        },
        {
            id: 'ID' + Date.now().toString(36) + 'ghi789',
            items: [
                { name: 'Fish Curry', price: 340, quantity: 1 },
                { name: 'Jeera Aloo', price: 150, quantity: 1 }
            ],
            total: 490,
            status: 'Cancelled',
            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            timestamp: Date.now() - 7 * 24 * 60 * 60 * 1000
        }
    ];

    // Sample table bookings
    const sampleBookings = [
        {
            id: 'ID' + Date.now().toString(36) + 'tbl001',
            name: 'John Doe',
            phone: '+91 9876543210',
            email: 'john.doe@email.com',
            guests: '4',
            date: '2024-01-20',
            time: '7:30 PM',
            restaurant: 'BlueMoon Restaurant',
            tableNumber: 'T04',
            specialRequests: 'Window seat preferred',
            status: 'Confirmed',
            bookingDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000
        },
        {
            id: 'ID' + Date.now().toString(36) + 'tbl002',
            name: 'Sarah Smith',
            phone: '+91 8765432109',
            email: 'sarah.smith@email.com',
            guests: '2',
            date: '2024-01-15',
            time: '1:00 PM',
            restaurant: 'Pista House',
            tableNumber: 'T02',
            specialRequests: 'Anniversary celebration',
            status: 'Confirmed',
            bookingDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
            timestamp: Date.now() - 8 * 24 * 60 * 60 * 1000
        },
        {
            id: 'ID' + Date.now().toString(36) + 'tbl003',
            name: 'Mike Johnson',
            phone: '+91 7654321098',
            email: 'mike.johnson@email.com',
            guests: '6',
            date: '2024-01-10',
            time: '8:00 PM',
            restaurant: 'Khana Khajana',
            tableNumber: 'T06',
            specialRequests: '',
            status: 'Cancelled',
            bookingDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
            timestamp: Date.now() - 12 * 24 * 60 * 60 * 1000
        }
    ];

    // Store in localStorage
    localStorage.setItem('orderHistory', JSON.stringify(sampleOrders));
    localStorage.setItem('bookingHistory', JSON.stringify(sampleBookings));
    
    console.log('Sample data populated successfully!');
    alert('Sample history data has been added! You can now view the history pages.');
}

// Auto-populate if no data exists (with error handling for file:// protocol)
try {
    if (!localStorage.getItem('orderHistory') || !localStorage.getItem('bookingHistory')) {
        populateSampleData();
    }
} catch (e) {
    // localStorage not available (e.g., file:// protocol), skip auto-population
    console.log('localStorage not available, skipping sample data population');
}
