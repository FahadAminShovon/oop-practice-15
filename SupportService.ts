import { Support, UpdateTicketType } from './Support';
import { Ticket } from './Ticket';

type SupportTicketType = {
  support: Support;
  ticket: Ticket;
};

export class SupportService {
  openTicket({ support, ticket }: SupportTicketType) {
    support.openTicket(ticket);
  }

  completeTicket({ support, ticket }: SupportTicketType) {
    support.completeTicket(ticket);
  }

  updateTicket({
    support,
    ticket,
    description,
  }: SupportTicketType & UpdateTicketType) {
    support.updateTicket({ ticket, description });
  }
}
