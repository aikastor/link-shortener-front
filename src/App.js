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
    const link = this.props.shortenedLink;

    return (
        <>
          <Container maxWidth='md'>
            <Grid container >
                <Grid item xs={12}>
                  <h1>Shorten your link!</h1>
                  <form onSubmit={this.submitHandler}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                    >
                      <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            name='currentLink'
                            value={this.state.currentLink}
                            onChange={this.inputChangeHandler}
                        />
                      </Grid>
                      <Grid item align="center" style={{margin: '15px'}}>
                        <Button variant="contained" color="primary"
                                type='submit'>
                          Go!
                        </Button>
                      </Grid>

                    </Grid>
                  </form>
                </Grid>
              <Grid item xs={12}>
                <h4>Your link:</h4>
                {
                  link &&
                  <Link href={link}>
                    {link}
                  </Link>
                }
              </Grid>

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