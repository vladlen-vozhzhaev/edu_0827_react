import React from "react";
function Article(props){
    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.author}</td>
        </tr>
    )
}

export class MainPage extends React.Component{
    constructor() {
        super();
        this.state = {
            articles: []
        }

    }
    componentDidMount() {
        console.log("Компонент отрисован")
        fetch("http://0827.vozhzhaev.ru/request/getArticles")
            .then(response=>response.json())
            .then(result=>{
                let parser = new DOMParser();
                console.log(result);
                let articles = [];
                for (let i = 0; i < result.length; i++) {
                    let content = parser.parseFromString(result[i].content, "text/html");
                    articles.push(<Article
                        title={result[i].title}
                        content={content.body.innerText.substr(0, 90)+"..."}
                        author={result[i].author}
                    />)
                }
                this.setState({
                    articles: articles
                })
            })
    }

    render(){
        console.log("Компонент отрисовывается")
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Заголовок</th>
                    <th scope="col">Контент</th>
                    <th scope="col">Автор</th>
                </tr>
                </thead>
                <tbody>
                {this.state.articles}
                </tbody>
            </table>
        )
    }

}
