import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  readonly searchQuery = signal<string>('');
  readonly citySelected = output<string>();

  onSearch() {
    if (this.searchQuery().length > 2) {
      this.citySelected.emit(this.searchQuery());
    } else {
      alert('Please enter at least 3 characters');
    }
  }
}
