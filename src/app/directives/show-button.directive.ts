import { Directive, ElementRef, Renderer2, HostListener, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appShowButton]',
  standalone:true
})
export class ShowButtonDirective {
  @Input() userId!: number;
  private button!: HTMLButtonElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(Router) private router: Router
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.button = this.renderer.createElement('button');
    this.renderer.setProperty(this.button, 'innerText', 'View Details');

    this.renderer.setStyle(this.button, 'marginLeft', '10px');
    this.renderer.setStyle(this.button, 'padding', '4px 8px');
    this.renderer.setStyle(this.button, 'fontSize', '12px');
    this.renderer.setStyle(this.button, 'cursor', 'pointer');

    this.renderer.listen(this.button, 'click', () => {
      this.router.navigate(['/user', this.userId]);
    });

    this.renderer.appendChild(this.el.nativeElement, this.button);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.button) {
      this.renderer.removeChild(this.el.nativeElement, this.button);
    }
  }
}
