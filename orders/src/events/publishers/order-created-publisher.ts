import { Publisher, Subjects, OrderCreatedEvent } from '@tikbuy/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}