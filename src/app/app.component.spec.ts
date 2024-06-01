import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Login');
  });

  it('should login with correct credentials', () => {
    spyOn(window, 'alert');
    component.username = 'admin';
    component.password = 'admin';
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });

  it('should show error with incorrect credentials', () => {
    spyOn(window, 'alert');
    component.username = 'admin';
    component.password = 'wrongpassword';
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Invalid username or password');
  });
});
