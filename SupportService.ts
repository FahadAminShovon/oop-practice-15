import { Support } from './Support';
import { Ticket } from './Ticket';

type SupportTicketType = {
  support: Support;
  ticket: Ticket;
};

type UpdateTicketType = {
  description: string;
} & SupportTicketType;

export class SupportService {
  openTicket({ support, ticket }: SupportTicketType) {
    support.openTicket(ticket);
  }

  completeTicket({ support, ticket }: SupportTicketType) {
    support.completeTicket(ticket);
  }

  updateTicket({ support, ticket, description }: UpdateTicketType) {
    support.updateTicket({ ticket, description });
  }
}
