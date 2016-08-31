import React, { Component } from 'react';
import './app.css';
import { fabric } from 'fabric';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctx: '',
            clipping: '',
            data: {}
        }
    }
    
    componentDidMount() {
        const ctx = new fabric.Canvas('lozhkinCanvas');

        var clippingRect = new fabric.Rect({
            left: 310,
            top: 100,
            width: 400,
            height: 400,
            fill: '#00e400',
            opacity: 1
        });
        ctx.add(clippingRect);
        ctx.setOverlayImage('src/img/template.png', ctx.renderAll.bind(ctx), {
            originX: 'left',
            originY: 'top'
        })
        this.setState({
          ctx: ctx,
          clipping: clippingRect
        });
    }
    handleImage = (e) => {
        var reader = new FileReader();
        var ctx = this.state.ctx;
        var clippingRect = this.state.clipping; 
        reader.onload = function(event) {
            var img = new Image();
            img.onload = function() {
                console.log(img.width);
                var instanceWidth, instanceHeight;

                instanceWidth = img.width;
                instanceHeight = img.height;

                var imgInstance = new fabric.Image(img, {
                    width: instanceWidth,
                    height: instanceHeight,
                    top: (ctx.height / 2 - instanceHeight / 2),
                    left: (ctx.width / 2 - instanceWidth / 2),
                    originX: 'left',
                    originY: 'top'
                });
                ctx.add(imgInstance);
                imgInstance.clipTo = function(canvas) {
                    canvas.save();
                    canvas.setTransform(1, 0, 0, 1, 0, 0);

                    clippingRect.render(canvas);

                    canvas.restore();
                };
                ctx.renderAll();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
  render() {
    return (
      <div className="app">
        <canvas ref="canvas" id="lozhkinCanvas" width="880" height="674"></canvas>
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
