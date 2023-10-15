import { Publisher, Subjects, TicketCreatedEvent } from '@tikbuy/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}