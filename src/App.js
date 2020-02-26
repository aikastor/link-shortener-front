import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {shortenLink} from "./store/actions/linkActions";
import Link from "@material-ui/core/Link";

class App extends Component {
  state = {
    currentLink: ''
  };
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  submitHandler = async (e) => {
    e.preventDefault();
    const link = {originalUrl: this.state.currentLink};

    await this.props.shortenLink(link);
    this.setState({currentLink: ''})
  };
  render() {
    return (
        <>
          <Container maxWidth='md'>
            <Grid container >
                <Grid item xs={12}>
                  <h1>Shorten your link!</h1>
                  <form onSubmit={this.submitHandler}>
                    <TextField
                        required
                        name='currentLink'
                        value={this.state.currentLink}
                        onChange={this.inputChangeHandler}
                    />
                    <Button variant="contained" color="primary"
                    type='submit'>
                      Go!
                    </Button>
                  </form>
                </Grid>
              {
                this.props.shortenedLink &&
                <Link href={this.props.shortenedLink}>
                  {this.props.shortenedLink}
                </Link>
              }

            </Grid>
          </Container>
        </>
    );
  }
}
const mapStateToProps = state => ({
  shortenedLink : state.shortenedLink,
});
const mapDispatchToProps = dispatch => ({
  shortenLink : (link) => dispatch(shortenLink(link))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);