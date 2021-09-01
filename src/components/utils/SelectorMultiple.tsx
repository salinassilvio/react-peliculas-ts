import './SelectorMultiple.css';

export default function SelectorMultiple(props: selectorMultipleProps) {

    //Seleccionar
    function seleccionar(item: selectorMultipleModel){
        const seleccionados = [...props.seleccionados,item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);
        props.onChange(seleccionados,noSeleccionados);
    }

    //Deseleccionar
    function deseleccionar(item: selectorMultipleModel){
        const seleccionados = props.seleccionados.filter(valor => valor !== item);
        const noSeleccionados = [...props.noSeleccionados,item];
        props.onChange(seleccionados,noSeleccionados);
    }

    //seleccionados Todos
    function seleccionarTodo(){
        const seleccionados = [...props.seleccionados,...props.noSeleccionados];
        const noSeleccionados: selectorMultipleModel[] = [];
        props.onChange(seleccionados,noSeleccionados);
    }

    //deseleccionar Todos
    function deseleccionarTodo(){
        const noSeleccionados = [...props.noSeleccionados,...props.seleccionados];
        const seleccionados : selectorMultipleModel[] = [];
        props.onChange(seleccionados,noSeleccionados);
    }

    return (
        <div className="selector-multiple">
            <ul>
                {props.noSeleccionados.map( item =>
                    <li key={item.llave} onClick={() => seleccionar(item)}>{item.valor}</li>
                )}
            </ul>
            <div className="selector-multiple-botones">
                <button type="button" onClick={seleccionarTodo}>{'>>'}</button>
                <button type="button" onClick={deseleccionarTodo}>{'<<'}</button>
            </div>
            <ul>
                {props.seleccionados.map( item =>
                    <li key={item.llave} onClick={() => deseleccionar(item)}>{item.valor}</li>
                )}
            </ul>
        </div>
    )
}

interface selectorMultipleProps{
    seleccionados: selectorMultipleModel[];
    noSeleccionados: selectorMultipleModel[];
    onChange(seleccionados: selectorMultipleModel[], 
                noSeleccionados: selectorMultipleModel[]): void;
}

export interface selectorMultipleModel{
    llave: number;
    valor: string;
}
