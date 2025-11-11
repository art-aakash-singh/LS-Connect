import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-logs-dashboard',
  imports: [TableModule,DatePipe],
  templateUrl: './logs-dashboard.html',
  styleUrl: './logs-dashboard.scss'
})
export class LogsDashboard {
  caseLogs = [
  {
    "caseId": "CASE-2025-00145",
    "wucid": "US-PHARMA-2025-145678",
    "caseType": "Initial",
    "sourceSystem": "Call Center Intake",
    "seriousness": "SAE",
    "reporterType": "Healthcare Professional",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T09:15:23Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00146",
    "wucid": "US-PHARMA-2025-146789",
    "caseType": "Follow-up",
    "sourceSystem": "Clinical Trial Management System",
    "seriousness": "Non-SAE",
    "reporterType": "Clinical Investigator",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T09:18:12Z",
    "status": "Validation Failed"
  },
  {
    "caseId": "CASE-2025-00147",
    "wucid": "US-PHARMA-2025-147890",
    "caseType": "Initial",
    "sourceSystem": "Spontaneous Reporting Portal",
    "seriousness": "SAE",
    "reporterType": "Consumer",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T09:25:33Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00148",
    "wucid": "US-PHARMA-2025-148901",
    "caseType": "Initial",
    "sourceSystem": "Literature Monitoring",
    "seriousness": "SAE",
    "reporterType": "Literature",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T09:30:15Z",
    "status": "Nullified - Duplicate"
  },
  {
    "caseId": "CASE-2025-00149",
    "wucid": "US-PHARMA-2025-149012",
    "caseType": "Follow-up",
    "sourceSystem": "Call Center Intake",
    "seriousness": "SAE",
    "reporterType": "Healthcare Professional",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T09:45:20Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00150",
    "wucid": "EU-PHARMA-2025-150123",
    "caseType": "Initial",
    "sourceSystem": "Regulatory Authority",
    "seriousness": "Non-SAE",
    "reporterType": "Regulatory Authority",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T10:00:45Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00151",
    "wucid": "US-PHARMA-2025-151234",
    "caseType": "Initial",
    "sourceSystem": "Patient Support Program",
    "seriousness": "Non-SAE",
    "reporterType": "Other Healthcare Professional",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T10:15:30Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00152",
    "wucid": "CA-PHARMA-2025-152345",
    "caseType": "Amendment",
    "sourceSystem": "Clinical Trial Management System",
    "seriousness": "SAE",
    "reporterType": "Clinical Investigator",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T10:30:22Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00153",
    "wucid": "US-PHARMA-2025-153456",
    "caseType": "Initial",
    "sourceSystem": "Medical Information",
    "seriousness": "SAE",
    "reporterType": "Physician",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T10:45:18Z",
    "status": "Processing"
  },
  {
    "caseId": "CASE-2025-00154",
    "wucid": "UK-PHARMA-2025-154567",
    "caseType": "Initial",
    "sourceSystem": "Spontaneous Reporting Portal",
    "seriousness": "Non-SAE",
    "reporterType": "Pharmacist",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T11:00:05Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00155",
    "wucid": "US-PHARMA-2025-155678",
    "caseType": "Follow-up",
    "sourceSystem": "Call Center Intake",
    "seriousness": "SAE",
    "reporterType": "Consumer",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T11:15:42Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00156",
    "wucid": "JP-PHARMA-2025-156789",
    "caseType": "Initial",
    "sourceSystem": "Regulatory Authority",
    "seriousness": "SAE",
    "reporterType": "Regulatory Authority",
    "e2bVersion": "R2",
    "timestamp": "2025-11-08T11:30:28Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00157",
    "wucid": "US-PHARMA-2025-157890",
    "caseType": "Initial",
    "sourceSystem": "Clinical Trial Management System",
    "seriousness": "Non-SAE",
    "reporterType": "Clinical Investigator",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T11:45:15Z",
    "status": "Validation Failed"
  },
  {
    "caseId": "CASE-2025-00158",
    "wucid": "DE-PHARMA-2025-158901",
    "caseType": "Follow-up",
    "sourceSystem": "Literature Monitoring",
    "seriousness": "SAE",
    "reporterType": "Literature",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T12:00:33Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00159",
    "wucid": "US-PHARMA-2025-159012",
    "caseType": "Initial",
    "sourceSystem": "Spontaneous Reporting Portal",
    "seriousness": "SAE",
    "reporterType": "Nurse Practitioner",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T12:15:50Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00160",
    "wucid": "FR-PHARMA-2025-160123",
    "caseType": "Amendment",
    "sourceSystem": "Call Center Intake",
    "seriousness": "SAE",
    "reporterType": "Healthcare Professional",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T12:30:12Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00161",
    "wucid": "US-PHARMA-2025-161234",
    "caseType": "Initial",
    "sourceSystem": "Patient Support Program",
    "seriousness": "Non-SAE",
    "reporterType": "Consumer",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T12:45:27Z",
    "status": "Processing"
  },
  {
    "caseId": "CASE-2025-00162",
    "wucid": "AU-PHARMA-2025-162345",
    "caseType": "Follow-up",
    "sourceSystem": "Clinical Trial Management System",
    "seriousness": "SAE",
    "reporterType": "Clinical Investigator",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T13:00:44Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00163",
    "wucid": "US-PHARMA-2025-163456",
    "caseType": "Nullification",
    "sourceSystem": "Medical Information",
    "seriousness": "Non-SAE",
    "reporterType": "Physician",
    "e2bVersion": "R3",
    "timestamp": "2025-11-08T13:15:08Z",
    "status": "Transmitted to Argus"
  },
  {
    "caseId": "CASE-2025-00164",
    "wucid": "BR-PHARMA-2025-164567",
    "caseType": "Initial",
    "sourceSystem": "Spontaneous Reporting Portal",
    "seriousness": "SAE",
    "reporterType": "Other Healthcare Professional",
    "e2bVersion": "R2",
    "timestamp": "2025-11-08T13:30:55Z",
    "status": "Transmission Failed"
  }
]


}
