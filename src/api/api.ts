import { ComponentConfig } from '../config/config';
import { FeedbackModel } from './../models/feedback.model';
export class Api {
  static postFeedback(feedback: FeedbackModel): Promise<Response> {
    return fetch(ComponentConfig.BRUIT_IO_API_URL, {
      method: 'POST',
      body: JSON.stringify(feedback)
    });
  }
}
