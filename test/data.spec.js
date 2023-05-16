import { filterMoviesByDirector, filterMoviesByProducer } from '../src/data.js';


describe('filterMoviesByDirector', () => {
  it('is a function', () => {
    expect(typeof filterMoviesByDirector).toBe('function');
  });

  it('returns `filterMoviesByDirector`', () => {
    expect(filterMoviesByDirector('Yoshifumi Kondō').length).toBe(1);
  });
});


describe('filterMoviesByProducer', () => {
  it('is a function', () => {
    expect(typeof filterMoviesByProducer).toBe('function');
  });

  it('returns `filterMoviesByProducer`', () => {
    expect(filterMoviesByProducer()).toBe('OMG');
  });
});
