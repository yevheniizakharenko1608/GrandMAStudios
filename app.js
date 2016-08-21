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
                    <p>Здравствуйте. Меня зовут Евгений Захаренко, мне 20. Я очень хочу развиваться в ИТ сфере и получать практический опыт. Ниже - выполненные тесты. Может я что-то сделал не так... Но я прошу только дать мне шанс и я покажу все что могу, выложусь по полной. Я готов изучать новые технологии, не спать ночами, изучая новый материал... Приходить пораньше и задерживаться на работе. У меня есть огромная мотивация, я Вас не подведу. Спасибо.</p>
                    <Test/>
                </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);