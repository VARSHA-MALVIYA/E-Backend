
export const ContactUsTemplate = (firstName,lastName,email,message) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Us</title>
      <style>
        /* Reset default styles */
        body, h1, p, table {
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
    
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
    
        table th,
        table td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          text-align: left;
        }
    
        .message {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f5f5f5;
        }
    
        @media only screen and (max-width: 600px) {
          .container {
            padding: 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Contact Us Message</h1>
        <p>Dear Company Owner,</p>
        <p>You have received a message from a user via the website contact form. Below are the details:</p>
        <table>
          <tr>
            <th>Field</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>First Name</td>
            <td>${firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>${lastName} </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${email}</td>
          </tr>
        </table>
        <div class="message">
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
        <p>Please respond to the user's inquiry as soon as possible.</p>
        <p>Best regards,</p>
        <p style="font-weight: bold;">EcoGeeks</p>
      </div>
    </body>
    </html>
    
    `
}
