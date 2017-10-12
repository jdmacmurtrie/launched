import Root from 'Root';
import { browserHistory } from 'react-router'

describe('Normal User visits Index page of Projects', () => {
  let wrapper;

  beforeEach(() => {
    stubGlobalFetch({
      'api/v1/projects': { GET: 'projectIndex' }
    });

    wrapper = mount(<Root />);
    browserHistory.push('/')
  });

  it('Renders a bunch of awesome projects', done => {
    setTimeout(() => {
      expect(wrapper.text()).toMatch('hi mom');
      done();
    }, 0)
  });
});
