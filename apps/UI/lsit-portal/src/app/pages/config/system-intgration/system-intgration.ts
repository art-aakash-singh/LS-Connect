import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-system-intgration',
  imports: [TableModule,DatePipe,ButtonModule,CommonModule,RouterLink,ToggleSwitchModule,FormsModule,RouterModule,TableModule,DialogModule,InputTextModule,TextareaModule,SelectModule],
  templateUrl: './system-intgration.html',
  styleUrl: './system-intgration.scss'
})
export class SystemIntgration {

  displayDialog = false;
  
  onboardedSystems: OnboardedSystem[] = [
    {
      name: 'Argus Production USA',
      type: 'Argus Safety',
      connectionStatus: 'Connected',
      lastSync: new Date('2025-11-19T10:30:00Z')
    },
    {
      name: 'Veeva Vault EU',
      type: 'Veeva Vault Safety',
      connectionStatus: 'Connected',
      lastSync: new Date('2025-11-19T09:15:00Z')
    },
    {
      name: 'LifeSphere APAC',
      type: 'LifeSphere Safety',
      connectionStatus: 'Pending',
      lastSync: new Date('2025-11-18T14:20:00Z')
    }
  ];

  systemTypes: SystemType[] = [
    { label: 'Argus Safety', value: 'Argus Safety' },
    { label: 'Veeva Vault Safety', value: 'Veeva Vault Safety' },
    { label: 'LifeSphere Safety', value: 'LifeSphere Safety' },
    { label: 'ArisGlobal', value: 'ArisGlobal' },
    { label: 'Oracle Empirica', value: 'Oracle Empirica' },
    { label: 'Custom', value: 'Custom' }
  ];

  formData: FormData = {
    name: '',
    systemType: '',
    description: '',
    isActive: true
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialization logic
  }

  showAddSystemDialog(): void {
    this.displayDialog = true;
    this.resetForm();
  }

  onCancel(): void {
    this.displayDialog = false;
    this.resetForm();
  }

  onCreate(): void {
    if (!this.isFormValid()) {
      return;
    }

    // Close dialog
    this.displayDialog = false;

    // Navigate to configuration page with form data
    this.router.navigate(['/pages/system/configuration'], {
      state: {
        systemData: this.formData
      }
    });
  }

  isFormValid(): boolean {
    return !!(this.formData.name?.trim() && this.formData.systemType);
  }

  resetForm(): void {
    this.formData = {
      name: '',
      systemType: '',
      description: '',
      isActive: true
    };
  }
}

interface SystemType {
  label: string;
  value: string;
}

interface OnboardedSystem {
  name: string;
  type: string;
  connectionStatus: 'Connected' | 'Disconnected' | 'Pending';
  lastSync: Date;
}

interface FormData {
  name: string;
  systemType: string;
  description: string;
  isActive: boolean;
}
