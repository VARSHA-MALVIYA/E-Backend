import shortid from 'shortid';

export const generateTicketNumber = () => {
    return shortid.generate();
}