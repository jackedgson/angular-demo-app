import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlbumsComponent } from './albums.component'
import { MatTableModule } from '@angular/material/table'

describe('AlbumsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsComponent],
      imports: [MatTableModule],
    }).compileComponents()
  })

  it('should create album', () => {
    const fixture = TestBed.createComponent(AlbumsComponent)
    const album = fixture.componentInstance
    expect(album).toBeTruthy()
  })

  it('should test the table ', () => {
    const fixture = TestBed.createComponent(AlbumsComponent)
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      // Ensure table columns are present and correct
      let tableColumns = fixture.nativeElement.querySelector('thead tr th')
      expect(tableColumns.length).toBeGreaterThan(1)
      expect(tableColumns[0].innerText).toBe('Cover')
      expect(tableColumns[1].innerText).toBe('Title')
      expect(tableColumns[2].innerText).toBe('Date')
      expect(tableColumns[2].innerText).toBe('Status')
    })
  })
})
