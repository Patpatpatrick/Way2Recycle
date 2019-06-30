import React, { Component } from 'react';

class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname: 'An item',
            price: 0,
            category : 'Book',
            description : 'Description',
            date : new Date().toLocaleString(),
            file : '',
            imagePreviewUrl : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value,
            date : new Date().toLocaleString()
        });
    }
    handleImageChange (event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
        this.setState({
            file: file,
            imagePreviewUrl: reader.result,
            date : new Date().toLocaleString()
        });
        }
        reader.readAsDataURL(file)
    }
    handleSubmit (event) {
        event.preventDefault();
        console.log(this.state);
    }
	render() {
        return (
            <div className="container" >
                <form style={{"width": "350px","verticalAlign": "0%"}} onSubmit={this.handleSubmit} className="form" ref = "inputform">
                    <label htmlFor="iname">Item's Name is</label>
                    <input type="text" onChange={this.handleChange} id="iname" name="itemname" placeholder="Item's name.." required = "required"></input>
                    <label htmlFor="lname">Price</label>
                    <input type="text" onChange={this.handleChange} id="price" name="price" placeholder="Price.." required = "required" ></input>
                    <label htmlFor="subject">description</label>
                    <textarea onChange={this.handleChange} id="subject" name="description" placeholder="Write something.."></textarea>
                    <input type="file" onChange={this.handleImageChange} />
                    <button type="submit">Submit</button>
                </form>
                {this.state.imagePreviewUrl !== '' ? <img src={this.state.imagePreviewUrl} /> : <span></span>}
            </div>
        );
    }
}

export default BookDetail;
