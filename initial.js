const gameareaSelector=document.querySelector("#gamearea");

const Titan= "Titan";
const Canon= "Canon";
const Rico= "Rico";
const SemiRico= "SemiRico";
const Tank= "Tank";

const pieces=[
    ['', '', Canon, Titan, '', '', '', ''], 
    ['', '', '', '', SemiRico, Rico, '', ''], 
    ['', '', '', '', '', Tank, '', ''], 
    ['', '', '', '', '', '', '', ''], 
    ['', '', '', '', '', '', '', ''], 
    ['', Tank, '', '', '', '', '', ''], 
    ['', '', Rico, SemiRico, '', '', '', ''], 
    ['', '', '', Titan, Canon, '', '', '']
]

const pieceSelection= function(e){
    // Operation for each of them defined
    if(e.target.id=="Tank"){
        console.log("tank selected");
    }
    
    if(e.target.id=="Rico"){
        console.log("Rico selected");
    }

    if(e.target.id=="SemiRico"){
        console.log("SemiRico selected");
    }

    if(e.target.id=="Titan"){
        console.log("Titan selected");
    }

    if(e.target.id=="Canon"){
        console.log("Canon selected");
    }
}

const formGrid= function(pieces, id, piece){
    for(let i=0; i<8; i++){
        const div=document.createElement('div');
        div.classList.add('square');
        div.innerHTML=pieces[id][i];
        gameareaSelector.append(div);
        div.setAttribute('id', piece[i]);
        if(div.innerHTML!==""){
            div.classList.add('hasPiece');
            div.setAttribute('data-piece', pieces[id][i]); 
            div.addEventListener('click', pieceSelection);
        }
        //updated array to divs
        pieces[id][i]=div;
    }
}

pieces.forEach(
    function(piece, id){
        formGrid(pieces, id, piece);
    }
);
