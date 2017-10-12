import Root from 'Root';
import { browserHistory } from 'react-router'

describe('Admin visits form page for new project', () => {
  let wrapper, titleText, urlText, screenshotText, descriptionText, projectTypeText;

  beforeEach(() => {
    stubGlobalFetch({
      'api/v1/projects': { GET: 'projectIndex' }
    });

    wrapper = mount(<Root />);
    browserHistory.push('/admin/projects')
  });

  it('creates a new question', done => {
    let submitButton = wrapper.findWhere(n => {
      return n.type() === 'button' && n.text() === 'Add that shit';
    });
    let titleField = wrapper.findWhere(n => {
      return n.type() === 'input' && n.props().name === 'title';
    });
    let urlField = wrapper.findWhere(n => {
      return n.type() === 'input' && n.props().name === 'url';
    })
    let screenshotField = wrapper.findWhere(n => {
      return n.type() === 'input' && n.props().name === 'screenshot';
    })
    let descriptionField = wrapper.findWhere(n => {
      return n.type() === 'input' && n.props().name === 'description';
    })
    let projectTypeField = wrapper.findWhere(n => {
      return n.type() === 'input' && n.props().name === 'projectType';
    })

    titleText = "hi mom";
    titleField.simulate('change', { target: { value: titleText } });
    urlText = "hellomother.com";
    urlField.simulate('change', { target: { value: urlText } });
    screenshotText = "picofurmom.jpeg";
    screenshotField.simulate('change', { target: { value: screenshotText } });
    descriptionText = "A cordial greeting for ones mother";
    descriptionField.simulate('change', { target: { value: descriptionText } });
    projectTypeText = "Breakable Toy";
    projectTypeField.simulate('change', { target: { value: projectTypeText } });

    expect(titleField.node.value).toEqual(titleText)
    expect(urlField.node.value).toEqual(urlText)
    expect(screenshotField.node.value).toEqual(screenshotText)
    expect(descriptionField.node.value).toEqual(descriptionText)
    expect(projectTypeField.node.value).toEqual(projectTypeText)

    submitButton.simulate('submit');

    setTimeout(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/v1/admin/projects',
        {
          credentials: 'same-origin',
          method: 'POST',
          body: JSON.stringify({
            title: titleText,
            url: urlText,
            screenshot: screenshotText,
            description: descriptionText,
            project_type: projectTypeText
          }),
          headers: { 'Content-Type': 'application/json' }
        }
      )

      expect(wrapper.text()).toMatch('hi mom');
      done();
    }, 0)
  })
})
