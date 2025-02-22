import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent {
  lastScrollTop = 0;
  navbarVisible = true;
  img = 'assets/car4.png';
  firstbox = true;

  cars = [
    {
      name: 'Tesla Model S',
      image: 'assets/JBcar11.png',
      description: 'An electric luxury sedan with autopilot.',
      price: '$80,000'
    },
    {
      name: 'BMW M3',
      image: 'assets/JBcar12.png',
      description: 'A high-performance sports sedan.',
      price: '$70,000'
    },
    {
      name: 'Audi R8',
      image: 'assets/JBcar13.png',
      description: 'A stunning supercar with V10 engine.',
      price: '$150,000'
    },
    {
      name: 'Ford Mustang',
      image: 'assets/JBcar14.png',
      description: 'A classic American muscle car.',
      price: '$60,000'
    }
  ];

  sliders = [
    { title: "New CITROËN BASALT", link: "/basalt" },
    { title: "Aircross", link: "/aircross" },
    { title: "C3", link: "/c3" },
    { title: "New Ë-C3 All Electric", link: "/ec3" },
    { title: "C5 Aircross SUV", link: "/c5-aircross" },
    { title: "Service Promise", link: "/service-promise" },
    { title: "Future Sure", link: "/future-sure" },
    { title: "Inspired By India", link: "/inspired-by-india" },
    { title: "Offers", link: "/offers" },
    { title: "Social Links", link: "https://www.citroen.in/social-links" }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.changeBackground();
  }
  currentSlideIndex = 0;
  totalSlides = 10;
  slidesToShow = 8;

  goToNext() {
    if (this.currentSlideIndex + this.slidesToShow < this.totalSlides) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  goToPrevious() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.totalSlides - this.slidesToShow;
    }
  }

  getVisibleSlides() {
    return this.sliders.slice(this.currentSlideIndex, this.currentSlideIndex + this.slidesToShow);
  }

  navigateTo(route: string) {
    if (route.startsWith('http')) {
      window.open(route, '_blank');
    } else {
      this.router.navigate([route]);
    }
  }

  slides = [
    { image: 'assets/JBcar1.png', title: 'MAKE 2025 EXCITING', description: 'With unbeatable deals on your next Citroën' },
    { image: 'assets/JBcar2.png', title: 'CITROËN Ë-C3', description: 'Starts at ₹11.99 Lakh - Benefits up to ₹80,000' },
    { image: 'assets/JBcar15.png', title: 'CITROËN Ë-C3', description: 'Starts at ₹11.99 Lakh - Benefits up to ₹80,000' },
    { image: 'assets/JBcar7.png', title: 'CITROËN Ë-C3', description: 'Starts at ₹11.99 Lakh - Benefits up to ₹80,000' },
    { image: 'assets/JBcar8.png', title: 'CITROËN Ë-C3', description: 'Starts at ₹11.99 Lakh - Benefits up to ₹80,000' },
    { image: 'assets/JBcar9.png', title: 'CITROËN Ë-C3', description: 'Starts at ₹11.99 Lakh - Benefits up to ₹80,000' },
    { image: 'assets/JBcar10.png', title: 'CITROËN Ë-C3', description: 'Starts at ₹11.99 Lakh - Benefits up to ₹80,000' },
    { image: 'assets/JBcar11.png', title: 'CITROËN Ë-C3', description: 'Starts at ₹11.99 Lakh - Benefits up to ₹80,000' }
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }


  images: string[] = [
    'assets/hero1.png',
    'assets/hero2.png'
  ];

  currentIndex = 0;

  changeBackground() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      const slider = document.getElementById('heroSlider');
      if (slider) {
        slider.style.backgroundImage = `url(${this.images[this.currentIndex]})`;
      }
    }, 3000);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll === 0) {
      this.navbarVisible = true;
    } else {
      this.navbarVisible = false;
    }
    this.lastScrollTop = currentScroll;
  }

}
