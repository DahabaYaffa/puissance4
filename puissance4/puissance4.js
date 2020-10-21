class Game {
    constructor(players) {
        this.turn = 0;
        this.players = players;

    }

    getPlayers() {
        return this.players;
    }


    createPlateau() {

        const getTurn = () => {
            return this.turn
        }
        const switchTurn = () => {
            this.turn++;
        }

        var grid = $(".grid");

        for (let i = 0; i < 6; i++) {
            const row = $("<div class='row'></div>");
            grid.append(row);

            // const col = $("<div class='col'></div>");
            for (let j = 0; j < 7; j++) {
                row.append("<div class='col empty' row='" + i + "' col='" + j + "'></div>");
            }
        }


        function WinHorizontal(cell) {
            const player = cell.attr("class");
            const pionRow = cell.attr("row");
            const rowCells = $(".col[row='" + pionRow + "']");
            let pions = 0;
            $.each(rowCells, function () {
                if ($(this).attr("class") === player) {
                    pions++;
                    if (pions === 4) {
                        alert("C'est une Win horizontale!!")
                        $(".col").removeClass("yellow").removeClass("red").addClass("empty");
                       
                    }
                } else {
                    pions = 0;
                }
            })
        }


    function WinVertical(cell) {
        const player = cell.attr("class");
        const pionCol = cell.attr("col");
        const colCells = $(".col[col='" + pionCol + "']");
        let pions = 0;
        $.each(colCells, function () {
            if ($(this).attr("class") === player) {
                pions++;
                if (pions === 4) {
                    alert("C'est une Win verticale!!")
                    $(".col").removeClass("yellow").removeClass("red").addClass("empty");
                 
                    
                }
            } else {
                pions = 0;
            }
        })
    }

       

        $.each($(".col"), function () {
            $(this).click(function () {
                var col = $(this).attr("col");
                const pions = $(".col[col='" + col + "']");
                // console.log(pions);
                var tab = [];
                $.each(pions, function () {
                    tab.push($(this))
                })
                tab = tab.reverse();
                // console.log(tab);

                $.each(tab, function () {
                    if ($(this).hasClass("empty")) {
                        if (getTurn() % 2){
                            $(this).addClass("red").removeClass("empty");
                            WinHorizontal($(this));
                            WinVertical($(this));
                            switchTurn();
                            return false;
                            
                        }
                        else{
                            $(this).addClass("yellow").removeClass("empty");
                            WinHorizontal($(this));
                            WinVertical($(this));
                            switchTurn();
                            return false;
                            
                        }
                        
                    }
                    
                })
           
                
            })
            
        })
    
    
        
    }
}

jQuery.fn.puissance4 = function (options = {}) {
    let players = [
        {
            id: 1,
            color: "red",
            name: "player 1"
        },
        {
            id: 2,
            color: "red",
            name: "player 2"
        }
    ]

    let game = new Game(players);

    game.createPlateau();



}
$(".grid").puissance4({});