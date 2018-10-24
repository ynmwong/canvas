class DrawingStraight extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.context = contextReal; 
        this.contextDraft=contextDraft;
        this.a=0;
        this.b=0;
    }
    
    onMouseDown(coord,event){
        this.context.globalAlpha = opacity;
        this.contextDraft.globalAlpha = opacity;
        this.context.strokeStyle = color;
        this.context.lineJoin = "round";
        this.context.lineWidth = stroke;
        this.contextDraft.strokeStyle = color;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = stroke;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.a=coord[0];
        this.b=coord[1];
       
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.a,this.b);
        this.contextDraft.lineTo(coord[0],coord[1]);       
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }

    onMouseMove(coord,event){
        
        
    }
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.context.lineCap = "round"
        this.draw(coord[0],coord[1]);
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}