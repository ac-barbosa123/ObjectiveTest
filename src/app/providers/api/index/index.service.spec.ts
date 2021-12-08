import { IndexService } from '../index/index.service'
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IndexService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [IndexService]
  }));

   it('should be created index service', () => {
    const service: IndexService = TestBed.get(IndexService);
    expect(service).toBeTruthy();
   });

  
   it('should list all characteres', () => {
    const service: IndexService = TestBed.get(IndexService);
    expect(service.getCharacters).toBeTruthy();
   });


   it('should find one caratcher by id', () => {
    const service: IndexService = TestBed.get(IndexService);
    expect(service.findOne).toBeTruthy('1011334');
   });

});
