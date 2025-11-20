import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-system-intgration',
  imports: [TableModule,DatePipe,ButtonModule,CommonModule,RouterLink],
  templateUrl: './system-intgration.html',
  styleUrl: './system-intgration.scss'
})
export class SystemIntgration {

  onboardedSystems = [
    {
      name : 'Argus Safety - Production',
      type: 'Argus Safety',
      connectionStatus: 'Active',
      lastSync : '2025-11-08T09:15:23.456Z'
    },
     {
      name : 'Argus Safety - Production',
      type: 'Argus Safety',
      connectionStatus: 'Active',
      lastSync : '2025-11-08T09:15:23.456Z'
    },
     {
      name : 'Argus Safety - Production',
      type: 'Argus Safety',
      connectionStatus: 'Active',
      lastSync : '2025-11-08T09:15:23.456Z'
    }
  ]
}
