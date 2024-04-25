export const OrderBookedTemplate = (productName,productQuantity,greenPoints) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
      <style>
        /* Reset default styles */
        body, h1, p {
          margin: 0;
          padding: 0;
        }
    
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
        }
    
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
          color: #333333;
          text-align: center;
          margin-bottom: 20px;
        }
    
        p {
          color: #555555;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 20px;
        }
    
        .order-details {
          width: 100%;
          margin-bottom: 30px;
          border-collapse: collapse;
        }
    
        .order-details th,
        .order-details td {
          border-bottom: 1px solid #ddd;
          padding: 10px 0;
          text-align: left;
        }
    
        .total-amount {
          margin-top: 20px;
          text-align: right;
          font-size: 18px;
          color: #333333;
        }
    
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
    
        .btn:hover {
          background-color: #0056b3;
        }
    
        @media only screen and (max-width: 600px) {
          .container {
            padding: 10px;
          }
          .btn {
            display: block;
            width: 100%;
            text-align: center;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Order Confirmation</h1>
        <p style="font-size: 18px;">Thank you for your order!</p>
        <table class="order-details">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Green Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${productName}</td>
              <td> ${productQuantity} </td>
              <td>${greenPoints}</td>
            </tr>
           
          </tbody>
        </table>
        <p class="total-amount">Total: ${greenPoints} </p>
        <p>Your order is confirmed and will be shipped soon. You will receive a shipping confirmation email with tracking information once your order has been dispatched.</p>
        <p>If you have any questions about your order, feel free to contact us.</p>
        <p>Best regards,</p>
        <p style="font-weight: bold;">EcoGeeks</p>
        <p style="text-align: center;">
          <a href="/login" class="btn">View Order Details</a>
        </p>
      </div>
    </body>
    </html>
    
    `
}