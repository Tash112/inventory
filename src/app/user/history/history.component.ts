import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  successMessage: string | null = null;
  isHistoryModalVisible: boolean = false;
  confirmDeleteHistoryModalVisible: boolean = false;
  isEditingHistory: boolean = false;
  historyData = { id: 0, date: new Date(), action: '', user: '', details: '' }; // Ensure 'id' and 'date' are included
  historyRecords = [
    { id: 1, date: new Date(), action: 'Inventory Added', user: 'Admin', details: '10 items added to stock' },
    { id: 2, date: new Date(), action: 'Inventory Updated', user: 'Manager', details: 'Stock levels updated for Item A' },
    // Add more history records as needed
  ];

  // Open modal for adding/editing history record
  openHistoryModal(historyRecord?: any): void {
    if (historyRecord) {
      // For editing, copy the record including id and date
      this.isEditingHistory = true;
      this.historyData = { ...historyRecord }; // This will now include 'id' and 'date'
    } else {
      this.isEditingHistory = false;
      this.historyData = { id: 0, date: new Date(), action: '', user: '', details: '' }; // Reset fields for adding
    }
    this.isHistoryModalVisible = true;
  }

  // Close the history modal
  closeHistoryModal(): void {
    this.isHistoryModalVisible = false;
  }

  // Open delete confirmation modal
  openDeleteHistoryConfirmModal(historyId: number): void {
    this.historyData.id = historyId;
    this.confirmDeleteHistoryModalVisible = true;
  }

  // Close the delete confirmation modal
  closeDeleteHistoryConfirmModal(): void {
    this.confirmDeleteHistoryModalVisible = false;
  }

  // Delete a history record
  deleteHistoryRecord(): void {
    // Logic to delete the record from the historyRecords array
    this.historyRecords = this.historyRecords.filter(record => record.id !== this.historyData.id);
    this.closeDeleteHistoryConfirmModal();
    this.successMessage = 'History record deleted successfully!';
  }

  // View history details (for example purposes)
  viewHistoryDetails(historyRecord: any): void {
    alert(`Details: ${historyRecord.details}`);
  }

  // Submit the form (add or update)
  onHistorySubmit(form: any): void {
    if (this.isEditingHistory) {
      // Edit logic (update the existing record)
      const index = this.historyRecords.findIndex(record => record.id === this.historyData.id);
      if (index !== -1) {
        this.historyRecords[index] = { ...this.historyData };
        this.successMessage = 'History record updated successfully!';
      }
    } else {
      // Add logic (add a new history record)
      const newId = this.historyRecords.length ? Math.max(...this.historyRecords.map(record => record.id)) + 1 : 1;
      this.historyRecords.push({ ...this.historyData, id: newId, date: new Date() }); // Ensure id and date are added
      this.successMessage = 'History record added successfully!';
    }

    this.closeHistoryModal();
  }
}
