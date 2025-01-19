import { Ticket } from './Ticket';
import { SupportService } from './SupportService';
import { TechnicalSupport } from './TechnicalSupport';
import { BillingSupport } from './BillingSupport';
import { GeneralSupport } from './GeneralSupport';

// Create tickets
const ticket1 = new Ticket({ description: 'My ticket1' });
const ticket2 = new Ticket({ description: 'My ticket2' });
const ticket3 = new Ticket({ description: 'My ticket3' });

const supportService = new SupportService();

// Create support services
const technicalSupport = new TechnicalSupport();
const billingSupport = new BillingSupport();
const generalSupport = new GeneralSupport();

// Open tickets
supportService.openTicket({ support: technicalSupport, ticket: ticket1 });
supportService.openTicket({ support: billingSupport, ticket: ticket2 });
supportService.openTicket({ support: generalSupport, ticket: ticket3 });

// Update tickets
supportService.updateTicket({
  support: technicalSupport,
  ticket: ticket1,
  description: 'Technical ticket updated',
});
supportService.updateTicket({
  support: billingSupport,
  ticket: ticket2,
  description: 'Billing ticket updated',
});
supportService.updateTicket({
  support: generalSupport,
  ticket: ticket3,
  description: 'General ticket updated',
});

// Complete tickets
supportService.completeTicket({
  support: technicalSupport,
  ticket: ticket1,
});

supportService.completeTicket({
  support: billingSupport,
  ticket: ticket2,
});

supportService.completeTicket({
  support: generalSupport,
  ticket: ticket3,
});

// Print tickets
const tickets: Ticket[] = [ticket1, ticket2, ticket3];

tickets.forEach((ticket) => {
  console.log(ticket.toString());
});
