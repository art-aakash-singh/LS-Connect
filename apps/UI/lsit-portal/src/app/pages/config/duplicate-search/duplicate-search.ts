import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-duplicate-search',
  imports: [CommonModule,ToggleSwitchModule,SelectModule,FormsModule,TableModule,InputNumberModule,TextareaModule,ButtonModule,FileUploadModule],
  templateUrl: './duplicate-search.html',
  styleUrl: './duplicate-search.scss'
})
export class DuplicateSearch {
integrationId: string | null = null;
  isDuplicateCheckEnabled = true;


  // onDuplicateCheckEnabledChange(enabled: boolean): void {
  //   this.isDuplicateCheckEnabled = enabled;
  // }

  onResetToDefault(): void {
    // Implement reset logic
  }

  onExportConfiguration(): void {
    // Implement export logic
  }

  onSaveConfiguration(): void {
    // Implement save logic
  }

    fields = [
    { 
      name: "Worldwide Unique Case ID (WUCID)", 
      e2b: "A.1.10", 
      defaultOn: true, 
      weight: 10, 
      matching: "exact" 
    },
    { 
      name: "Patient Initials", 
      e2b: "B.1.1", 
      defaultOn: true, 
      weight: 7, 
      matching: "exact" 
    },
    { 
      name: "Patient Date of Birth", 
      e2b: "B.1.2.2", 
      defaultOn: true, 
      weight: 9, 
      matching: "exact" 
    },
    { 
      name: "Patient Sex", 
      e2b: "B.1.5", 
      defaultOn: true, 
      weight: 5, 
      matching: "exact" 
    },
    { 
      name: "Reaction Term", 
      e2b: "B.2.i.0", 
      defaultOn: true, 
      weight: 8, 
      matching: "fuzzy" 
    },
    { 
      name: "Suspect Product Name", 
      e2b: "G.k.2.2", 
      defaultOn: true, 
      weight: 9, 
      matching: "fuzzy" 
    },
    { 
      name: "Reaction Onset Date", 
      e2b: "B.2.i.4", 
      defaultOn: true, 
      weight: 7, 
      matching: "exact" 
    },
    { 
      name: "Reporter Country", 
      e2b: "C.1.8.1", 
      defaultOn: true, 
      weight: 4, 
      matching: "exact" 
    },
    { 
      name: "Reporter Type", 
      e2b: "C.2.r.1", 
      defaultOn: false, 
      weight: 3, 
      matching: "exact" 
    },
    { 
      name: "Literature Reference", 
      e2b: "C.4.r.1", 
      defaultOn: true, 
      weight: 8, 
      matching: "partial" 
    }
  ];

  matchingTypes = [
    { label: 'Exact Match', value: 'exact' },
    { label: 'Fuzzy Match', value: 'fuzzy' },
    { label: 'Partial Match', value: 'partial' }
  ];

  ngOnInit(): void {
    // Initialization logic if needed
  }

  getWeightColorClass(weight: number): string {
    if (weight >= 8) return 'text-destructive';
    if (weight >= 5) return 'text-warning';
    return 'text-success';
  }

  getWeightLabel(weight: number): string {
    if (weight >= 8) return 'High';
    if (weight >= 5) return 'Medium';
    return 'Low';
  }

  onFieldToggle(index: number, event: any): void {
    console.log(`Field ${index} toggled:`, event.checked);
    // Implement toggle logic
  }

  onMatchingTypeChange(index: number, event: any): void {
    console.log(`Field ${index} matching type changed:`, event.value);
    // Implement matching type change logic
  }

  onFieldSettings(index: number): void {
    console.log(`Opening settings for field ${index}`);
    // Implement settings dialog logic
  }

  useCustomSQL = false;
  queryTimeout = 30;
  sqlQuery = `SELECT case_id, similarity_score 
FROM cases 
WHERE patient_dob = @patient_dob 
  AND patient_initials = @patient_initials
  AND reaction_term LIKE @reaction_term
  AND created_date >= DATE_SUB(NOW(), INTERVAL @lookback_days DAY)
ORDER BY similarity_score DESC`;


  onCustomSQLToggle(event: any): void {
    console.log('Custom SQL toggled:', event.checked);
    // Implement toggle logic
  }

  onTestQuery(): void {
    if (!this.useCustomSQL) {
      return;
    }
    console.log('Testing SQL query:', this.sqlQuery);
    // Implement query test logic
  }

  selectedFile: any = null;
  selectedFileName: string = '';
  caseId: string = '';
  testResults:any = null;

onFileSelect(event: any): void {
  this.selectedFile = event.files[0];
  this.selectedFileName = this.selectedFile?.name;
  console.log('File selected:', this.selectedFile);
}



  canRunTest(): boolean {
    return !!(this.selectedFile || this.caseId.trim());
  }

  onRunTest(): void {
    if (!this.canRunTest()) {
      return;
    }

    console.log('Running test with:', {
      file: this.selectedFile,
      caseId: this.caseId
    });

    // Simulate test execution
    // Replace with actual API call
    setTimeout(() => {
      this.testResults = {
        duplicatesCount: 3,
        executionTime: 245,
        matchedFields: 'Patient DOB, Patient Initials, Reaction Term'
      };
    }, 1000);
  }

  onFileClear(): void {
  this.selectedFile = null;
  this.selectedFileName = '';
}

  resetTest(): void {
    this.selectedFile = null;
    this.selectedFileName = '';
    this.caseId = '';
    this.testResults = null;
  }
}
