import React from 'react';
import axios from 'axios';

class FavoriteMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    const url = ' https://post-a-form.herokuapp.com/api/movies/';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Favorite Movie added ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Error while adding the favorite movie : ${e.message}`);
      });
  }

  render() {
    return (
      <div className='FormFavoriteMovie'>
        <h1>Capture of a film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='poster'>Poster</label>
              <input
                type='text'
                id='poster'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='comment'>Comment</label>
              <input
                type='text'
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className='form-data'>
              <input type='submit' value='Send' />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FavoriteMovie;
