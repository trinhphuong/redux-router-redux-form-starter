import React, { Component } from 'react';
import { Field, reduxFrom } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <div>
        PostsNew!
      </div>
    );
  }
}

export default reduxFrom({
  form: 'PostsNewForm',
})(PostsNew);
