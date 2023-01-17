import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Transofrm array', () => {
    const value = {
      items: [
        { snippet: { title: 'Angular' } },
        { snippet: { title: 'Java' } },
        { snippet: { title: 'Java_1' } },
        { snippet: { title: 'Java_3' } },
        { snippet: { title: 'Java_2' } },
        { snippet: { title: 'JavaScript' } },
        { snippet: { title: 'react' } },
      ],
    };
    expect(pipe.transform(value, 'java')).toHaveSize(5);
  });
  it('should return inital array', () => {
    const value = {
      items: [
        { snippet: { title: 'Angular' } },
        { snippet: { title: 'Java' } },
        { snippet: { title: 'Java_1' } },
        { snippet: { title: 'Java_3' } },
        { snippet: { title: 'Java_2' } },
        { snippet: { title: 'JavaScript' } },
        { snippet: { title: 'react' } },
      ],
    };
    expect(pipe.transform(value, '').items).toHaveSize(value.items.length);
  });
});
