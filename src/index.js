import page from 'page'
import _ from 'lodash';

page('/', function() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'world!'], ' ');
  document.body.appendChild(element);
})
page('/salve/:name', function(props) {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', props.params.name], ' ');
  document.body.appendChild(element);
})
page()