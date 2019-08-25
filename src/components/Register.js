import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import ImageUploader from 'react-images-upload';
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pictures: [] ,
            redirect: false,
            file: '',
            done: false
        }
    }

    onDrop = (picture) => {
        let reader = new FileReader();
        if(picture[0]){
            reader.readAsDataURL(picture[0]);
            reader.onload = (e) => {
                this.setState({
                    file: e.target.result,
                    pictures: this.state.pictures.concat(picture),
                    done: true
                });
            }
        }
    }

    handleChange = (e) => {  
         this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            redirect: true,
        })
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{
              pathname: '/profile',
              state: {info: this.state}
          }} />
        }
    }

    render() {
        const { done } = this.state;
        return <div className="container register">
            {this.renderRedirect()}
                <ImageUploader
                    withIcon={false}
                    buttonText='+'
                    onChange={this.onDrop}
                    singleImage={true}
                    accept="/image"
                />
            {done && <div className="text-success text-center font-weight-bold">Done</div>}
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this.handleChange} value={this.state.name || ''}/>
                </div>
                <div className="form-group">
                    <label htmlFor="education">Education</label>
                    <input type="text" className="form-control" id="education" placeholder="Enter education" onChange={this.handleChange} value={this.state.education || ''} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    }
}

export default withRouter(Register);