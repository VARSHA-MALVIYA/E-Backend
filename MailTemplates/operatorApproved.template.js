
export const OperatorApprovedTemplate = (operatorName)  =>
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Operator Approval</title>
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
        <h1>Operator Approval</h1>
        <p style="font-size: 18px;">Congratulations!</p>
        <p>Dear <b> ${operatorName} </b> Your request for the Operator role has been approved. You are now authorized to proceed with your duties as an Operator.</p>
        <p>If you have any questions or need further assistance, please don't hesitate to contact us.</p>
        <p>Best regards,</p>
        <p style="font-weight: bold;">The Management Team</p>
        <p style="text-align: center;">
          <a href="/operator" class="btn">Get Started</a>
        </p>
      </div>
    </body>
    </html>
    
    `
}
