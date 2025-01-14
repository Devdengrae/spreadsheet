(function(){
    function create2DArray(N,M,defaultValue=''){
        let arr= new Array(N);
        for (let i=0;i<N;i++){
            if(typeof defaultValue=="object"){
                arr[i]=new Array(M).fill({...defaultValue});// without this it will take reference of the object and all the values are changes
            }
            else{
                arr[i]=new Array(M).fill(defaultValue);
            }
            
        }
        return arr;
    }

    // let spreadsheetData=[];
    let selectedCell={
        row: 1, col:1
    }
    let selectedCellRange={
        startRow:selectedCell.row,
        endRow:selectedCell.row,
        startCol:selectedCell.col,
        endCol:selectedCell.col
    }
    let wmode="NORMAL" 
    const rowCount=100;
    const colCount=100;
    let canvas;
    let ctx;

    let spreadsheetData=create2DArray(rowCount,colCount,'');
    let cellProperties=create2DArray(rowCount,colCount,{
        textAlign: "left"
    })
    let rowHeights=new Array(rowCount).fill(26);
    let colWidths=new Array(colCount).fill(100);
     
    var DrawFunctions =(function(){
        function getCellPosition(row,col){
            let y=0;
            for(let r=0;r<row;r++){
                y+=rowHeights[r];
            }
            let x=0;
            for(let c=0;c<col;c++){
                x+=colWidths[c];
            }
            return {x,y};
        }
        function drawSingleCell(row,col){
            const props=cellProperties[row][col];
            const pos=getCellPosition(row,col)
            ctx.strokeRect(pos.x,pos.y,colWidths[col],rowHeights[row]);
        }
        function drawCells(){
            for (let row=0;row<rowCount;row++){
                for(let col=0;col<colCount;col++){
                    drawSingleCell(row,col)
                }
            }
        }
        function drawSelectedCellBorder(){
            // const cellWidth=colWidth[selectedCell.col];
            // const cellHeight=rowHeights[selectedCell.row];
            const pos=getCellPosition(selectedCell.row,selectedCell.col);
            const borderDiv=document.getElementById("selectedCellBorder");
            borderDiv.style.display="block";
            borderDiv.style.left=`${pos.x + 1}px`;
            borderDiv.style.top=`${pos.y+1}px`;
            borderDiv.style.width=`${colWidths[selectedCell.col]-1}px`;
            borderDiv.style.height=`${rowHeights[selectedCell.row]-1}px`;
            borderDiv.style.border="3px solid blue";
       }
        function drawGrid(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.strokeStyle='rgba(0,0,0,0.2)';
            drawCells()
            drawSelectedCellBorder()
            

        }
        return {drawGrid: drawGrid};
    })()
    function handleNormalArrowKeys(key){
        console.log(key);

    }
    function handleArrowKeys(key){
        if(mode=="NORMAL"){
            handleNormalArrowKeys(KEY)
        }
    }
    document.addEventListener("keydown",function(event){
        let  key=event.key;
        if(event.shiftKey && ["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"])
    })
    document.addEventListener("DOMContentLoaded",function(){
        canvas=document.getElementById("spreadsheet");
        ctx=canvas.getContext("2d");
        const canvasWidth=1200;
        const canvasHeight=1700;
        const ratio=window.devicePixelRatio;
        canvas.width=canvasWidth*ratio;
        canvas.height=canvasHeight*ratio;
        canvas.style.width=canvasWidth+"px";
        canvas.style.height=canvasHeight+"px";
        ctx.scale(ratio,ratio);
        DrawFunctions.drawGrid()
    })

})()