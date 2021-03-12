import { ComponentFixture, TestBed } from '@angular/core/testing'

import { OMPHeaderComponent } from './header.component'

describe('OMPHeaderComponent', () => {
  let component: OMPHeaderComponent
  let fixture: ComponentFixture<OMPHeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMPHeaderComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(OMPHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
