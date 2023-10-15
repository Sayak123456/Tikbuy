import { Subjects, Publisher, PaymentCreatedEvent } from '@tikbuy/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}