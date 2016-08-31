import React, { Component } from 'react';
import './app.css';
import { fabric } from 'fabric';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctx: '',
            clipping: '',
            w: '880',
            h: '674',
            img: '',
            imgScale: 0
        }
    }
    
    componentDidMount() {
        const ctx = new fabric.Canvas('lozhkinCanvas');

        var clippingRect = new fabric.Rect({
            left: 0,
            top: 0,
            width: this.state.w,
            height: this.state.h,
            fill: '#ffffff',
            opacity: 1
        });
        ctx.add(clippingRect);
        ctx.setOverlayImage('src/img/template.png', ctx.renderAll.bind(ctx), {
            originX: 'left',
            originY: 'top'
        })
        console.log(this.refs.range)
        this.setState({
          ctx: ctx,
          clipping: clippingRect
        });
    }
    scaleImage = (e) => {
      var img = this.state.img;
      var scale = this.state.imgScale;
      img.set({
            scaleY: scale * e.target.value / 100,
            scaleX: scale * e.target.value / 100,
      });
      var ctx = this.state.ctx;
      ctx.renderAll();
    }
    handleImage = (e) => {
        var reader = new FileReader();
        var ctx = this.state.ctx;
        var clippingRect = this.state.clipping; 
        reader.onload = function(event) {
            var img = new Image();
            img.onload = function() {      
                var instanceWidth, instanceHeight;
                instanceWidth = img.width;
                instanceHeight = img.height;
                console.log(ctx.width  / instanceWidth);
                var imgInstance = new fabric.Image(img, {
                    width: instanceWidth,
                    height: instanceHeight,
                    top: 0,
                    left: 200,
                    scaleY: ctx.height  / instanceHeight,
                    scaleX: ctx.height  / instanceHeight,
                    originX: 'left',
                    originY: 'top'
                });
                this.setState({
                  img: imgInstance,
                  imgScale: ctx.height  / instanceHeight
                });
                ctx.add(imgInstance);
                imgInstance.clipTo = function(canvas) {
                    canvas.save();
                    canvas.setTransform(1, 0, 0, 1, 0, 0);

                    clippingRect.render(canvas);

                    canvas.restore();
                };
                ctx.renderAll();
            }.bind(this);
            img.src = event.target.result;
        }.bind(this);
        reader.readAsDataURL(e.target.files[0]);
    }
  render() {
    return (
      <div className="app">
        <canvas ref="canvas" id="lozhkinCanvas" width="880" height="674"></canvas>
        <input ref="range" id="range" type="range" min="0" max="200" onChange={this.scaleImage.bind(this)} />
        <div className="imageLoader">
          <ul className="imageLoader__list">
            <li className="imageLoader__item--file">
              <label className="imageLoader__label">
                <input type="file" ref="fileloader" onChange={this.handleImage.bind(this)}  id="imageLoader" name="imageLoader" />
                <span>Загрузить фото</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
