import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements AfterViewInit {
  cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

  currentIndex = 0;
  slideOffset = 0;
  cardWidth = 500; // Adjust this based on your card width

  nextCard() {
    debugger;
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateSlideOffset();
  }

  prevCard() {
    debugger;
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateSlideOffset();
  }

  updateSlideOffset() {
    debugger;
    this.slideOffset = -this.currentIndex * this.cardWidth;
  }

  getRandomColorClass(): string {
    const colors = [
      'bg-orange-500',
      'bg-blue-500',
      'bg-yellow-500',
      'bg-pink-500',
      'bg-green-500',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  paralaxTitles: NodeListOf<HTMLElement> | undefined;
  didScroll = false;

  ngAfterViewInit() {
    this.paralaxTitles = document.querySelectorAll(
      '.paralax-title'
    ) as NodeListOf<HTMLElement>;
    this.raf();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.didScroll = true;
  }

  raf() {
    if (this.didScroll && this.paralaxTitles) {
      this.paralaxTitles.forEach((element, index) => {
        element.style.transform = `translateX(${window.scrollY / 10}%)`;
      });
      this.didScroll = false;
    }
    requestAnimationFrame(() => this.raf());
  }

  isOpen = false;

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
