
export const AppointmentMailTemplate = (appointmentData)  =>
{
    return `
    <div>
        <p>Here are some Information related to your Appointment.</p>
        <br/>
        <br/>

        <p>Ticket Number : ${appointmentData.ticket} </p>
        <p>Center Name : ${appointmentData.centerName} </p>
        <p>Center ID :  ${appointmentData.centerId} </p>
        <p>Center Address : ${appointmentData.centerAddress} </p>

        <p> You can find more details in your Profile Section </p>
        <br/>
        <br/>
        

        <p>Regards</p>
        <p>EcoGeeks</p>
    </div>
    `
}
