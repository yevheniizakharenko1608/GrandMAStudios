'use strict';

window.ee = new EventEmitter();

var Test = React.createClass({

    getInitialState: function() {
        return {
            angle: 0
        };
    },

    submit(){
        this.setState({
            angle: this.state.angle + 90
        })
    },

    render() {

        let div = <div className='img' style={{transform: 'rotate('+ this.state.angle + 'deg)'}}></div>;

        return (
            <div>
                {div}
                <button className='button' onClick={this.submit}>Turn image</button>
                <p>Первое тестовое задание реализованно с помощью JavaScript + React + CSS (Тело компонента Test)</p>
                <p><a href='https://github.com/yevheniizakharenko1608/test2'>Test 2 (Java)       click</a></p>
                <p><a href='https://github.com/yevheniizakharenko1608/test3'>Test 3 (JavaScript) click</a></p>
                <p><a href='https://github.com/yevheniizakharenko1608/test4'>Test 4 (Python)     click</a></p>
            </div>
        )
    }
});


var App = React.createClass({
    render: function() {
        return (
                <div>
                    <Test/>
                </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
