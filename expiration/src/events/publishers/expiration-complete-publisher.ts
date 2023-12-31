import { Publisher, Subjects, ExpirationCompleteEvent } from '@tikbuy/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}