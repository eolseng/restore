import React from "react"

export class HelloWorld extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: null
        }
    }

    componentDidMount() {
        this.getHello();
    }


    getHello = async () => {
        const url = "/api/v1/helloworld"

        let response;
        try {
            response = await fetch(url)
        } catch (e) {
            this.setState({message: "Jasså! Her skjedde det noe feil!"})
            return;
        }

        if (response.status !== 200) {
            this.setState({message: "Det fungerte ikke...!"})
            return;
        }
        this.setState({message: "Det fungerte! Hurra! EN FINGER I VÆRET HVIS DU KOSER DEG!"})

        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://localhost:3000/products')
        // send the request
        xhr.send();
    }

    render() {

        const message = this.state.message;

        return (
            <div>
                {message}
            </div>
        )
    }
}