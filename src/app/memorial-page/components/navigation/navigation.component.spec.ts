import { ComponentFixture, TestBed } from '@angular/core/testing'

import { OMPNavigationComponent } from './navigation.component'

describe('OMPNavigationComponent', () => {
  let component: OMPNavigationComponent
  let fixture: ComponentFixture<OMPNavigationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OMPNavigationComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(OMPNavigationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
