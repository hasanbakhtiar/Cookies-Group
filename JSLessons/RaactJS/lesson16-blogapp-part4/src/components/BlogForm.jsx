import React, { Component } from "react";

export class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formimg: props.editblog ? props.editblog.img : "",
      formtitle: props.editblog ? props.editblog.title : "",
      formdesc: props.editblog ? props.editblog.desc : "",
      err: "",
      style: "",
    };
  }
  formSubmit = (e) => {
    e.preventDefault();
    if (!this.state.formimg || !this.state.formtitle || !this.state.formdesc) {
      this.setState({
        err: "Please, fill out this filed.",
        style: "alert-warning",
      });
    } else {
      this.setState({ err: " ", style: "" });
      this.props.onFormSubmit({
        img: this.state.formimg,
        title: this.state.formtitle,
        desc: this.state.formdesc,
      });
    }
  };
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        {this.state.err && (
          <p className={`text-center col-6 alert ${this.state.style}`}>
            {this.state.err}
          </p>
        )}
        <div className="col-6">
          <form onSubmit={this.formSubmit}>
            <div className="mb-3">
              <label className="form-label">Photo</label>
              <input
                onChange={(e) => {
                  const formimg = e.target.value;
                  this.setState(() => ({ formimg }));
                }}
                type="text"
                className="form-control"
                value={this.state.formimg}
              />
              {this.state.img}
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                onChange={(e) => {
                  const formtitle = e.target.value;
                  this.setState(() => ({ formtitle }));
                }}
                type="text"
                className="form-control"
                value={this.state.formtitle}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                onChange={(e) => {
                  const formdesc = e.target.value;
                  this.setState(() => ({ formdesc }));
                }}
                type="text"
                className="form-control"
                value={this.state.formdesc}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default BlogForm;
