import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { LogsDashboard } from './logs-dashboard/logs-dashboard';
import { AuditLogs } from './audit-logs/audit-logs';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'case/logs', component: LogsDashboard },
    { path: 'audit/logs', component: AuditLogs },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
