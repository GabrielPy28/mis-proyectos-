sudoku= [[5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]]

def print_sudoku(sudoku):
    for l in sudoku:
        print(l)

def encontrando_coordenada(val):
    if val <= 2:
        return 0
    elif val <= 5:
        return 1
    else:
        return 2

def get_grid(x, y, sudoku):
    subgrid_col = encontrando_coordenada(x)
    subgrid_fila = encontrando_coordenada(y)

    grid = []
    for fila in sudoku[subgrid_fila * 3: subgrid_fila * 3 + 3]:
        for col in fila[subgrid_col * 3: subgrid_col * 3 + 3]:
            grid.append(col)
        
    return grid

def es_posible(x, y, v, sudoku):
    #revisando fila
    if v in sudoku[y]:
        return False
    
    #Revisando Columna:
    col = [fila[x] for fila in sudoku]
    if v in col:
        return False

    #revisando cuadricula 3x3
    grid3x3 = get_grid(x, y, sudoku)
    if v in grid3x3:
        return False

    return True

def solucion_sudoku(sudoku):
    for y in range(9):
        for x in range(9):
            if sudoku[y][x] == 0:
                for i in range(1, 10):
                    if es_posible(x, y, i, sudoku):
                        sudoku[y][x] = i
                        solucion_sudoku(sudoku)
                        sudoku[y][x] = 0
                return
    print_sudoku(sudoku)
    return

solucion_sudoku(sudoku)