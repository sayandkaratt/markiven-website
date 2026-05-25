function handleBooking(packageName) {
            // *** IMPORTANT: CHANGE THIS NUMBER ***
            // Enter your business WhatsApp number here. 
            // Include country code (e.g., 91 for India) but do NOT include the '+' symbol.
            const phoneNumber = "918138848643"; 
            
            // Draft the pre-filled message
            const rawMessage = `Hi Markiven team! I'm interested in booking the *${packageName}*. Can we discuss the next steps?`;
            
            // Encode it so it works safely in a URL
            const encodedMessage = encodeURIComponent(rawMessage);
            
            // Create the final WhatsApp link
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
        }