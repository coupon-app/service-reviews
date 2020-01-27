import React from 'react';

class ReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  render() {
    return (
      <div>
        Hello from ReviewCard component!
      </div>
    );
  }
}

export default ReviewCard;
