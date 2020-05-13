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
        this.setState({message: "Det fungerte!"})
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