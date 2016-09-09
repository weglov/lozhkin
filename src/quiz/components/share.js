import React, { Component } from 'react';

export default class ButtonShare extends Component {
	constructor(props) {
        super(props);
        this.state = {
            'fb': 'http://www.facebook.com/sharer.php?s=100&p[url]=',
            'vk': 'http://vkontakte.ru/share.php?url=',
            'twi': 'http://twitter.com/share?url=',
            'phpscript': 'http://lozhkin.ren.tv/share.php'
        }
    }
    onShareClick = (e) => {
        let url = this.state[e.target.value] + this.state.phpscript + '?n=' + this.props.uid;
        if (e.target.value === 'fb') {
            url = this.state[e.target.value] + this.state.phpscript + '?n=' + this.props.uid;
        } else if (e.target.value === 'vk') {
            url = this.state[e.target.value] + this.state.phpscript + '?n=' + this.props.uid;
        } else {
            url = this.state[e.target.value] + this.state.phpscript + '?n=' + this.props.uid;
        }
        window.open(url, '', "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600");
        }
    render() {
        return (
          <div className={this.props.active + " share"}>
            <div className="share__title">Расскажите друзьям!</div>
            <button className="share__FB" value='fb' onClick={this.onShareClick} target="_blank">Facebook</button>
            <button className="share__VK" value='vk' onClick={this.onShareClick} target="_blank">Vkontakte</button>
            <button className="share__TWI" value='twi' onClick={this.onShareClick} target="_blank">Twitter</button>
          </div>
        );
    	
    }
}
