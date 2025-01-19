import { Support } from './Support';
import { Ticket } from './Ticket';

export type UpdateTicketType = {
  ticket: Ticket;
  description: string;
};

export class TechnicalSupport implements Support {
  openTicket(ticket: Ticket) {
    ticket.status = 'OPEN';
  }

  completeTicket(ticket: Ticket) {
    ticket.status = 'CLOSED';
  }

  updateTicket({ ticket, description }: UpdateTicketType) {
    ticket.description = description;
  }
}
