import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss']
})
export class DropdownExampleComponent {
  dropdownId = 'dropdown-example';
  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    const dropdownElement = document.getElementById(this.dropdownId);

    if (this.isDropdownOpen) {
      dropdownElement?.classList.remove('hidden');
    } else {
      dropdownElement?.classList.add('hidden');
    }
  }
}
