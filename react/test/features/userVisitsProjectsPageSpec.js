import App from 'containers/App';

describe('Normal User visits Index page of Projects', () => {
  let wrapper;

  beforeEach(() => {
    stubGlobalFetch({
      'api/v1/projects': { GET: 'projectIndex' }
    });

    wrapper = mount(<App />);
  });

  it('Renders a bunch of awesome projects', done => {
    setTimeout(() => {
      expect(wrapper.text()).toMatch('hi mom');
      expect(wrapper.text()).toMatch('100');
      done();
    }, 0)
  });
});
