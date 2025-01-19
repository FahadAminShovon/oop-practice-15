import { Ticket } from './Ticket';

export interface Support {
  openTicket: (ticket: Ticket) => void;
  completeTicket: (ticketId: Ticket) => void;
  updateTicket: (obj: { ticket: Ticket; description: string }) => void;
}
