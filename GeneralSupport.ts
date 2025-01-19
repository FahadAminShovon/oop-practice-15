import { Support, UpdateTicketType } from './Support';
import { Ticket } from './Ticket';

export class GeneralSupport implements Support {
  openTicket(ticket: Ticket) {
    ticket.status = 'OPEN';
  }

  updateTicket({ ticket, description }: UpdateTicketType) {
    ticket.description = description;
  }

  completeTicket(ticket: Ticket) {
    ticket.status = 'CLOSED';
  }
}
