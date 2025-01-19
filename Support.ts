import { Ticket } from './Ticket';

export type UpdateTicketType = {
  ticket: Ticket;
  description: string;
};

export interface Support {
  openTicket: (ticket: Ticket) => void;
  completeTicket: (ticket: Ticket) => void;
  updateTicket: (obj: UpdateTicketType) => void;
}
