import { Publisher, Subjects, OrderCancelEvent } from '@tikbuy/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}