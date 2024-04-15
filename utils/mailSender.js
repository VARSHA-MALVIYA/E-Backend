import nodemailer from 'nodemailer'

export const sendEmail = async(to,from,subject,html) => {
    try {

        // Create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service:'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'vijayrathore2003@gmail.com', // Your email
                pass: 'iokt jmqp iswb gdxs' // Your password
            }
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: from, // Sender address
            to: to, // List of receivers
            subject: subject , // Subject line
            html: html
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}



