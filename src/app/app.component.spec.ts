import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { GraphQLModule } from './graphql.module'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, GraphQLModule, HttpClientModule],
      declarations: [AppComponent],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render h1', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('header h1').textContent).toBeTruthy()
  })

  it('should render search form', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('header form').textContent).toBeTruthy()
  })

  it('button should be disabled without input', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('header form button').disabled).toBeTrue()
  })

  it('input with value should enable button', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const compiled = fixture.nativeElement
      let input = compiled.querySelector('header form input')

      expect(input.value).toBe('')

      input.value = 'Matt Corby'
      input.dispatchEvent(new Event('input'))

      expect(compiled.querySelector('header form button').disabled).toBeFalse()
    })
  })
})
