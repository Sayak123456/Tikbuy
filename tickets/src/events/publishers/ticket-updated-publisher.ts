import { Publisher, Subjects, TicketUpdatedEvent } from '@tikbuy/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}