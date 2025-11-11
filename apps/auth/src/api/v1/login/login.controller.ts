import { Controller, Get, Req } from '@nestjs/common';
import { TLSSocket } from 'tls';
import type { Request } from 'express';

@Controller({ version: '1' })
export class LoginController {
  constructor() {}

  @Get('mtls-check')
  async getCertInfo(@Req() req: Request): Promise<any> {
    return { sucess: true };
    const socket = req.socket as TLSSocket;
    const cert = socket.getPeerCertificate();

    if (!socket.authorized) {
      return {
        status: 'Unauthorized',
        message: socket.authorizationError || 'Client certificate missing or invalid',
      };
    }

    if (!cert || Object.keys(cert).length === 0) {
      return { status: 'No certificate provided by client' };
    }

    return {
      status: 'mTLS connection established',
      subject: cert.subject,
      issuer: cert.issuer,
      valid_from: cert.valid_from,
      valid_to: cert.valid_to,
    };
  }
}
