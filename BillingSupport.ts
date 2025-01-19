import { Support } from './Support';
import { UpdateTicketType } from './TechnicalSupport';
import { Ticket } from './Ticket';

export class BillingSupport implements Support {
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
