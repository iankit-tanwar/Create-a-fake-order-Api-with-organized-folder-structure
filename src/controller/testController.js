let testController = (req,res)=>{

   // Generate a random boolean condition (true or false)
const randomCondition = Math.random() < 0.5;

const randomOrderId = Math.floor(Math.random() * 5001); // Generates a random integer from 0 to 5000

// Generate a random payment method ("cash" or "wallet")
const paymentMethods = ["cash", "wallet"];
const randomPaymentMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];

const randomTotalPaid = Math.floor(Math.random() * 20); 

if (randomCondition) {
    res.status(200).json({
        order_id : randomOrderId.toString(),
        arrives_at_utc:"",
        paid_with:randomPaymentMethod,
        total_paid:randomTotalPaid+'.99'
    });
} else {
    res.status(503).send();
}

  
}

module.exports = testController;