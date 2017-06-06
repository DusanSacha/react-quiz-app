import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Category extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: 'Title',
      questions: [],
      visibleQuestion: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      quizOver: false,
    };

    this.onAnswerQuestion = this.onAnswerQuestion.bind(this);
    this.onRestartQuiz = this.onRestartQuiz.bind(this);

  }

  componentDidMount() {
    
    axios.get('/api/quiz/' + this.props.match.params.id)
      .then((response) => {
        const currentData = response.data.filter((item)=>{
          return item.title === this.props.match.params.id;
        });

        const questionSet = currentData[0];

        this.setState({
          title: questionSet.title,
          questions: questionSet.questions,
        });
      });

  } 

  onAnswerQuestion(event) {

    let quizOver = false;
    let visibleQuestion = this.state.visibleQuestion;

    if (this.state.questions.length === ( this.state.correctAnswers  + this.state.wrongAnswers ) + 1)  {
      quizOver = true;
    } else {
      visibleQuestion++;
    }

    if (event.target.value == this.state.questions[this.state.visibleQuestion].correct) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
        visibleQuestion: visibleQuestion,
        quizOver: quizOver,
      });

    } else {
      this.setState({
        wrongAnswers: this.state.wrongAnswers + 1,
        visibleQuestion: visibleQuestion,
        quizOver: quizOver,
      });
    }


  }

  onRestartQuiz(){
    this.setState({
      visibleQuestion: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      quizOver: false,
    });
  }

  render(){
    const displayQuestion = this.state.questions[this.state.visibleQuestion];
    if (!displayQuestion) {
      return <div>Loading...</div>;
    } else {
      const displayAnswers = displayQuestion.answers.map((answer, index) => {
        return(
          <button key={index} onClick={this.onAnswerQuestion} value={index} disabled={this.state.quizOver}>{answer}</button>
        );
      });

      return(
          <div>
              <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><a href="#" onClick={this.onRestartQuiz}>Restart</a></li>
              </ul>
              <h1>{this.state.title}</h1>
              <h2>{displayQuestion.question}</h2>
              <div>
                {displayAnswers}
              </div>
              <div>Correct Answers: {this.state.correctAnswers}</div>
              <div>Wrong Answers: {this.state.wrongAnswers}</div>
              <div>Question No.: {this.state.wrongAnswers + this.state.correctAnswers} / {this.state.questions.length}</div>
              { this.state.quizOver && <div>Quiz is over. Thanks!</div>}
          </div>
      );
    }
  }
}

export default Category;