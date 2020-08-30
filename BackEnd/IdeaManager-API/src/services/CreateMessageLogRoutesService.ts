import { Request, Response } from "express";

class CreateMessageLogRoutesService {
  private request: Request;
  private response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  public execute(){
      let {url,method} = this.request

      let msg = `[${method.toUpperCase()} - ${url}]`

      return msg
  }
}

export default CreateMessageLogRoutesService