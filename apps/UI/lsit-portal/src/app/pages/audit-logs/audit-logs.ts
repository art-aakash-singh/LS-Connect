import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-audit-logs',
  imports: [TableModule,DatePipe],
  templateUrl: './audit-logs.html',
  styleUrl: './audit-logs.scss'
})
export class AuditLogs {
  auditLogs = [
  {
    "auditId": "AUD-20251108-001",
    "timestamp": "2025-11-08T09:15:23.456Z",
    "userId": "system.intake.service",
    "actionType": "CASE_RECEIVED",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00145",
    "actionResult": "SUCCESS",
    "ipAddress": "10.50.1.15",
    "details": "New initial SAE case received from Call Center Intake system"
  },
  {
    "auditId": "AUD-20251108-002",
    "timestamp": "2025-11-08T09:15:28.789Z",
    "userId": "system.validation.service",
    "actionType": "VALIDATION_COMPLETED",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00145",
    "actionResult": "SUCCESS",
    "ipAddress": "10.50.1.16",
    "details": "E2B R3 validation passed - 98% completeness score"
  },
  {
    "auditId": "AUD-20251108-003",
    "timestamp": "2025-11-08T09:15:35.123Z",
    "userId": "system.transmission.service",
    "actionType": "ARGUS_TRANSMISSION",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00145",
    "actionResult": "SUCCESS",
    "ipAddress": "10.50.1.17",
    "details": "Case successfully transmitted to Argus - ACK received"
  },
  {
    "auditId": "AUD-20251108-004",
    "timestamp": "2025-11-08T09:18:45.456Z",
    "userId": "john.doe@pharma.com",
    "actionType": "USER_LOGIN",
    "entityType": "USER_SESSION",
    "entityId": "SESSION-20251108-JD01",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.105",
    "details": "User logged in via web interface"
  },
  {
    "auditId": "AUD-20251108-005",
    "timestamp": "2025-11-08T09:20:12.789Z",
    "userId": "john.doe@pharma.com",
    "actionType": "CASE_VIEWED",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00146",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.105",
    "details": "User accessed case details page"
  },
  {
    "auditId": "AUD-20251108-006",
    "timestamp": "2025-11-08T09:22:30.123Z",
    "userId": "john.doe@pharma.com",
    "actionType": "CASE_UPDATED",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00146",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.105",
    "details": "Updated patient birth date - Field E.2.1.1",
    "oldValue": "null",
    "newValue": "1985-03-15"
  },
  {
    "auditId": "AUD-20251108-007",
    "timestamp": "2025-11-08T09:23:15.456Z",
    "userId": "john.doe@pharma.com",
    "actionType": "REPROCESSING_TRIGGERED",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00146",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.105",
    "details": "Manual reprocessing initiated after data correction"
  },
  {
    "auditId": "AUD-20251108-008",
    "timestamp": "2025-11-08T09:25:40.789Z",
    "userId": "system.transmission.service",
    "actionType": "ARGUS_TRANSMISSION",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00147",
    "actionResult": "FAILED",
    "ipAddress": "10.50.1.17",
    "details": "Transmission failed - Network timeout after 30 seconds"
  },
  {
    "auditId": "AUD-20251108-009",
    "timestamp": "2025-11-08T09:26:00.123Z",
    "userId": "system.transmission.service",
    "actionType": "RETRY_TRANSMISSION",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00147",
    "actionResult": "SUCCESS",
    "ipAddress": "10.50.1.17",
    "details": "Retry attempt 1 succeeded - Case transmitted successfully"
  },
  {
    "auditId": "AUD-20251108-010",
    "timestamp": "2025-11-08T09:30:22.456Z",
    "userId": "jane.smith@pharma.com",
    "actionType": "USER_LOGIN",
    "entityType": "USER_SESSION",
    "entityId": "SESSION-20251108-JS01",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.112",
    "details": "User logged in via web interface"
  },
  {
    "auditId": "AUD-20251108-011",
    "timestamp": "2025-11-08T09:35:18.789Z",
    "userId": "jane.smith@pharma.com",
    "actionType": "DUPLICATE_CHECK_PERFORMED",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00148",
    "actionResult": "WARNING",
    "ipAddress": "192.168.1.112",
    "details": "Potential duplicate detected - Similar to CASE-2025-00132"
  },
  {
    "auditId": "AUD-20251108-012",
    "timestamp": "2025-11-08T09:38:45.123Z",
    "userId": "jane.smith@pharma.com",
    "actionType": "CASE_NULLIFIED",
    "entityType": "ICSR_CASE",
    "entityId": "CASE-2025-00148",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.112",
    "details": "Case nullified - Confirmed duplicate of CASE-2025-00132"
  },
  {
    "auditId": "AUD-20251108-013",
    "timestamp": "2025-11-08T10:15:30.456Z",
    "userId": "admin@pharma.com",
    "actionType": "CONFIG_UPDATED",
    "entityType": "SYSTEM_CONFIG",
    "entityId": "CONFIG-ARGUS-ENDPOINT",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.200",
    "details": "Updated Argus endpoint URL",
    "oldValue": "https://argus-test.pharma.com/api",
    "newValue": "https://argus-prod.pharma.com/api"
  },
  {
    "auditId": "AUD-20251108-014",
    "timestamp": "2025-11-08T10:16:05.789Z",
    "userId": "admin@pharma.com",
    "actionType": "CONFIG_UPDATED",
    "entityType": "SYSTEM_CONFIG",
    "entityId": "CONFIG-RETRY-ATTEMPTS",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.200",
    "details": "Updated maximum retry attempts",
    "oldValue": "3",
    "newValue": "5"
  },
  {
    "auditId": "AUD-20251108-015",
    "timestamp": "2025-11-08T11:00:45.123Z",
    "userId": "system.scheduler.service",
    "actionType": "BATCH_RECONCILIATION_STARTED",
    "entityType": "SYSTEM_PROCESS",
    "entityId": "RECON-20251108-01",
    "actionResult": "SUCCESS",
    "ipAddress": "10.50.1.20",
    "details": "Daily reconciliation job started - Processing 47 cases"
  },
  {
    "auditId": "AUD-20251108-016",
    "timestamp": "2025-11-08T11:15:22.456Z",
    "userId": "system.scheduler.service",
    "actionType": "BATCH_RECONCILIATION_COMPLETED",
    "entityType": "SYSTEM_PROCESS",
    "entityId": "RECON-20251108-01",
    "actionResult": "SUCCESS",
    "ipAddress": "10.50.1.20",
    "details": "Reconciliation completed - 45 matched, 2 discrepancies found"
  },
  {
    "auditId": "AUD-20251108-017",
    "timestamp": "2025-11-08T11:45:33.789Z",
    "userId": "admin@pharma.com",
    "actionType": "USER_CREATED",
    "entityType": "USER_ACCOUNT",
    "entityId": "USER-20251108-001",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.200",
    "details": "New user account created - mike.johnson@pharma.com"
  },
  {
    "auditId": "AUD-20251108-018",
    "timestamp": "2025-11-08T12:10:15.123Z",
    "userId": "admin@pharma.com",
    "actionType": "PERMISSION_UPDATED",
    "entityType": "USER_ACCOUNT",
    "entityId": "USER-20251108-001",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.200",
    "details": "Assigned role: Case Reviewer",
    "oldValue": "null",
    "newValue": "CASE_REVIEWER"
  },
  {
    "auditId": "AUD-20251108-019",
    "timestamp": "2025-11-08T13:20:40.456Z",
    "userId": "john.doe@pharma.com",
    "actionType": "EXPORT_DATA",
    "entityType": "REPORT",
    "entityId": "REPORT-20251108-001",
    "actionResult": "SUCCESS",
    "ipAddress": "192.168.1.105",
    "details": "Exported case processing report - 150 records (Nov 1-8)"
  },
]

}
