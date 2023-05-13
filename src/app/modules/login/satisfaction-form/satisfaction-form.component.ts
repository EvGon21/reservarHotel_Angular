import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-satisfaction-form',
  templateUrl: './satisfaction-form.component.html',
  styleUrls: ['./satisfaction-form.component.css']
})
export class SatisfactionFormComponent {
  rating: number = 0;
  comment: string = '';
  @Output() submitForm = new EventEmitter<{ rating: number, comment: string }>();

  onSubmit() {
    this.submitForm.emit({ rating: this.rating, comment: this.comment });
    this.rating = 0;
    this.comment = '';
  }
}
