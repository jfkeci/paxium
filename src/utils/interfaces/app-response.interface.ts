import { HttpStatus } from '@nestjs/common';

export interface IAppResponse {
  /**
   * Response context
   * - 'auth' | 'user' | 'game'...
   * */
  type: string;

  /**
   * Response code
   * - 200, 201, 404 ...
   * */
  code: HttpStatus;

  /**
   * Response title by code
   * - Ok, Created, NotFound ...
   * */
  title?: string;

  /**
   * Optional custom message
   * - Used for error messages
   * */
  message?: string;

  /**
   * Optional custom data
   * - Used for response data
   * */
  data?: any;

  /**
   * Exception stack
   * - Used for error messages
   * */
  stack?: string[] | undefined;
}
