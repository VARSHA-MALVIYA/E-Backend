
export const AppointmentMailTemplate = (Receiver,Date,Time,Address,CenterName,TicketNumber)  =>
{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Confirmation</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333;
      text-align: center;
    }
    p {
      color: #666;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-bottom: 10px;
    }
    .highlight {
      background-color: #ffc107;
      color: #333;
      font-weight: bold;
      text-align: center;
      padding: 20px;
      border-radius: 8px;
      font-size: 20px;
      margin-top: 20px;
    }
    .button {
      display: block;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      padding: 14px 24px;
      border-radius: 30px;
      text-align: center;
      margin: 30px auto 0;
      width: 50%;
      max-width: 200px;
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Appointment Confirmation</h1>
    <p>Dear ${Receiver},</p>
    <p>We are pleased to confirm your appointment with us. Below are the details:</p>
    <ul>
      <li><strong>Date:</strong> ${Date} </li>
      <li><strong>Time:</strong> ${Time} </li>
      <li><strong>Location:</strong> ${Address} </li>
      <li><strong>Consultant:</strong> ${CenterName} </li>
      <li><strong>Ticket Number:</strong></li>
    </ul>
    <div class="highlight"> ${TicketNumber} </div>
    <p>If you have any questions, please feel free to contact us.</p>
    <p>Thank you!</p>
    <a href="" class="button">Visit Website</a>
  </div>
</body>
</html>

    `
}
