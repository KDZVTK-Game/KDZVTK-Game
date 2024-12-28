$(function() {


    const GRID_SIZES = [8, 16, 22];
    const NUM_MINES_LVLS = [10, 40, 99];
    const BG_COLORS = ['#aad751', '#9cc448'];
    const BG_COLORS_OPEN = ['#e5c29f', '#d7b899'];
    const TEXT_COLORS = ['blue', 'green', 'red', 'purple', 'darkorange', 'magenta', 'brown', 'black'];
    const TEXT_COLORS_LIGHT = ['#6666ff', '#66ff66', '#ff6666', '#bc66ff', '#ffd199', '#ffb3ff', '#e69e9e', '#666666'];
    var grid_size = GRID_SIZES[0];
    var num_mines = NUM_MINES_LVLS[0];

    var cells = [];
    var game_over = false;


    // Define class cell and its methods
    class Cell{


        constructor(x, y, is_mine=false, hidden=true, marked=false){
            this.is_mine = is_mine;
            this.hidden = hidden;
            this.marked = marked;
            this.x = x;
            this.y = y;

            cells.push(this);
        
        }
    

        create_button(){

            var btn = $('<button class="game-cell" oncontextmenu="return false;">');
            $(".game-grid").css("grid-template-columns", `repeat(${grid_size}, 1fr)`)
            $(".game-grid").css("grid-template-rows", `repeat(${grid_size}, 1fr)`)
            $(".game-grid").append(btn);

            //Bind the click event 
            // We use an arrow function to avoid 'this' being lost
            $(btn).mousedown( (e) => {

                if(e.which == 1){
                    this.left_click_action();

                }else if(e.which == 3){
                    this.right_click_action();

               }
            });

            // Make the button a property of the object
            this.button_object = btn;
            // Produce checkerboard pattern
            this.button_object.css({"background": BG_COLORS[(this.x+this.y)%2]})
            
        }


        // On left click, game is over the cell is a mine
        // Else display the number of neighbouring mines
        left_click_action(){

            if(!game_over){
                if(!this.marked){
                    if(this.is_mine){
                        Cell.show_mine();
                    }else{
                        this.show_neighbour_mine_count();
                        Cell.update_game_text();
                    }
                }

                // check if player won
                if(cells.filter(cell => cell.hidden).length == num_mines){
                    $(".game-title").text("You won!");
                    game_over = true;
                }
            }
        }


        // Right click is for marking suspected mines 
        right_click_action(){

            if(!game_over && this.hidden){
                // marked cells become unmarked and vice versa
                this.marked = !this.marked;
                // change colour 
                this.marked ? $(this.button_object).css("background", "red") : $(this.button_object).css("background", BG_COLORS[(this.x+this.y)%2]);
                Cell.update_game_text();
            }
        }


        show_neighbour_mine_count(){

            if(this.hidden){
                let neighbour_mine_count = this.calculate_neighbour_mine_count();
                if(neighbour_mine_count != 0){
                    $(this.button_object).text(neighbour_mine_count);
                }
                $(this.button_object).css("background",  BG_COLORS_OPEN[(this.x+this.y)%2]);
                $(this.button_object).css("color",  TEXT_COLORS[neighbour_mine_count-1]);
                this.hidden = false;
    
                // if neighbour_mine_count is 0, we use recursion to open up all surrounding cells
                if(neighbour_mine_count == 0){
                    for(let i=-1; i<=1;i++){
                        for(let j=-1; j<=1;j++){
                            this.get_cell_from_coords(this.x+i, this.y+j)?.show_neighbour_mine_count()
                        }
                    }
                }
            }
        }


        calculate_neighbour_mine_count(){

            let neighbours = [];
            for(let i=-1; i<=1;i++){
                for(let j=-1; j<=1;j++){
                    neighbours.push(this.get_cell_from_coords(this.x+i, this.y+j));
                }
            }

            neighbours = neighbours.filter(obj => obj != undefined)
            return neighbours.filter(cell => cell.is_mine == true).length;
        }


        // Return the cell object from given x and y 
        get_cell_from_coords(x, y){
            return cells.filter(cell => cell.x == x && cell.y == y)[0]
        }


        // show all mines and display that the player has lost
        static show_mine(){

            game_over = true;
            $(".game-title").text("You lost!");

            // Show all mines, mark x on mines that were wrongly identified
            let unmarked_mines = cells.filter(cell => cell.is_mine && !cell.marked);
            let wrong_marks = cells.filter(cell => !cell.is_mine && cell.marked);

            for(let i=0; i<unmarked_mines.length; i++){ 
                unmarked_mines[i].button_object.css({"color": TEXT_COLORS[i%TEXT_COLORS.length], 
                                                     "background": TEXT_COLORS_LIGHT[i%TEXT_COLORS.length],
                                                     "font-size": ["30px", "25px", "20px"][GRID_SIZES.indexOf(grid_size)]
                                                    });
                unmarked_mines[i].button_object.text("•");
            }

            for(let i=0; i<wrong_marks.length; i++){
                wrong_marks[i].button_object.css({"background": BG_COLORS[(wrong_marks[i].x+wrong_marks[i].y)%2],
                                                  "color": "red",
                                                  "font-size": ["30px", "25px", "20px"][GRID_SIZES.indexOf(grid_size)]
                                                });
                wrong_marks[i].button_object.text("×");
            }
        }


        static update_game_text(){
            $(".game-text").html($('<text style="font-size:30px">'+'■  '+'</text>\n'));
            $(".game-text").append(num_mines-cells.filter(cell => cell.marked).length);
        }


        static create_mines(){
            let mines = cells.sort(() => 0.5 - Math.random()).slice(0,num_mines);

            for(let i=0; i<mines.length; i++){
                mines[i].is_mine = true;
            }
        }

    }

        
    // define cells 
    function define_cells(size){
        for(let i=0; i<size; i++){
            for(let j=0; j<size; j++){
                
                let c = new Cell(i, j);
                c.create_button();
    
            }
        }
    }
    

    // Reset button
    $(".reset-btn").mousedown( () =>{

        grid_size = GRID_SIZES[$(".difficulty-level").val()];
        num_mines = NUM_MINES_LVLS[$(".difficulty-level").val()];
        $(".game-title").text("Minesweeper");
        game_over = false;

        for(i=0; i<cells.length;i++){
            cells[i].button_object.remove();
        }
        cells = [];

        define_cells(grid_size);

        Cell.update_game_text();

        Cell.create_mines();
    });

    define_cells(GRID_SIZES[0]);
    // Create game text
    Cell.update_game_text();

    Cell.create_mines();


});
